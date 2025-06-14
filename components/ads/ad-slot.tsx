import type { FC } from 'react';
import { cn } from '@/lib/utils';

interface AdSlotProps {
  width?: number; // Changed to optional
  height: number;
  label: string;
  className?: string;
  fullWidth?: boolean; // New prop, defaults to false if not provided
}

const AdSlot: FC<AdSlotProps> = ({ width, height, label, className, fullWidth = false }) => {
  const adSlotClassesArray: string[] = ['flex items-center justify-center bg-muted/50 border border-dashed border-muted-foreground text-muted-foreground text-sm rounded-md'];
  const adSlotStyles: React.CSSProperties = { height: `${height}px` };

  if (fullWidth) {
    adSlotClassesArray.push('w-full');
  } else if (width && width > 0) { // ensure width is positive if used for pixels
    adSlotStyles.width = `${width}px`;
  }
  // If fullWidth is false AND width is not provided or not positive, it will be an auto-width flex item.

  const widthDisplay = fullWidth 
    ? 'Full Width' 
    : (width && width > 0) 
      ? `${width}px` 
      : 'Auto Width';

  return (
    <div
      className={cn(adSlotClassesArray, className)}
      style={adSlotStyles}
      aria-label={`Advertisement: ${label}`}
      role="complementary"
    >
      <div className="text-center p-2">
        <p className="font-medium">{label}</p>
        <p className="text-xs">({widthDisplay} x {height}px)</p>
      </div>
    </div>
  );
};

export default AdSlot;
