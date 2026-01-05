import { cn } from "@/app/lib/cn";
import type { ImageAsset } from "@/app/content/guidelines.types";

type ImageCardProps = {
  image: ImageAsset;
  className?: string;
};

export default function ImageCard({ image, className }: ImageCardProps) {
  if (!image) {
    console.error("ImageCard recibió image=undefined");
    return null;
  }

  const sizeClass = image.size?.kind === "class" ? image.size.value : undefined;
  const sizeStyle =
    image.size?.kind === "px" ? { height: image.size.value } : undefined;

  return (
    <div className={cn("w-full", image.layout === "full" && "col-span-12")}>
      {image.meta?.title ? (
        <div className="mb-3">
          {typeof image.meta.title === "string" ? (
            <div className="font-semibold text-[14px] leading-[120%]">
              {image.meta.title}
            </div>
          ) : (
            <div className="space-y-1">
              {image.meta.title.map((l, i) => (
                <div
                  key={i}
                  className={cn(
                    "text-[14px] leading-[140%]",
                    l.tone === "muted" ? "text-black/60" : "text-black",
                    l.weight === "semibold" ? "font-semibold" : "font-medium"
                  )}
                >
                  {l.text}
                </div>
              ))}
            </div>
          )}
        </div>
      ) : null}

      <div
        className={cn(
          "w-full overflow-hidden bg-black/5",
          sizeClass,
          className
        )}
        style={sizeStyle}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Caption abajo */}
      {image.meta?.caption ? (
        <div className="mt-3">
          {typeof image.meta.caption === "string" ? (
            <div className="text-black/60 text-[14px] leading-[140%]">
              {image.meta.caption}
            </div>
          ) : (
            <div className="space-y-1">
              {image.meta.caption.map((l, i) => (
                <div
                  key={i}
                  className={cn(
                    "text-[14px] leading-[140%]",
                    l.tone === "muted" ? "text-black/60" : "text-black",
                    l.weight === "semibold" ? "font-semibold" : "font-medium"
                  )}
                >
                  {l.text}
                </div>
              ))}
            </div>
          )}
        </div>
      ) : null}
      
      {image.meta?.description ? (
        <div className="mt-2">
          {typeof image.meta.description === "string" ? (
            <div className="text-black/60 text-[14px] leading-[140%]">
              {image.meta.description}
            </div>
          ) : (
            <div className="space-y-1">
              {image.meta.description.map((l, i) => (
                <div
                  key={i}
                  className={cn(
                    "text-[14px] leading-[140%]",
                    l.tone === "muted" ? "text-black/60" : "text-black",
                    l.weight === "semibold" ? "font-semibold" : "font-medium"
                  )}
                >
                  {l.text}
                </div>
              ))}
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
