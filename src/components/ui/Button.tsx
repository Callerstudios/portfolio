import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
}

function Button({ children, href, variant = "primary" }: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-blue-600 hover:bg-blue-500 text-white"
      : "border border-slate-700 hover:border-white text-white";

  return (
    <a
      href={href}
      className={`rounded-lg px-6 py-3 font-medium transition ${styles}`}
    >
      {children}
    </a>
  );
}

export default Button;
