import { Post, GithubConfig, FrontMatter } from '../types';

// Demo data to use when no valid GitHub repo is connected
const DEMO_POSTS: Post[] = [
  {
    slug: 'project-kickoff',
    content: `
The journey begins today. We are turning the overgrown backyard into a pristine 9-hole short game loop.

## The Vision
Imagine stepping out your back door onto a perfectly manicured bentgrass tee box. That is the dream.

## Challenges
- **Soil Quality**: Very clay-heavy.
- **Space**: It's a tight squeeze.
- **Budget**: Shoestring.
    `,
    metadata: {
      title: 'Project Kickoff: The Dream',
      date: '2023-09-01',
      category: 'planning',
      excerpt: 'Where we start turning a backyard into a golfer\'s paradise.',
      image: 'https://images.unsplash.com/photo-1599423300746-b62505b6e9a6?q=80&w=1600&auto=format&fit=crop'
    }
  },
  {
    slug: 'our-goals',
    content: `
Our primary goal is simple: Create a fun, challenging environment to practice the short game.

### Specific Targets
1. **Three distinct green complexes**.
2. **One pot bunker**.
3. **Low maintenance** design (as much as possible).

We want this to be a place where friends can come over, grab a wedge, and have a beer.
    `,
    metadata: {
      title: 'The Goals of Backyard 9',
      date: '2023-09-02',
      category: 'goals',
      excerpt: 'What we are aiming for with this renovation.',
      image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1600&auto=format&fit=crop'
    }
  },
  {
    slug: 'grading-day',
    content: `
The excavator arrived at 7 AM. It was loud, messy, and absolutely glorious.

We moved about 50 yards of dirt today to shape the first green complex. It looks like a crater right now, but you can see the lines forming.
    `,
    metadata: {
      title: 'Grading Day: Moving Earth',
      date: '2023-10-15',
      category: 'building',
      excerpt: 'Heavy machinery meets backyard turf.',
      image: 'https://images.unsplash.com/photo-1590059530432-8495a8183188?q=80&w=1600&auto=format&fit=crop'
    }
  },
  {
    slug: 'first-mow',
    content: `
The grass has grown in. It's time for the first cut.

I was nervous using the reel mower for the first time on the new sod, but it cut like butter. The stripes are faint, but they are there!
    `,
    metadata: {
      title: 'The First Mow',
      date: '2023-11-20',
      category: 'building',
      excerpt: 'The grass is finally ready for a trim.',
      image: 'https://images.unsplash.com/photo-1558350315-8aa00e8e4590?q=80&w=1600&auto=format&fit=crop'
    }
  },
  {
    slug: 'final-round',
    content: `
It's done. The flags are in. The sun is setting.

I played the full 9-hole loop this evening. The bunker play is devilish, but the satisfaction of hitting a nippy 56-degree wedge onto your own green is unmatched.

## Final Stats
- **Cost**: Too much.
- **Time**: 6 Months.
- **Fun**: Infinite.
    `,
    metadata: {
      title: 'Opening Day: The First Round',
      date: '2024-04-10',
      category: 'playing',
      excerpt: 'The project is complete. Time to play.',
      image: 'https://images.unsplash.com/photo-1563607424608-4155b4a97491?q=80&w=1600&auto=format&fit=crop'
    }
  }
];

const CACHE_KEY = 'backyard9_posts_cache';
const CACHE_TIME_KEY = 'backyard9_cache_time';
const CACHE_DURATION = 1000 * 60 * 15; // 15 minutes

export const getStoredConfig = (): GithubConfig | null => {
  const stored = localStorage.getItem('backyard9_config');
  return stored ? JSON.parse(stored) : null;
};

export const setStoredConfig = (config: GithubConfig) => {
  localStorage.setItem('backyard9_config', JSON.stringify(config));
  // Clear cache when config changes
  localStorage.removeItem(CACHE_KEY);
  localStorage.removeItem(CACHE_TIME_KEY);
};

// Helper to parse frontmatter without external libs
const parsePost = (filename: string, rawContent: string): Post => {
  const frontMatterRegex = /^---\n([\s\S]*?)\n---/;
  const match = rawContent.match(frontMatterRegex);
  
  let metadata: FrontMatter = {
    title: filename.replace('.md', ''),
    date: new Date().toISOString(),
    category: 'general',
  };

  let content = rawContent;

  if (match) {
    const frontMatterBlock = match[1];
    content = rawContent.replace(match[0], '').trim();
    
    // Simple YAML-like parsing
    const lines = frontMatterBlock.split('\n');
    lines.forEach(line => {
      const [key, ...valueParts] = line.split(':');
      if (key && valueParts.length > 0) {
        const value = valueParts.join(':').trim().replace(/^['"](.*)['"]$/, '$1'); // Remove quotes
        
        // Type safety for known keys
        if (key.trim() === 'title') metadata.title = value;
        if (key.trim() === 'date') metadata.date = value;
        if (key.trim() === 'category') metadata.category = value as FrontMatter['category'];
        if (key.trim() === 'excerpt') metadata.excerpt = value;
        if (key.trim() === 'author') metadata.author = value;
        if (key.trim() === 'image') metadata.image = value;
      }
    });
  }

  return {
    slug: filename.replace('.md', ''),
    content,
    metadata
  };
};

export const fetchPosts = async (config?: GithubConfig | null): Promise<Post[]> => {
  if (!config) {
    console.log("No config provided, using demo data.");
    return Promise.resolve(DEMO_POSTS);
  }

  // Check Cache
  const cachedData = localStorage.getItem(CACHE_KEY);
  const cachedTime = localStorage.getItem(CACHE_TIME_KEY);
  
  if (cachedData && cachedTime) {
    const age = Date.now() - parseInt(cachedTime, 10);
    if (age < CACHE_DURATION) {
      return JSON.parse(cachedData);
    }
  }

  try {
    // 1. Get list of files in path
    const url = `https://api.github.com/repos/${config.owner}/${config.repo}/contents/${config.path}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      if (response.status === 404) throw new Error('Repository or path not found');
      if (response.status === 403) throw new Error('API Rate limit exceeded or access denied');
      throw new Error('Failed to fetch file list');
    }

    const files = await response.json();
    
    // Filter for markdown files
    const mdFiles = files.filter((f: any) => f.name.endsWith('.md'));

    // 2. Fetch content for each file (Parallel)
    // Note: GitHub contents API limits return size, but for text files it usually sends content in base64.
    const filePromises = mdFiles.map(async (file: any) => {
      const fileRes = await fetch(file.url); // Use the blob URL from the tree listing
      const fileData = await fileRes.json();
      const decodedContent = atob(fileData.content.replace(/\n/g, ''));
      return parsePost(file.name, decodedContent);
    });

    const posts = await Promise.all(filePromises);
    
    // Sort by date desc
    posts.sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());

    // Update Cache
    localStorage.setItem(CACHE_KEY, JSON.stringify(posts));
    localStorage.setItem(CACHE_TIME_KEY, Date.now().toString());

    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    // Fallback to demo data on error for UX, or rethrow if strict
    // For this specific app, let's return empty or throw to let UI handle it
    throw error;
  }
};