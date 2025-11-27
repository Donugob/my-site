export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
  coverImage: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-your-business-needs-a-modern-website",
    title: "Why Your Business Needs a Modern Website in 2025",
    excerpt:
      "Instagram is not enough anymore. Nigerian customers now expect fast, functional, trustworthy websites—especially as AI search replaces traditional browsing.",
    publishedAt: "2025-01-06",
    readTime: "6 min read",
    category: "Brand & Web",
    tags: ["Web Development", "Brand Strategy", "SEO", "AI Search"],
    coverImage: "/og-image.jpg",
    author: {
      name: "Ugo.B",
      role: "Web Developer & Digital Strategist",
      avatar: "/ugob.jpg",
    },
    content: [
      "For years, small businesses in Nigeria survived with only Instagram, but that era is ending quickly. Customers now search with AI tools—ChatGPT, Gemini, Grok—and if your business doesn’t have a proper website, these tools cannot recommend you.",
      "A modern website is not just design; it is distribution. It is what allows your name to be understood, indexed, and pushed by AI systems across the internet.",
      "Speed is the next factor. A slow site makes both users and search engines uninterested. This is why I build feather-light Next.js websites with compressed images, optimized routes, and server-side rendered critical content.",
      "Your website also acts as proof of seriousness. When people see proper pages—About, Services, Portfolio, Testimonials—they understand you are a real business, not a temporary hustle.",
      "Finally, blogs amplify your authority. They help you rank locally, feed social content, and signal expertise to AI search models.",
      "If your business plans to be relevant in 2025 and beyond, having a modern, optimized website isn’t a luxury—it is the bare minimum.",
    ],
  },
  {
    slug: "how-to-rank-locally-in-nigeria",
    title: "How to Rank Locally in Nigeria: A Practical SEO Playbook",
    excerpt:
      "Local SEO in Nigeria is still wide open. Most competitors are not doing the basics—meaning simple, consistent optimisation can put you on Page 1 faster than you think.",
    publishedAt: "2025-01-08",
    readTime: "7 min read",
    category: "SEO & Growth",
    tags: ["Local SEO", "Google Ranking", "AI Search", "Content Strategy"],
    coverImage: "/blog-local-seo.webp",
    author: {
      name: "Ugo.B",
      role: "Web Developer & SEO Strategist",
      avatar: "/ugob.jpg",
    },
    content: [
      "Many Nigerian businesses still believe SEO is complicated. In reality, local SEO is mostly about clarity and consistency. When Google understands *exactly* who you are, what you do, and where you operate, ranking becomes significantly easier.",
      "Your homepage alone cannot carry all your keywords. A law firm in Owerri, for example, should have separate pages for Property Law, Corporate Registration, Entertainment Law, and Family Law—as each keyword targets a different audience.",
      "For SMEs, the fastest wins come from optimizing three things: speed, clarity, and structured data. A website that loads in under two seconds already performs better than 80% of competitors.",
      "Next is trust. Nigerians want proof—real photos, testimonials, team info, case studies, and clear service descriptions. These elements reduce bounce rate and increase ranking.",
      "Finally, blog posts are your long-term engine. When you write answers to real questions clients ask you daily, Google and AI models begin to recognize your expertise.",
      "Ranking locally is not magic; it is consistency. Once your signals are clean and your website communicates clearly, you slowly take over Page 1.",
    ],
  },
  {
    slug: "building-betblock-nft-betting",
    title: "Building BetBlock: Why the Future of Betting Will Run on NFTs",
    excerpt:
      "Betting on the blockchain isn't about hype. It solves accountability, transparency, and transaction trust—three problems the industry has struggled with for years.",
    publishedAt: "2025-01-12",
    readTime: "8 min read",
    category: "Web3 & Blockchain",
    tags: ["Blockchain", "Web3", "NFT Architecture", "Product Engineering"],
    coverImage: "/blog-betblock.webp",
    author: {
      name: "Ugo.B",
      role: "Product Engineer — BetBlock",
      avatar: "/ugob.jpg",
    },
    content: [
      "BetBlock started with one question: *What if betting slips could be NFTs?* Not as hype, but as the actual receipt and ledger of the bet itself—immutable, transparent, and user-controlled.",
      "Traditional betting platforms rely on centralized databases. If something goes wrong, users rely entirely on trust. With NFTs, the bet becomes a verifiable asset stored on-chain, meaning the platform cannot alter, delete, or manipulate it.",
      "We built BetBlock so the process feels familiar: users select odds, confirm a slip, and instantly mint an NFT representing that exact bet. The odds, timestamp, amount, and match metadata are encoded on-chain.",
      "This is more than transparency—it opens future possibilities like peer-to-peer trading of slips, decentralized jackpots, and community liquidity pools.",
      "For UI/UX, we aimed for a hybrid of SportyBet’s simplicity and the sleek animations of modern Web3 dashboards. Speed, clarity, and trust shaped every design decision.",
      "The future of betting will prioritize transparency, and NFTs are the perfect infrastructure. BetBlock is simply the first step in that direction.",
    ],
  },
  {
    slug: "why-speed-matters-more-than-design",
    title: "Why Speed Matters More Than Design on the Modern Web",
    excerpt:
      "A beautiful website that loads slowly is already a failed product. Speed is now a ranking factor, a trust factor, and the strongest driver of conversions.",
    publishedAt: "2025-01-15",
    readTime: "5 min read",
    category: "Web Performance",
    tags: ["Performance", "Next.js", "Core Web Vitals", "UX"],
    coverImage: "/blog-speed.webp",
    author: {
      name: "Ugo.B",
      role: "Web Developer & UI/UX Engineer",
      avatar: "/ugob.jpg",
    },
    content: [
      "In Nigeria, most users browse the internet with low-bandwidth networks, so the fastest website usually wins the customer. Even a slight delay can increase bounce rate, reduce trust, and kill conversions.",
      "Google uses speed as a major ranking signal. If your site loads in more than three seconds, you lose both search visibility and user patience. This is why I focus on Next.js streaming, edge rendering, and aggressive image optimization.",
      "Fast websites feel premium. When animations don't lag, transitions don't stutter, and pages open instantly, customers subconsciously trust the brand more.",
      "Speed also reduces operational cost. Lightweight assets mean fewer server calls, which means lower hosting bills and better uptime.",
      "If you want your website to perform like a modern product, speed must be your first priority. Design comes second, never first.",
    ],
  },
  {
    slug: "branding-for-small-businesses-nigeria",
    title: "Branding for Small Businesses in Nigeria: The Simple Blueprint",
    excerpt:
      "Branding is not a logo. It's the feeling people get when they interact with your business—online or offline.",
    publishedAt: "2025-01-17",
    readTime: "6 min read",
    category: "Brand & Strategy",
    tags: ["Brand Identity", "SME Growth", "Digital Strategy"],
    coverImage: "/blog-branding.webp",
    author: {
      name: "Ugo.B",
      role: "Brand & Digital Experience Consultant",
      avatar: "/ugob.jpg",
    },
    content: [
      "Most small businesses in Nigeria underestimate branding because they think it is expensive. But branding is not about fancy logos; it is about clarity, consistency, and experience.",
      "When customers see the same colors, tone, packaging style, and message everywhere, they begin to trust the brand. Consistency is what separates a business from a hustle.",
      "Digital-first branding means your website, Instagram, WhatsApp catalogue, and even your customer service must speak the same language.",
      "A strong brand also simplifies marketing. When people clearly understand what you stand for, every ad becomes more effective.",
      "If you're building a brand in 2025, your online identity should be intentional, clean, and customer-focused. That is the fastest path to loyalty.",
    ],
  },
  {
    slug: "ai-search-and-the-future-of-discovery",
    title: "AI Search and the Future of Business Discovery",
    excerpt:
      "People no longer search the way they used to. AI models now act as gatekeepers, recommending only businesses with clear digital footprints.",
    publishedAt: "2025-01-20",
    readTime: "7 min read",
    category: "AI & Search",
    tags: ["AI Search", "SEO", "Content Strategy", "Brand Visibility"],
    coverImage: "/blog-ai-search.webp",
    author: {
      name: "Ugo.B",
      role: "AI Visibility Strategist",
      avatar: "/ugob.jpg",
    },
    content: [
      "The rise of ChatGPT, Gemini, and Grok has shifted how people find services. Many users now ask AI directly for recommendations, skipping Google entirely.",
      "This means if AI models cannot understand your business clearly, they cannot recommend you. The new SEO is clarity—simple website copy, structured data, location signals, and proper service descriptions.",
      "Blogs play another major role. AI feeds on content to understand who you are and what you solve. If you publish consistently, you increase the likelihood of being surfaced as an expert.",
      "Businesses that adapt early will dominate visibility in the coming years, because AI will reward clarity long before traditional SEO catches up.",
      "The brands that win are the ones that communicate simply, consistently, and with digital depth.",
    ],
  },
  {
    slug: "legal-issues-in-entertainment-nigeria",
    title: "Legal Issues in Nigerian Entertainment: What Artists Should Know",
    excerpt:
      "Entertainment law is no longer optional. Contracts, publishing rights, image use, and brand partnerships can make or break a career.",
    publishedAt: "2025-01-23",
    readTime: "8 min read",
    category: "Law & Entertainment",
    tags: ["Entertainment Law", "Intellectual Property", "Contracts"],
    coverImage: "/blog-entertainment-law.webp",
    author: {
      name: "Ugo.B",
      role: "Law & Entertainment Commentator",
      avatar: "/ugob.jpg",
    },
    content: [
      "The Nigerian entertainment industry is booming, but the legal awareness of most artists is still low. Many sign exploitative contracts because they don't understand their rights.",
      "A proper artist agreement should clarify ownership of masters, publishing splits, image rights, royalties, and exit terms. Without this, an artist may blow today and lose everything tomorrow.",
      "Another major area is brand partnership contracts. Many influencers agree to long-term obligations without reading the fine print that restricts their future collaborations.",
      "Artists should also trademark their stage names and logos. A small step that prevents future legal battles.",
      "Entertainment might look like fun, but the business behind it requires the same seriousness as any traditional industry.",
    ],
  },
  {
    slug: "building-a-consignment-platform",
    title: "Building a Consignment Platform: Lessons From Val’s Logistics",
    excerpt:
      "A consignment platform is more than tracking numbers. It requires clarity, trust, predictable UI flows, and infrastructure that scales as the business grows.",
    publishedAt: "2025-01-28",
    readTime: "7 min read",
    category: "Product Engineering",
    tags: ["Web Development", "Product Design", "Logistics Technology"],
    coverImage: "/blog-consignment.webp",
    author: {
      name: "Ugo.B",
      role: "Lead Developer — Val's Logistics Platform",
      avatar: "/ugob.jpg",
    },
    content: [
      "When building Val’s Logistics' consignment platform, the goal was simple: make tracking feel effortless. Many Nigerian logistics sites are confusing, slow, or inconsistent.",
      "A proper tracking system must be clean—single search bar, instant results, and status updates that make sense to non-technical users.",
      "The challenge was building a backend flow that handles package history, location updates, timestamps, user authentication, and admin controls without overwhelming the interface.",
      "We also added a clear UI hierarchy so users instantly know package state: Received, In Transit, Arrived Hub, Out for Delivery, Delivered.",
      "Good logistics platforms build trust. When customers can see their package journey clearly, they worry less and order more.",
    ],
  },
];

export const getBlogPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);
