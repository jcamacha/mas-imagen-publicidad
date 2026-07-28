import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// ── Capa 0: Caracteres no latinos ──
const NON_LATIN =
  /[\u0400-\u04FF\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\u0600-\u06FF\u0E00-\u0E7F\uAC00-\uD7AF]/u;

// ── Capa 1: Blacklist de palabras spam ──
const SPAM_WORDS = [
  // Farmacéuticos
  "viagra", "cialis", "xanax", "tramadol", "ambien", "valium", "soma",
  "hydrocodone", "oxycodone", "phentermine", "adipex", "levitra",
  // Apuestas
  "casino", "poker online", "blackjack", "slot machine", "roulette",
  "betting", "sportsbook", "gambling",
  // SEO / Marketing spam
  "backlink", "link building", "pagerank", "guest post",
  "search engine optimization", "seo services", "traffic organic",
  // +18
  "porn", "xxx", "adult", "escort", "webcam", "onlyfans", "camgirl",
  // Finanzas spam
  "bitcoin", "cryptocurrency", "forex", "binary options",
  "make money fast", "earn money online", "work from home",
  "investment opportunity", "passive income",
  // "Brujería" y amarres
  "amarre", "hechizo", "brujería", "brujeria", "chaman",
  "tarot", "videncia", "horóscopo",
  // Genéricos spam
  "click here", "free trial", "act now", "limited offer",
  "congratulations", "you won", "winner", "selected",
  "buy now", "order now", "cheap", "discount",
  "unsubscribe", "newsletter", "dear sir",
  "loan", "credit card", "debt", "refinance",
  "insurance", "mortgage", "pennystock",
  "nigerian", "prince", "lottery",
  "seo", "ppc", "ranking google", "posicionamiento organico",
];

// ── Capa 2: Máximo de URLs ──
const MAX_URLS = 2;

// ── Capa 3: Longitud del mensaje ──
const MIN_TOKENS = 4;
const MAX_CHARS = 2000;

// ── Capa 4: Nombre sospechoso ──
const NAME_SUSPICIOUS = /\d{3}|[<>{}]/;

// ── Capa 5: Repetición de palabras ──
const MAX_REPEAT = 10;

// ── Tokenizador ──
function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-záéíóúüñ0-9\s]/g, "")
    .split(/\s+/)
    .filter(Boolean);
}

// ── Anti-spam cascade ──
function isSpam(mensaje: string, nombre: string): string | null {
  // Capa 0: caracteres no latinos
  if (NON_LATIN.test(mensaje)) return "Capa 0: caracteres no latinos";

  // Capa 1: palabras spam
  const lower = mensaje.toLowerCase();
  for (const word of SPAM_WORDS) {
    if (lower.includes(word)) return `Capa 1: palabra spam "${word}"`;
  }

  // Capa 2: URLs
  const urls = (mensaje.match(/https?:\/\//g) || []).length;
  if (urls > MAX_URLS) return `Capa 2: ${urls} URLs`;

  // Capa 3: longitud
  const tokens = tokenize(mensaje);
  if (tokens.length < MIN_TOKENS) return `Capa 3: solo ${tokens.length} palabras`;
  if (mensaje.length > MAX_CHARS) return `Capa 3: ${mensaje.length} caracteres`;

  // Capa 4: nombre sospechoso
  if (NAME_SUSPICIOUS.test(nombre)) return "Capa 4: nombre sospechoso";

  // Capa 5: repetición
  const freq: Record<string, number> = {};
  for (const t of tokens) {
    freq[t] = (freq[t] || 0) + 1;
    if (freq[t] > MAX_REPEAT) return `Capa 5: "${t}" repetido ${freq[t]} veces`;
  }

  return null;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, empresa, email, telefono, tipo, mensaje, website } = body;

    // Honeypot
    if (website) {
      return NextResponse.json({ success: true });
    }

    // Required fields
    if (!nombre || !empresa || !email || !telefono || !mensaje) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    // Anti-spam cascade
    const spamReason = isSpam(mensaje, nombre);
    if (spamReason) {
      console.log(`Spam bloqueado: ${spamReason}`);
      return NextResponse.json({ success: true });
    }

    const tipoLabel =
      tipo === "digital"
        ? "Presencia Digital"
        : tipo === "fisico"
        ? "Presencia Física"
        : "Ambos (Digital + Físico)";

    await resend.emails.send({
      from: "Más Imagen <onboarding@resend.dev>",
      to: "crtainboy@gmail.com",
      subject: `Cotización de ${nombre} — ${empresa}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #e84a3d;">Nueva solicitud de cotización</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold;">Nombre:</td><td>${nombre}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Empresa:</td><td>${empresa}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td>${email}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Teléfono:</td><td>${telefono}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Servicio:</td><td>${tipoLabel}</td></tr>
          </table>
          <h3 style="margin-top: 20px;">Mensaje:</h3>
          <p style="background: #f5f5f5; padding: 16px; border-radius: 8px;">${mensaje}</p>
          <p style="color: #999; font-size: 12px; margin-top: 30px;">
            Enviado desde el formulario de contacto de Más Imagen Publicidad
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje" },
      { status: 500 }
    );
  }
}
