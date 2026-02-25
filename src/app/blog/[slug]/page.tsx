import { Container } from "@/components/ui/Container";
import { getBlogBySlug, blogs } from "@/data/blogs";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Calendar, User, Tag } from "lucide-react";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const slug = (await params).slug;
    const blog = getBlogBySlug(slug);

    if (!blog) {
        return {
            title: 'Blog Not Found',
        };
    }

    return {
        title: `${blog.seoTitle || blog.title} | Dholera Infra Development`,
        description: blog.seoDescription || blog.excerpt,
        openGraph: {
            title: blog.title,
            description: blog.excerpt,
            images: blog.coverImage ? [blog.coverImage] : [],
        },
    };
}

export function generateStaticParams() {
    return blogs.map((blog) => ({
        slug: blog.slug,
    }));
}

export default async function BlogPostPage({ params }: Props) {
    const slug = (await params).slug;
    const blog = getBlogBySlug(slug);

    if (!blog) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#FAFAFA] font-sans pt-32 pb-24">
            <Container className="max-w-4xl">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-[#1a544e] hover:text-[#D4AF37] transition-colors mb-8 font-medium bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100"
                >
                    <ChevronLeft size={18} />
                    Back to Insights
                </Link>

                <article className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100 relative">
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#1a544e]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                    {blog.coverImage && (
                        <div className="relative w-full h-[45vh] min-h-[350px] max-h-[500px]">
                            <Image
                                src={blog.coverImage}
                                alt={blog.title}
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                    )}

                    <div className="relative p-8 md:p-12 lg:p-16 z-10 -mt-20 bg-white mx-4 rounded-t-3xl sm:mx-8 sm:p-14 lg:mx-12 lg:rounded-3xl lg:shadow-xl lg:-mt-24">
                        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8 border-b border-gray-100 pb-8">
                            <div className="flex items-center gap-2">
                                <Calendar size={18} className="text-[#D4AF37]" />
                                <span className="font-medium">{new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <User size={18} className="text-[#D4AF37]" />
                                <span className="font-medium">{blog.author}</span>
                            </div>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#1a544e] mb-8 leading-tight">
                            {blog.title}
                        </h1>

                        <div className="flex gap-2 mb-10 flex-wrap">
                            {blog.tags.map(tag => (
                                <span key={tag} className="flex items-center gap-1.5 bg-[#1a544e]/5 text-[#1a544e] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-[#1a544e]/10">
                                    <Tag size={12} />
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div
                            className="prose prose-lg prose-[#1a544e] max-w-none 
                                prose-headings:font-serif prose-headings:text-[#1a544e] prose-headings:mb-6 prose-headings:mt-10
                                prose-h2:text-3xl prose-h3:text-2xl
                                prose-p:text-gray-600 prose-p:leading-loose prose-p:font-light prose-p:mb-6
                                prose-a:text-[#D4AF37] hover:prose-a:text-[#1a544e] prose-a:font-medium
                                prose-strong:text-[#1a544e] prose-strong:font-semibold
                                prose-ul:list-disc prose-ul:pl-6 prose-li:text-gray-600 prose-li:font-light prose-li:mb-2
                                prose-blockquote:border-l-4 prose-blockquote:border-[#D4AF37] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-500 prose-blockquote:bg-[#FAFAFA] prose-blockquote:py-2 prose-blockquote:pr-4 prose-blockquote:rounded-r-lg"
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        />
                    </div>
                </article>
            </Container>
        </main>
    );
}
