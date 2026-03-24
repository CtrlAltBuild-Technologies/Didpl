"use client";

import { useRef, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import {
    ShieldCheck,
    Users,
    Target,
    Lightbulb,
    TrendingUp,
    Award,
    CheckCircle2,
    MapPin
} from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#FAFAFA] font-sans overflow-x-hidden">
            <HeroSection />
            <WhoWeAreSection />
            <StatsSection />
            <VisionMissionSection />
        </main>
    );
}

function HeroSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={ref} className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#1a544e] pt-24 lg:pt-32">
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 z-10" />
                <Image
                    src="/about_us_hero.png"
                    alt="Dholera Smart City"
                    fill
                    className="object-cover"
                    priority
                />
            </motion.div>

            <Container className="relative z-20 text-center text-white w-full flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-4xl mx-auto flex flex-col items-center"
                >
                    <div className="flex items-center gap-4 mb-6 justify-center">
                        <span className="h-[2px] w-20 bg-[#D4AF37]" />
                        <h5 className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-sm">
                            Est. 2010
                        </h5>
                        <span className="h-[2px] w-20 bg-[#D4AF37]" />
                    </div>

                    <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 tracking-tight leading-[1.1]">
                        Pioneering <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Values & Trust</span>
                    </h1>

                    <p className="max-w-2xl text-xl text-gray-300 leading-relaxed font-light mb-10 mx-auto">
                        At DIDPL, we don't just develop land; we curate the foundation for your wealth, growth, and legacy in India's first smart city.
                    </p>
                </motion.div>
            </Container>
        </section>
    );
}

function WhoWeAreSection() {
    const values = [
        {
            title: "D – Dedicated",
            desc: "Committed to delivering value and trust in every square yard.",
            icon: ShieldCheck
        },
        {
            title: "I – Innovative",
            desc: "Creating futuristic infrastructure with smart and sustainable solutions.",
            icon: Lightbulb
        },
        {
            title: "D – Dynamic",
            desc: "Adapting with time and technology to meet evolving customer needs.",
            icon: TrendingUp
        },
        {
            title: "P – Professional",
            desc: "Ensuring transparency, legal compliance, and excellence in service.",
            icon: Users
        },
        {
            title: "L – Legacy",
            desc: "Over 15 years of experience with 3000+ satisfied customers across India.",
            icon: Award
        }
    ];

    return (
        <section className="py-24 bg-white relative">
            <Container>
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Image Composition */}
                    <div className="w-full lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10"
                        >
                            <div className="aspect-[4/5] relative rounded-[2rem] overflow-hidden shadow-2xl">
                                <Image
                                    src="/didpl-team-office.png"
                                    alt="DIDPL Team Meeting"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#1a544e]/40 to-transparent" />
                            </div>

                            {/* Floating Stats Card */}
                            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] max-w-xs animate-float">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-full flex items-center justify-center">
                                        <Award className="text-[#D4AF37]" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[#1a544e] font-serif font-bold text-xl">Excellence</p>
                                        <p className="text-gray-400 text-xs uppercase tracking-wider">Since 15+ years</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    15+ years of Experience of our directors.
                                </p>
                            </div>
                        </motion.div>

                        {/* Subtle background blur */}
                        <div className="absolute -top-10 -left-10 w-full h-full bg-[#1a544e]/5 rounded-[2.5rem] -z-10" />
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h4 className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase mb-6 text-sm flex items-center gap-3">
                                <span className="w-10 h-[1px] bg-[#D4AF37]" />
                                Who We Are
                            </h4>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1a544e] mb-8 leading-[1.1]">
                                Crafting the Skyline of <span className="text-[#D4AF37] italic">Tomorrow</span>.
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-4 font-light">
                                Dholera Infra Development Pvt. Ltd. (DIDPL) is an emerging yet fast rising name in India’s real estate landscape, driven by a powerful vision to shape the future of urban development in Dholera SIR : India’s first Greenfield Smart City. Though the company itself is young, founded just a year ago in Vadodara, it is led by a highly seasoned team with over <strong className="text-[#1a544e] font-medium">15 years of proven experience</strong> in land development, urban planning, and transparent real estate practices. This strong foundation of expertise has already earned the trust of <strong className="text-[#1a544e] font-medium">3,000+ satisfied clients</strong> across India through earlier ventures and professional engagements.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-4 font-light">
                                At DIDPL, we are committed to delivering legally compliant, transparent, and future-ready land development solutions for visionary investors. Every project is supported by clear legal documentation, government-aligned processes, and high-potential strategic locations designed to ensure long-term value appreciation and maximum investor confidence.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-10 font-light">
                                Our philosophy is built on trust, innovation, and customer first service. Whether it’s residential, commercial, or industrial land in Dholera SIR, DIDPL offers a secure, professional, and growth oriented investment journey. Crafted for those who wish to be part of India’s next big smart city success story. <strong className="text-[#1a544e] font-medium">DIDPL is not just developing land! We are helping build futures, one smart investment at a time.</strong>
                            </p>

                            <Link href="/contact">
                                <Button className="bg-[#1a544e] text-white px-10 py-5 text-lg rounded-full hover:bg-[#D4AF37] hover:text-[#1a544e] transition-all duration-300 shadow-lg hover:shadow-xl">
                                    Partner With Us
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>


                <div className="mt-24">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h4 className="text-[#D4AF37] font-bold tracking-widest uppercase mb-3 text-sm">Our Core Values</h4>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1a544e]">
                            Why Choose <span className="text-[#D4AF37]">DIDPL</span>?
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                        {values.map((value, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100/50 hover:border-[#D4AF37] transition-all duration-300 group hover:-translate-y-2 flex flex-col items-center text-center relative overflow-hidden h-full"
                            >


                                <div className="w-16 h-16 bg-[#1a544e]/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1a544e] transition-colors duration-300 relative z-10 shrink-0">
                                    <value.icon className="w-8 h-8 text-[#1a544e] group-hover:text-[#D4AF37] transition-colors duration-300" strokeWidth={1.5} />
                                </div>

                                <h3 className="text-lg font-bold text-[#1a544e] mb-3 font-serif relative z-10 flex items-center justify-center">
                                    <span className="text-4xl text-[#D4AF37] mr-1 font-serif leading-none">{value.title.charAt(0)}</span>
                                    <span className="mt-1">{value.title.substring(1)}</span>
                                </h3>

                                <p className="text-gray-600 leading-relaxed text-sm relative z-10">
                                    {value.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section >
    );
}

function StatsSection() {
    const stats = [
        { label: "Happy Clients", value: 3000, suffix: "+", icon: Users },
        { label: "Projects Completed", value: 15, suffix: "+", icon: Target },
        { label: "Acres Developed", value: 500, suffix: "+", icon: TrendingUp },
        { label: "Years Experience", value: 15, suffix: "+", icon: Award },
        { label: "Site Visits", value: 10, suffix: "K+", icon: MapPin },
    ];

    return (
        <section className="bg-[#1a544e] py-24 text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <Container className="relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 divide-x divide-white/10">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center group px-4"
                        >
                            <h3 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-[#D4AF37]">
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </h3>
                            <p className="text-gray-200 font-medium tracking-widest uppercase text-xs md:text-sm">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const spring = useSpring(0, { duration: 2500, bounce: 0 });

    useEffect(() => {
        if (inView) {
            spring.set(value);
        }
    }, [inView, value, spring]);

    const display = useTransform(spring, (current) => Math.round(current) + suffix);

    return <motion.span ref={ref}>{display}</motion.span>;
}

function VisionMissionSection() {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FAFAFA] -skew-x-12 z-0" />

            <Container className="relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white p-10 md:p-14 rounded-[2rem] shadow-xl border border-gray-100 hover:border-[#1a544e]/30 transition-colors duration-300 group"
                    >
                        <div className="w-16 h-16 bg-[#1a544e]/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#1a544e] transition-colors duration-300">
                            <Lightbulb className="w-8 h-8 text-[#1a544e] group-hover:text-white transition-colors duration-300" />
                        </div>
                        <h3 className="text-3xl font-serif font-bold text-[#1a544e] mb-6">Our Vision</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            To be the most trusted and preferred partner in the real estate development of Dholera Smart City, setting benchmarks for quality, transparency, and customer satisfaction while contributing to the nation's growth.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-[#1a544e] p-10 md:p-14 rounded-[2rem] shadow-xl text-white relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm">
                            <Target className="w-8 h-8 text-[#D4AF37]" />
                        </div>
                        <h3 className="text-3xl font-serif font-bold text-white mb-6">Our Mission</h3>
                        <p className="text-white/80 leading-relaxed text-lg">
                            To provide high-potential investment opportunities that are legally secure and strategically located. We aim to empower our clients with knowledge and support, ensuring their investments yield the best possible returns in the future.
                        </p>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}



function CTASection() {
    return (
        <section className="py-24 relative overflow-hidden">
            <Container className="relative z-10">
                <div className="bg-[#1a544e] border border-[#1a544e]/20 p-12 md:p-16 rounded-[2rem] text-center md:text-left shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                    <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight text-white">
                                Ready to Invest in Your Future?
                            </h2>
                            <p className="text-gray-200 text-lg mb-0 font-light">
                                Join hundreds of satisfied investors who have trusted DIDPL for their journey into Dholera Smart City.
                            </p>
                        </div>
                        <div className="shrink-0">
                            <Link href="/contact">
                                <Button className="bg-[#D4AF37] text-[#1a544e] px-10 py-5 text-lg font-bold rounded-full hover:bg-white hover:text-[#1a544e] transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)]">
                                    Contact Us Today
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
