import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // disallow: ['/admin/', '/private/'], // Example: disallow specific paths
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    // host: BASE_URL, // Optional: Specify preferred host (e.g., with or without www)
  };
}
