"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Clock, Globe } from "lucide-react";

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
                                    content="10:00 AM to 6:00 PM"
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
                        <ContactForm />
                    </div>
                </div>
            </Container>
        </section>
    );
}

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        interest: "Residential Plot",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const whatsappMessage = [
            `New Inquiry from DIDPL Website`,
            ``,
            `Name: ${formData.name}`,
            `Email: ${formData.email}`,
            `Phone: ${formData.phone}`,
            `Interest: ${formData.interest}`,
            `Message: ${formData.message}`,
        ].join("\n");

        const encodedMessage = encodeURIComponent(whatsappMessage);
        window.open(`https://wa.me/918866909600?text=${encodedMessage}`, "_blank");
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-14 rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 relative"
        >
            <h3 className="text-3xl font-serif font-bold text-[#1a544e] mb-8">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Full Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-[#FAFAFA] border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#D4AF37]/30 transition-all outline-none"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Email Address</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-[#FAFAFA] border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#D4AF37]/30 transition-all outline-none"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Interest</label>
                        <select
                            value={formData.interest}
                            onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                            className="w-full bg-[#FAFAFA] border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#D4AF37]/30 transition-all outline-none text-gray-500 appearance-none"
                        >
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
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-[#FAFAFA] border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#D4AF37]/30 transition-all outline-none resize-none"
                    ></textarea>
                </div>

                <Button type="submit" className="w-full bg-[#1a544e] text-white rounded-2xl py-6 hover:bg-[#D4AF37] transition-all flex items-center justify-center gap-3 group shadow-lg overflow-hidden relative">
                    <span className="relative z-10 flex items-center gap-2 text-lg font-bold">
                        Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Button>
            </form>
        </motion.div>
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
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Dholera%20Infra%20Development%20Pvt.%20Ltd.%20309,%203rd%20Floor,%20Siddharth%20Annexe%202,%20Above%20Mirch%20Masala%20Restaurant,%20Sama-Savali%20Road,%20Vadodara%20%E2%80%93%20391740,%20Gujarat+(DIDPL)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
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
