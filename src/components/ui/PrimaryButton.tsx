import React from "react"; // Standard import for React
// import type React from "react"; // You can remove or keep this line,
                                  // but the line above is necessary for runtime

interface PrimaryButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export function PrimaryButton({ children, href, className = "", onClick }: PrimaryButtonProps) {
  // Using the custom font-roboto-mono and colors defined in your tailwind.config.js
  const buttonClasses = `font-roboto-mono bg-primary text-primary-foreground font-bold text-lg leading-[30px] tracking-[-0.015em] rounded-[31px] flex items-center justify-center transition-colors hover:bg-primary/90 ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}
