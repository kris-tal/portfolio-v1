import type { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  className?: string;
}

export default function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={`rounded bg-surface/80 px-2.5 py-1 font-mono text-body-sm text-textMuted transition-colors hover:text-text ${className}`}
    >
      {children}
    </span>
  );
}
