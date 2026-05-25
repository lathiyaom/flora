import type { ReactNode } from "react";
import { SectionHeader } from "@/components/motion/section-header";
import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
  headerClassName,
  inverted,
  tone = "default"
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  headerClassName?: string;
  inverted?: boolean;
  tone?: "default" | "alt" | "ivory";
}) {
  return (
    <section
      id={id}
      className={cn(
        "section-shell",
        tone === "alt" && "section-alt",
        tone === "ivory" && "bg-ivory/40",
        className
      )}
    >
      <div className="section-inner">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          className={headerClassName}
          inverted={inverted}
        />
        {children}
      </div>
    </section>
  );
}
