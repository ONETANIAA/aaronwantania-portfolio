import Image from "next/image";

/**
 * The real portrait: a cut-out bust for the hero and the same photo framed
 * naturally (head and shoulders) for the small author chip.
 */
export function Portrait({
  variant = "bust",
}: {
  variant?: "bust" | "avatar";
}) {
  if (variant === "avatar") {
    return (
      <Image
        src="/img/aaron-avatar.jpg"
        alt=""
        width={400}
        height={400}
        className="portrait-avatar"
      />
    );
  }

  return (
    <Image
      src="/img/aaron.webp"
      alt="Portrait of Aaron Wantania"
      width={600}
      height={857}
      priority
      sizes="(max-width: 860px) 80vw, 640px"
      className="portrait-photo"
    />
  );
}
