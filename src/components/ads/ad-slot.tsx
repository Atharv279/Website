import type { FC } from 'react';
import { cn } from '@/lib/utils';
import Script from 'next/script';
import { ADSENSE_CONFIG, shouldShowAds } from '@/lib/adsense-config';

interface AdSlotProps {
  width?: number; // Changed to optional
  height: number;
  label: string;
  className?: string;
  fullWidth?: boolean; // New prop, defaults to false if not provided
  adSlotId?: string; // Optional AdSense ad slot ID
}

const AdSlot: FC<AdSlotProps> = ({ width, height, label, className, fullWidth = false, adSlotId }) => {
  // Show ads in production or when explicitly enabled
  const showAds = shouldShowAds() && adSlotId;
  
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

  // If we have an ad slot ID and should show ads, render the actual AdSense ad
  if (showAds) {
    return (
      <div
        className={cn('min-h-[50px]', className)}
        style={adSlotStyles}
        aria-label={`Advertisement: ${label}`}
        role="complementary"
      >
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={ADSENSE_CONFIG.publisherId}
          data-ad-slot={adSlotId}
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <Script id={`adsbygoogle-init-${adSlotId}`} strategy="afterInteractive">
          {`(adsbygoogle = window.adsbygoogle || []).push({});`}
        </Script>
      </div>
    );
  }

  // Default placeholder for development or when no ad slot ID is provided
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
        {adSlotId && <p className="text-xs text-muted-foreground">Ad Slot: {adSlotId}</p>}
      </div>
    </div>
  );
};

export default AdSlot;
