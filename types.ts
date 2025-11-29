export interface FrontMatter {
  title: string;
  date: string;
  category: 'goals' | 'planning' | 'building' | 'playing' | 'general';
  excerpt?: string;
  author?: string;
  image?: string; // URL to a cover image
}

export interface Post {
  slug: string;
  content: string;
  metadata: FrontMatter;
}

export interface GithubConfig {
  owner: string;
  repo: string;
  path: string;
  branch?: string;
}

export interface NavigationItem {
  label: string;
  path: string;
  category?: string;
}