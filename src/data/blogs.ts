export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string; // Markdown or HTML representation
    date: string;
    author: string;
    coverImage?: string;
    tags: string[];
    seoTitle?: string;
    seoDescription?: string;
}

export const blogs: BlogPost[] = [
    {
        id: "1",
        title: "Why Dholera Smart City is the Best Investment in India Today",
        slug: "dholera-smart-city-investment",
        excerpt: "Discover the unparalleled infrastructure, government backing, and immense growth potential that makes Dholera the prime destination for real estate investment.",
        content: `
      <h2>The Greenfield Smart City Vision</h2>
      <p>Dholera Special Investment Region (SIR) is slated to be India's largest greenfield smart city, boasting world-class infrastructure and massive government initiatives. With the strategic Delhi-Mumbai Industrial Corridor passing through it, the connectivity and logistical advantages are unmatched.</p>
      
      <h2>Infrastructure That Stands Apart</h2>
      <p>From a dedicated international airport to expressways and metro rail connectivity, Dholera is being built from the ground up to support massive industrial and residential populations. Power, water, and gas networks are fully underground and managed by smart grids.</p>

      <h2>Return on Investment</h2>
      <p>Early investors have already seen significant appreciation. With ongoing development and the entry of major multinational corporations, the land value guarantees high returns for those who enter the market now.</p>
    `,
        date: "2024-03-15",
        author: "DIDPL Research Team",
        coverImage: "/about_us_hero.png",
        tags: ["Investment", "Smart City", "Dholera SIR", "Real Estate"],
        seoTitle: "Best Real Estate Investment in India: Dholera Smart City",
        seoDescription: "Explore why investing in Dholera Smart City offers the highest returns. Unmatched infrastructure and government backing make it a prime real estate choice.",
    },
    {
        id: "2",
        title: "Understanding the Phases of Dholera's Development",
        slug: "phases-of-dholera-development",
        excerpt: "A comprehensive guide to the activation area, Town Planning schemes, and the timeline for Dholera's multi-phased mega-development project.",
        content: `
      <h2>Phase 1: The Activation Area</h2>
      <p>Spanning 22.5 square kilometers, the Activation Area is the core of Phase 1, prioritizing essential infrastructure like roads, water treatment plants, and the administrative building (ABCD building). This phase is nearly operational.</p>
      
      <h2>Town Planning Schemes Explained</h2>
      <p>Dholera's development is structured through carefully drafted Town Planning (TP) schemes. TP1 to TP6 cover residential, industrial, and commercial zones, ensuring organized growth without the clutter seen in older cities.</p>

      <h2>Future Phases</h2>
      <p>Subsequent phases will expand the city's footprint, adding more specialized zones including logistics parks, solar parks, and recreational areas. The long-term vision spans several decades of sustained growth.</p>
    `,
        date: "2024-04-02",
        author: "DIDPL Urban Planning Team",
        coverImage: "/didpl-team-office.png",
        tags: ["Development", "Infrastructure", "Town Planning"],
        seoTitle: "Dholera Development Timeline & Town Planning Phases",
        seoDescription: "Learn about Dholera SIR's development phases, the Activation Area, and Town Planning schemes structuring India's largest smart city.",
    }
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
    return blogs.find((blog) => blog.slug === slug);
}
