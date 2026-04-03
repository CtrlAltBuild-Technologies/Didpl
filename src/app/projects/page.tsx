import { Container } from "@/components/ui/Container";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-[#FFF8E7]/30 pt-20">
            <section className="py-20 md:py-32 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-7xl font-bold text-[#1a544e] font-serif tracking-tight mb-8">
                            Our Projects
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed font-serif italic">
                            "Curated investment opportunities in the heart of Dholera SIR."
                        </p>
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
                            <div className="w-2 h-2 rotate-45 bg-[#D4AF37]"></div>
                            <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {projects.map((project, index) => (
                            <Link
                                key={project.id}
                                href={`/projects/${project.id}`}
                                className={`relative p-2 bg-white shadow-xl group border-t-4 border-[#D4AF37] cursor-pointer hover:shadow-2xl transition-shadow duration-300 block ${index % 2 === 0 ? 'md:mt-0' : 'md:mt-16'}`}
                            >
                                {/* Image Frame */}
                                <div className="relative aspect-[4/3] border-4 border-double border-[#D4AF37]/30 overflow-hidden bg-white flex items-center justify-center p-8">
                                    <div className="relative w-[80%] h-[80%] transition-transform duration-1000 group-hover:scale-110">
                                        <Image
                                            src={project.logo || project.image}
                                            alt={project.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className="pt-8 px-4 pb-4 text-center">
                                    <h3 className="text-3xl font-serif font-bold text-[#1a544e] mb-2">{project.title}</h3>
                                    <p className="text-[#D4AF37] font-medium tracking-widest text-sm uppercase mb-4">{project.location}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </Container>
            </section>
        </main>
    );
}
