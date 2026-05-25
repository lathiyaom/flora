import { brand } from "@/data/brand";
import { why } from "@/data/site";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";

export function WhyEternalPetal() {
  return (
    <Section
      eyebrow={`Why ${brand.name}`}
      title="Because some gestures should not fade."
      className="relative overflow-hidden bg-wine text-ivory"
      inverted
    >
      <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-rosegold/15 blur-3xl" aria-hidden />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {why.map((item, index) => {
          const Icon = item.icon;
          return (
            <Reveal
              key={item.title}
              delay={index * 0.05}
              className="rounded-[1.25rem] border border-ivory/10 bg-white/[0.06] p-7 backdrop-blur-sm transition duration-500 hover:border-ivory/20 hover:bg-white/[0.09]"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-ivory/12 text-champagne">
                <Icon size={20} aria-hidden />
              </div>
              <h3 className="font-cormorant text-2xl tracking-tight">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory/72">{item.body}</p>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
