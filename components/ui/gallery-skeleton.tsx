export function GallerySkeleton() {
  return (
    <section className="section-shell" aria-busy="true" aria-label="Loading gallery">
      <div className="section-inner">
        <div className="mb-12 h-4 w-32 rounded-full bg-wine/10" />
        <div className="mb-4 h-12 max-w-lg rounded-lg bg-wine/8" />
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-9 w-24 rounded-full bg-white/60" />
          ))}
        </div>
        <div className="columns-1 gap-5 md:columns-2 lg:columns-3 xl:columns-4">
          {[380, 460, 520, 400, 440, 500].map((h, i) => (
            <div
              key={i}
              className="mb-5 break-inside-avoid overflow-hidden rounded-[1.25rem] image-shimmer"
              style={{ height: h }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
