import type { SocialId } from "@/content/site";

export function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4.2 11.8 11.8 4.2" />
      <path d="M5.6 4.2h6.2v6.2" />
    </svg>
  );
}

export function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M3.4 3.4 12.6 12.6M12.6 3.4 3.4 12.6" />
    </svg>
  );
}

function Email() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <rect x="3.2" y="5.4" width="17.6" height="13.2" rx="2.6" />
      <path d="m4.6 7.7 7.4 5.3 7.4-5.3" strokeLinecap="round" />
    </svg>
  );
}

function Instagram() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <rect x="3.4" y="3.4" width="17.2" height="17.2" rx="5" />
      <circle cx="12" cy="12" r="3.9" />
      <circle cx="17" cy="7" r="1.05" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedIn() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3.2"
        y="3.2"
        width="17.6"
        height="17.6"
        rx="3.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M7.5 10.2v6.3M7.5 7.6v.1M11.2 16.5v-6.3m0 2.4c0-1.55 1.05-2.4 2.35-2.4 1.35 0 2.15.9 2.15 2.6v3.7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GitHub() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.12.68-3.78-1.34-3.78-1.34-.51-1.3-1.25-1.64-1.25-1.64-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.49-.28-5.1-1.24-5.1-5.55 0-1.23.43-2.23 1.15-3.02-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.15a10.6 10.6 0 0 1 5.61 0c2.13-1.45 3.07-1.15 3.07-1.15.61 1.54.23 2.68.11 2.96.72.79 1.15 1.79 1.15 3.02 0 4.32-2.62 5.27-5.12 5.55.4.35.76 1.03.76 2.08v3.09c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8Z"
        fill="currentColor"
      />
    </svg>
  );
}

const map: Record<SocialId, () => React.JSX.Element> = {
  email: Email,
  instagram: Instagram,
  linkedin: LinkedIn,
  github: GitHub,
};

export function SocialIcon({ id }: { id: SocialId }) {
  const Icon = map[id];
  return <Icon />;
}
