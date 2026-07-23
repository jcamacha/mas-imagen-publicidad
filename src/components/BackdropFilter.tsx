export default function BackdropFilter() {
  return (
    <div
      className="fixed inset-0 z-[1]"
      style={{
        backdropFilter: "grayscale(1) contrast(1.5)",
        WebkitBackdropFilter: "grayscale(1) contrast(1.5)",
        background: "transparent",
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  );
}
