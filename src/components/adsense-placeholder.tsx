import { cn } from "@/lib/utils";

export function AdsensePlaceholder({
  className,
  width,
  height,
}: {
  className?: string;
  width?: number | string;
  height?: number | string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-muted/30 border-2 border-dashed rounded-lg text-muted-foreground",
        className
      )}
      style={{
        width: typeof width === 'number' ? `${width}px` : width || '100%',
        height: typeof height === 'number' ? `${height}px` : height || '100%',
      }}
    >
      <span className="text-sm">Advertisement</span>
    </div>
  );
}
