import type { ReactNode } from "react";
import { SectionHeader } from "@/components/motion/section-header";
import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className,
  headerClassName,
  inverted
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
  headerClassName?: string;
  inverted?: boolean;
}) {
  return (
    <section id={id} className={cn("section-shell", className)}>
      <div className="section-inner">
        <SectionHeader eyebrow={eyebrow} title={title} className={headerClassName} inverted={inverted} />
        {children}
      </div>
    </section>
  );
}
