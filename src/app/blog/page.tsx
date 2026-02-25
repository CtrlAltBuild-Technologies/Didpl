import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/data/blogs";
import { Calendar } from "lucide-react";

export const metadata: Metadata = {
    title: "Blog & Insights | Dholera Infra Development",
    description: "Read the latest news, insights, and updates about Dholera Smart City investment and real estate.",
};

export default function BlogListingPage() {
    return (
        <main className="min-h-screen bg-[#FAFAFA] font-sans pt-24">
            <Container>
                <div className="py-16 md:py-24 text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#1a544e] mb-6">
                        Insights & <span className="text-[#D4AF37]">Updates</span>
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Stay informed with the latest news, expert analysis, and updates about Dholera Smart City and real estate investments.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24">
                    {blogs.map((blog) => (
                        <article key={blog.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col group">
                            {blog.coverImage && (
                                <Link href={`/blog/${blog.slug}`} className="block relative h-60 w-full overflow-hidden shrink-0">
                                    <Image
                                        src={blog.coverImage}
                                        alt={blog.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </Link>
                            )}
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 shrink-0">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar size={16} className="text-[#1a544e]" />
                                        <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                    </div>
                                </div>
                                <h2 className="text-2xl font-serif font-bold text-[#1a544e] mb-4 line-clamp-2 hover:text-[#D4AF37] transition-colors shrink-0">
                                    <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                                </h2>
                                <p className="text-gray-600 mb-6 line-clamp-3 flex-grow font-light">
                                    {blog.excerpt}
                                </p>
                                <div className="mt-auto pt-4 shrink-0">
                                    <Link href={`/blog/${blog.slug}`}>
                                        <Button className="w-full bg-[#1a544e] text-white hover:bg-[#D4AF37] hover:text-[#1a544e] transition-all duration-300">
                                            Read Full Article
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </Container>
        </main>
    );
}
