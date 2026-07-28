import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, empresa, email, telefono, tipo, mensaje, website } = body;

    // Honeypot check
    if (website) {
      return NextResponse.json({ success: true });
    }

    // Validate required fields
    if (!nombre || !empresa || !email || !telefono || !mensaje) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      );
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
