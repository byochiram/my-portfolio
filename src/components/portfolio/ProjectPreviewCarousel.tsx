import { useState } from "react";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";

export function ProjectPreviewCarousel({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [index, setIndex] = useState(0);
  const hasImages = images.length > 0;
  const count = images.length;

  const go = (dir: -1 | 1) => {
    setIndex((i) => (i + dir + count) % count);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-muted aspect-[16/10]">
      {hasImages ? (
        <>
          <div
            className="flex h-full w-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {images.map((src, i) => (
              <img
                key={src + i}
                src={src}
                alt={`${title} preview ${i + 1}`}
                loading="lazy"
                className="h-full w-full flex-shrink-0 object-cover"
              />
            ))}
          </div>

          {count > 1 && (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous preview"
                className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-background/80 backdrop-blur border border-border text-foreground hover:bg-background transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next preview"
                className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-background/80 backdrop-blur border border-border text-foreground hover:bg-background transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-background/70 backdrop-blur px-2 py-1 border border-border">
                {images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to preview ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? "w-5 bg-primary" : "w-1.5 bg-foreground/30"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-primary/10 via-muted to-secondary/10 text-muted-foreground">
          <ImageIcon className="h-7 w-7" />
          <p className="text-xs">Previews coming soon</p>
        </div>
      )}
    </div>
  );
}