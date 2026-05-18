import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  ChevronLeft,
  ChevronRight,
  ImageIcon,
  Maximize2,
  X,
} from "lucide-react";

type ProjectPreviewCarouselProps = {
  images: string[];
  title: string;
};

export function ProjectPreviewCarousel({
  images,
  title,
}: ProjectPreviewCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const hasImages = images.length > 0;
  const hasMultipleImages = images.length > 1;

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  useEffect(() => {
    if (!isPreviewOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsPreviewOpen(false);
      if (event.key === "ArrowLeft" && hasMultipleImages) goToPrevious();
      if (event.key === "ArrowRight" && hasMultipleImages) goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPreviewOpen, hasMultipleImages]);

  if (!hasImages) {
    return (
      <div className="flex aspect-[16/10] items-center justify-center rounded-2xl border border-border bg-muted/50">
        <div className="text-center text-muted-foreground">
          <ImageIcon className="mx-auto h-8 w-8" />
          <p className="mt-2 text-xs font-medium">Project Preview</p>
        </div>
      </div>
    );
  }

  const previewModal =
    isPreviewOpen &&
    createPortal(
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-sm"
        onClick={() => setIsPreviewOpen(false)}
      >
        <div
          className="relative w-full max-w-6xl"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="mb-4 flex items-center justify-between gap-4 text-white">
            <div>
              <p className="text-sm text-white/70">Project Preview</p>
              <h3 className="text-lg font-semibold">{title}</h3>
            </div>

            <button
              type="button"
              onClick={() => setIsPreviewOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
              aria-label="Close preview"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-2 shadow-2xl">
            <img
              src={images[activeIndex]}
              alt={`${title} preview ${activeIndex + 1}`}
              className="max-h-[78svh] w-full rounded-2xl object-contain"
            />

            {hasMultipleImages && (
              <>
                <button
                  type="button"
                  onClick={goToPrevious}
                  className="absolute left-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-foreground shadow-card transition-all hover:scale-105 hover:bg-white"
                  aria-label={`Previous preview for ${title}`}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={goToNext}
                  className="absolute right-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-foreground shadow-card transition-all hover:scale-105 hover:bg-white"
                  aria-label={`Next preview for ${title}`}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>

          {hasMultipleImages && (
            <div className="mt-4 flex items-center justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    activeIndex === index
                      ? "w-7 bg-white"
                      : "w-2 bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Go to preview ${index + 1} for ${title}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>,
      document.body
    );

  return (
    <>
      <div className="group/preview relative overflow-hidden rounded-2xl border border-border bg-muted">
        <button
          type="button"
          onClick={() => setIsPreviewOpen(true)}
          className="block w-full cursor-zoom-in text-left"
          aria-label={`Open larger preview for ${title}`}
        >
          <img
            src={images[activeIndex]}
            alt={`${title} preview ${activeIndex + 1}`}
            className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover/preview:scale-[1.03]"
          />

          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/45 to-transparent" />

          <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/85 text-foreground opacity-0 shadow-card backdrop-blur transition-all group-hover/preview:opacity-100">
            <Maximize2 className="h-4 w-4" />
          </div>
        </button>

        {hasMultipleImages && (
          <>
            <button
              type="button"
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-foreground shadow-card backdrop-blur transition-all hover:scale-105 hover:bg-white"
              aria-label={`Previous preview for ${title}`}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={goToNext}
              className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-foreground shadow-card backdrop-blur transition-all hover:scale-105 hover:bg-white"
              aria-label={`Next preview for ${title}`}
            >
              <ChevronRight className="h-4 w-4" />
            </button>

            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    activeIndex === index
                      ? "w-5 bg-white"
                      : "w-1.5 bg-white/60 hover:bg-white"
                  }`}
                  aria-label={`Go to preview ${index + 1} for ${title}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {previewModal}
    </>
  );
}