"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Dholera SIR", href: "/dholera-sir" },

    {
        name: "Our Projects",
        href: "/projects",
        submenu: [
            { name: "Dholera Homes 3", href: "/projects/dholera-homes-3" },
            { name: "AERO Town Residency", href: "/projects/aero-town" },
        ]
    },
    { name: "Our Team", href: "/team" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState("");
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
        setMobileSubmenuOpen("");
    }, [pathname]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm ${scrolled
                ? "py-3"
                : "py-5"
                }`}
        >
            <Container>
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="relative w-40 h-16 md:w-48 md:h-16 lg:w-56 lg:h-20">
                            <Image
                                src="/Dholera_logo.svg"
                                alt="DIDPL Group"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navigation.map((item) => (
                            <div key={item.name} className="relative group">
                                {item.submenu ? (
                                    <>
                                        <button
                                            className={`flex items-center gap-1 text-base font-medium transition-colors hover:text-accent py-2 ${pathname.startsWith(item.href)
                                                ? "text-accent font-semibold"
                                                : "text-gray-700"
                                                }`}
                                        >
                                            {item.name}
                                            <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                                        </button>

                                        {/* Dropdown Menu */}
                                        <div className="absolute top-full left-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                            <div className="bg-white rounded-lg shadow-xl border border-gray-100 p-2">
                                                {item.submenu.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className={`block px-4 py-3 rounded-md text-sm transition-colors hover:bg-gray-50 ${pathname === subItem.href
                                                            ? "text-accent font-medium bg-gray-50"
                                                            : "text-gray-600 hover:text-accent"
                                                            }`}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={`text-base font-medium transition-colors hover:text-accent ${pathname === item.href
                                            ? "text-accent font-semibold"
                                            : "text-gray-700"
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <Button size="sm" className="ml-4">
                            Book Site Visit
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-gray-700"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>
            </Container>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border-b shadow-lg lg:hidden animate-in slide-in-from-top-2 h-[calc(100vh-80px)] overflow-y-auto">
                    <Container className="py-6 flex flex-col gap-2">
                        {navigation.map((item) => (
                            <div key={item.name} className="border-b border-gray-100 last:border-0">
                                {item.submenu ? (
                                    <div>
                                        <button
                                            onClick={() => setMobileSubmenuOpen(mobileSubmenuOpen === item.name ? "" : item.name)}
                                            className={`flex items-center justify-between w-full text-lg font-medium py-3 ${pathname.startsWith(item.href) ? "text-accent" : "text-gray-800"}`}
                                        >
                                            {item.name}
                                            <ChevronRight
                                                size={18}
                                                className={`transition-transform duration-300 ${mobileSubmenuOpen === item.name ? "rotate-90" : ""}`}
                                            />
                                        </button>
                                        <div className={`overflow-hidden transition-all duration-300 ${mobileSubmenuOpen === item.name ? "max-h-64 opacity-100 mb-3" : "max-h-0 opacity-0"}`}>
                                            <div className="pl-4 flex flex-col gap-2 border-l-2 border-gray-100 ml-2">
                                                {item.submenu.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className={`text-base py-2 ${pathname === subItem.href ? "text-accent font-medium" : "text-gray-600"}`}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={`block text-lg font-medium py-3 ${pathname === item.href ? "text-accent" : "text-gray-800"
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <div className="pt-4">
                            <Button className="w-full">Book Free Site Visit</Button>
                            <a href="tel:+918866909600" className="flex items-center justify-center gap-2 text-gray-600 font-medium py-4">
                                <Phone size={18} /> +91 8866 909 600
                            </a>
                        </div>
                    </Container>
                </div>
            )}
        </header>
    );
}
