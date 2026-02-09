import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail, ChevronRight } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#e2f0e9] text-primary pt-16 pb-8">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* About Column */}
                    <div className="space-y-4">
                        <Link href="/" className="block mb-6 relative w-48 h-16">
                            <Image
                                src="/Dholera_logo.svg"
                                alt="DIDPL Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </Link>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Dholera Infra Development Pvt. Ltd. is your trusted partner for premium land investments in Dholera SIR. Building dreams with transparency and trust.
                        </p>
                        <div className="flex gap-4 pt-2">
                            {[Instagram, Facebook, Linkedin, Twitter].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all text-primary"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-accent"></span> Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { name: "About Us", href: "/about-us" },
                                { name: "Our Projects", href: "/projects" },
                                { name: "Our Team", href: "/team" },
                                { name: "Legal Documents", href: "/legal" },
                                { name: "Contact Us", href: "/contact" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-600 hover:text-accent transition-colors flex items-center gap-2 group"
                                    >
                                        <ChevronRight size={14} className="text-accent group-hover:translate-x-1 transition-transform" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Our Projects */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-accent"></span> Projects
                        </h4>
                        <ul className="space-y-3">
                            {[
                                "Dholera Homes",
                                "Aero Town Residency",
                                "Inside SIR Project",
                                "Residential Plots",
                                "Commercial Zone",
                            ].map((item) => (
                                <li key={item}>
                                    <Link
                                        href="/projects"
                                        className="text-gray-600 hover:text-accent transition-colors flex items-center gap-2 group"
                                    >
                                        <ChevronRight size={14} className="text-accent group-hover:translate-x-1 transition-transform" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-accent"></span> Contact Us
                        </h4>
                        <ul className="space-y-4 text-gray-600">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-accent mt-1 shrink-0" size={18} />
                                <span className="text-sm">
                                    123, Infra House, Near City Center, Dholera, Gujarat, India - 382455
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-accent shrink-0" size={18} />
                                <a href="tel:+918866909600" className="text-sm hover:text-primary transition-colors">
                                    +91 8866 909 600
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-accent shrink-0" size={18} />
                                <a href="mailto:info@didpl.com" className="text-sm hover:text-primary transition-colors">
                                    info@didpl.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© {currentYear} Dholera Infra Development Pvt Ltd. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">Terms of Use</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
