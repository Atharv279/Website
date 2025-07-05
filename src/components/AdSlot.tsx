import { cn } from '@/lib/utils';

interface AdSlotProps {
  id: string;
  type: 'banner' | 'sidebar' | 'in-article';
  className?: string;
}

// These values are examples and should be configured according to AdSense guidelines
const adSenseClient = "ca-pub-your-publisher-id"; // Replace with your AdSense publisher ID
const adSlotsMap = {
  banner: "your-banner-ad-slot-id", // Replace with your banner ad slot ID
  sidebar: "your-sidebar-ad-slot-id", // Replace with your sidebar ad slot ID
  'in-article': "your-in-article-ad-slot-id", // Replace with your in-article ad slot ID
};

export default function AdSlot({ id, type, className }: AdSlotProps) {
  // In a real app, you might conditionally render based on ad approval or environment
  const showAds = process.env.NODE_ENV === 'production'; // Example: only show in production

  const adSlotId = adSlotsMap[type];

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

  // Note: AdSense script should be included in the <head> of your document, typically in layout.tsx
  // <Script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adSenseClient}`} crossOrigin="anonymous" strategy="afterInteractive" />

  if (!showAds) { // Or some other logic to hide ads if not approved/configured
    return (
      <div className={placeholderClasses} aria-label={`Ad slot placeholder for ${type} ad`}>
        <p>Ad Slot ({type})</p>
        <p className="text-xs">(ID: {id})</p>
      </div>
    );
  }
  
  // For actual ads - ensure AdSense script is loaded and policies are met
  // This component only renders the <ins> tag structure.
  return (
    <div className={cn('min-h-[50px]', className)} data-ad-slot-id={id} data-ad-type={type}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={adSenseClient}
        data-ad-slot={adSlotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      {/* The following script is usually not needed here if the main AdSense script pushes ads. 
          However, some setups might require it. Test thoroughly.
      <Script id={`adsbygoogle-init-${id}`} strategy="afterInteractive">
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </Script> 
      */}
    </div>
  );
}
