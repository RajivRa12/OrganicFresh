import type { SVGProps } from "react";

export function AgriConnectLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2a10 10 0 0 0-10 10c0 3.37 1.67 6.36 4.19 8.12" fill="hsl(var(--primary))" />
      <path d="M17.81 14.19A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10" fill="hsl(var(--primary))" opacity="0.6" />
      <path d="M2 12h20" stroke="hsl(var(--primary-foreground))" strokeWidth="1" opacity="0.5" />
      <path d="M12 22a10 10 0 0 0 10-10" fill="hsl(var(--accent))" opacity="0.5"/>
      <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" fill="hsl(var(--background))" />
       <path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0" fill="hsl(var(--primary))" />
    </svg>
  );
}
