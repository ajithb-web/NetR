import { cn } from "@/lib/utils";

export const LogoMark = ({ className }: { className?: string }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={cn("shrink-0", className)}
  >
    <path
      d="M3.94722 4.02589L7.38471 1.95032C8.37805 1.35054 9.62195 1.35054 10.6153 1.95033L14.0528 4.02596C14.9898 4.59173 15.5625 5.60653 15.5625 6.70111V11.3101C15.5625 12.4064 14.988 13.4227 14.0485 13.9878L10.6139 16.0542C9.62116 16.6514 8.37944 16.6504 7.38764 16.0515L3.94719 13.974C3.01019 13.4083 2.4375 12.3935 2.4375 11.2989V6.70106C2.4375 5.60648 3.0102 4.59168 3.94722 4.02589Z"
      stroke="currentColor"
      strokeWidth="1.875"
      strokeLinejoin="bevel"
    />
    <path
      d="M13.6875 9C13.6875 6.41117 11.5888 4.3125 9 4.3125C6.41116 4.3125 4.3125 6.41117 4.3125 9C4.3125 11.5888 6.41116 13.6875 9 13.6875C11.5888 13.6875 13.6875 11.5888 13.6875 9Z"
      fill="currentColor"
    />
  </svg>
);

export const Logo = ({ className }: { className?: string }) => (
  <span
    className={cn(
      "text-foreground flex shrink-0 items-center gap-2 leading-none",
      className,
    )}
  >
    <LogoMark />
    <span className="font-display text-[17px] font-bold tracking-tight">
      NetResolute
    </span>
  </span>
);
