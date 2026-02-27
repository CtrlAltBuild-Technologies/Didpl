"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Phone, Mail, ChevronDown, Send, Clock, Globe } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="pt-32 pb-12 bg-[#1a544e] text-white text-center px-4">
                <Container>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 tracking-tight">Get in Touch</h1>
                    <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto italic">"Start your journey towards a secure future today."</p>
                </Container>
            </div>
            <ContactDetailsSection />
            <MapSection />
        </main>
    );
}

function ContactDetailsSection() {
    return (
        <section className="py-24 relative bg-white">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Left: Info Grid */}
                    <div className="lg:col-span-5 space-y-8">
                        <div>
                            <h2 className="text-4xl font-serif font-bold text-[#1a544e] mb-6 tracking-tight">Contact Information</h2>
                            <p className="text-gray-600 font-light text-lg mb-10">
                                Reach out to us through any of these channels or visit our corporate office.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            <InfoCard
                                icon={MapPin}
                                title="Corporate Office"
                                content="Dholera Infra Development Pvt. Ltd. 309, 3rd Floor, Siddharth Annexe 2, Above Mirch Masala Restaurant, Sama-Savali Road, Vadodara – 391740, Gujarat (IN)"
                            />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <InfoCard
                                    icon={Phone}
                                    title="Call Us"
                                    content="+91 8866 909 600"
                                />
                                <InfoCard
                                    icon={Mail}
                                    title="Email Us"
                                    content="info@didpl.com"
                                />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <InfoCard
                                    icon={Clock}
                                    title="Working Hours"
                                    content="9:00 AM - 7:00 PM"
                                />
                                <InfoCard
                                    icon={Globe}
                                    title="Website"
                                    content="www.didpl.com"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right: Modern Form */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 md:p-14 rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 relative"
                        >
                            <h3 className="text-3xl font-serif font-bold text-[#1a544e] mb-8">Send a Message</h3>

                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            className="w-full bg-[#FAFAFA] border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#D4AF37]/30 transition-all outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="you@example.com"
                                            className="w-full bg-[#FAFAFA] border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#D4AF37]/30 transition-all outline-none"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            placeholder="+91"
                                            className="w-full bg-[#FAFAFA] border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#D4AF37]/30 transition-all outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Interest</label>
                                        <select className="w-full bg-[#FAFAFA] border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#D4AF37]/30 transition-all outline-none text-gray-500 appearance-none">
                                            <option>Residential Plot</option>
                                            <option>Commercial Zone</option>
                                            <option>Industrial Opportunity</option>
                                            <option>General Inquiry</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Your Message</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Tell us how we can help..."
                                        className="w-full bg-[#FAFAFA] border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#D4AF37]/30 transition-all outline-none resize-none"
                                    ></textarea>
                                </div>

                                <Button className="w-full bg-[#1a544e] text-white rounded-2xl py-6 hover:bg-[#D4AF37] transition-all flex items-center justify-center gap-3 group shadow-lg overflow-hidden relative">
                                    <span className="relative z-10 flex items-center gap-2 text-lg font-bold">
                                        Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                </Button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

function InfoCard({ icon: Icon, title, content }: { icon: any, title: string, content: string }) {
    return (
        <div className="bg-brand-cyan p-8 rounded-[2.5rem] border border-[#d9f7ff]/50 hover:shadow-xl transition-all duration-300 group">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Icon className="text-[#1a544e]" size={24} />
            </div>
            <h4 className="text-xs font-bold text-[#1a544e] uppercase tracking-[0.2em] mb-2">{title}</h4>
            <p className="text-[#1a544e]/80 text-lg font-light leading-relaxed">{content}</p>
        </div>
    );
}

function MapSection() {
    return (
        <section className="h-[500px] w-full relative bg-[#FAFAFA] grayscale-[30%] hover:grayscale-0 transition-all duration-1000">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9213876611467!2d72.4815!3d23.0257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b0bff79af77%3A0xaf8e8eb8a6a66344!2sDholeraPro-Dholera%20Smart%20City%20Plot!5e0!3m2!1sen!2sin!4v1770581195722!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[30%] hover:grayscale-0 transition-all duration-500"
            />
        </section>
    );
}
