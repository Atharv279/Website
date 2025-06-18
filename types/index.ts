
export interface Post {
  slug: string;
  title: string;
  date: string;
  author: string;
  description: string;
  category: string;
  tags: string[];
  image?: string; // Optional cover image URL
  aiHint?: string; // Optional AI hint for the image
  contentHtml: string; // Parsed HTML content
  readingTime: string; // Estimated reading time
}

export interface LegalPage {
  slug: string;
  title: string;
  contentHtml: string;
}

export interface NavItem {
  href: string;
  label: string;
  icon?: React.ElementType;
}
