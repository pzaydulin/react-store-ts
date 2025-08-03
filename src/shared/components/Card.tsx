import React from "react";

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
  title,
}: CardProps): React.ReactElement {
  return (
    <div
      className={`rounded-lg p-6 border border-border bg-card shadow-sm ${className}`}
    >
      {title && (
        <h3 className="font-semibold tracking-tight text-2xl overflow-hidden">
          {title}
        </h3>
      )}
      <div className="text-sm text-muted-foreground">{children}</div>
    </div>
  );
}
