"use client";

import { Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function StickyContact() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="fixed bottom-8 right-8 z-50 flex flex-col gap-4 items-end"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.a
                href="https://wa.me/918866909600"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                className="group flex items-center bg-[#25D366] text-white p-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(37,211,102,0.4)] transition-all duration-300 relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
                <MessageCircle size={28} fill="white" className="relative z-10" />
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 ease-out font-bold whitespace-nowrap relative z-10">
                    Chat on WhatsApp
                </span>
            </motion.a>

            <motion.a
                href="tel:+918866909600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group flex items-center bg-[#1a544e] text-white p-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(26,46,30,0.5)] border border-[#D4AF37]/50 transition-all duration-300 relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
                <Phone size={28} className="relative z-10 group-hover:fill-[#1a544e] group-hover:text-[#1a544e] transition-colors duration-300" />
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 ease-out font-bold whitespace-nowrap relative z-10 group-hover:text-[#1a544e]">
                    Call Now
                </span>
            </motion.a>
        </div>
    );
}
