import { cn } from '@/lib/utils';
import Script from 'next/script';
import { ADSENSE_CONFIG, getAdSlotId, shouldShowAds } from '@/lib/adsense-config';

interface AdSlotProps {
  id: string;
  type: 'banner' | 'sidebar' | 'in-article';
  className?: string;
}

export default function AdSlot({ id, type, className }: AdSlotProps) {
  // Get the ad slot ID from configuration
  const adSlotId = getAdSlotId(id);
  const showAds = shouldShowAds() && adSlotId;

  // Placeholder visible during development or if ads are not shown
  const placeholderClasses = cn(
    'ad-placeholder',
    {
      'ad-placeholder-top-banner': type === 'banner',
      'ad-placeholder-sidebar': type === 'sidebar',
      'ad-placeholder-in-article': type === 'in-article',
    },
    className
  );

  if (!showAds) {
    return (
      <div className={placeholderClasses} aria-label={`Ad slot placeholder for ${type} ad`}>
        <p>Ad Slot ({type})</p>
        <p className="text-xs">(ID: {id})</p>
        {adSlotId && <p className="text-xs text-muted-foreground">AdSense Slot: {adSlotId}</p>}
      </div>
    );
  }
  
  // For actual ads - ensure AdSense script is loaded and policies are met
  return (
    <div className={cn('min-h-[50px]', className)} data-ad-slot-id={id} data-ad-type={type}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={ADSENSE_CONFIG.publisherId}
        data-ad-slot={adSlotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <Script id={`adsbygoogle-init-${id}`} strategy="afterInteractive">
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </Script>
    </div>
  );
}
