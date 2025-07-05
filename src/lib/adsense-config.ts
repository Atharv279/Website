// AdSense Configuration
export const ADSENSE_CONFIG = {
  // Your AdSense publisher ID
  publisherId: "ca-pub-5015165884772367",
  
  // Ad slot IDs - Replace these with your actual ad slot IDs from AdSense
  adSlots: {
    // Banner ads
    "top-banner": "your-top-banner-ad-slot-id",
    "home-after-articles": "your-home-after-articles-ad-slot-id", 
    "home-after-highlights": "your-home-after-highlights-ad-slot-id",
    "articles-list-banner": "your-articles-list-banner-ad-slot-id",
    "market-updates-banner": "your-market-updates-banner-ad-slot-id",
    
    // Sidebar ads
    "sidebar-wide": "your-sidebar-wide-ad-slot-id",
    "dashboard-square": "your-dashboard-square-ad-slot-id",
    
    // In-article ads
    "in-article": "your-in-article-ad-slot-id",
    
    // Display ads
    "large-display": "your-large-display-ad-slot-id",
    "mid-content-banner": "your-mid-content-banner-ad-slot-id",
    "below-article-desktop": "your-below-article-desktop-ad-slot-id",
    "below-article-mobile": "your-below-article-mobile-ad-slot-id",
  },
  
  // Environment settings
  showAds: process.env.NODE_ENV === 'production' || process.env.NEXT_PUBLIC_SHOW_ADS === 'true',
};

// Helper function to get ad slot ID
export function getAdSlotId(key: string): string | undefined {
  return ADSENSE_CONFIG.adSlots[key as keyof typeof ADSENSE_CONFIG.adSlots];
}

// Helper function to check if ads should be shown
export function shouldShowAds(): boolean {
  return ADSENSE_CONFIG.showAds;
} 