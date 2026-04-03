"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ComingSoonPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        
        // Initial delay before first show
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 1500);

        // Show repeatedly every 15 seconds
        const interval = setInterval(() => {
            setIsOpen(true);
        }, 15000);

        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        };
    }, []);

    // Auto-hide after 5 seconds of being open
    useEffect(() => {
        let hideTimer: NodeJS.Timeout;
        if (isOpen) {
            hideTimer = setTimeout(() => {
                setIsOpen(false);
            }, 5000);
        }
        return () => clearTimeout(hideTimer);
    }, [isOpen]);

    const handleClose = () => {
        setIsOpen(false);
    };

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-4 pointer-events-none p-4 md:p-0">
                    {/* Popup Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.95 }}
                        transition={{ type: "spring", damping: 25, stiffness: 350 }}
                        className="relative w-full max-w-sm md:w-[380px] overflow-hidden rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-[#1a544e]/10 bg-white pointer-events-auto"
                    >
                        {/* Header/Accent Bar */}
                        <div className="h-1.5 w-full bg-gradient-to-r from-[#1a544e] via-[#257a70] to-[#c19b33] absolute top-0 left-0" />

                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600"
                        >
                            <X size={16} />
                        </button>

                        {/* Content */}
                        <div className="p-5 pt-6">
                            <div className="flex items-start gap-4">
                                {/* Icon */}
                                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#1a544e]/10 to-[#c19b33]/10 flex items-center justify-center border border-[#1a544e]/5">
                                    <Sparkles size={18} className="text-[#c19b33]" />
                                </div>

                                {/* Text Content */}
                                <div className="flex-1 min-w-0 pr-4">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-[#c19b33] mb-1">
                                        Coming Soon
                                    </p>
                                    <h3 className="text-lg font-serif font-bold text-[#1a544e] mb-1 truncate">
                                        Aero Town Residency 2
                                    </h3>
                                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                                        A premium residential project in Dholera Smart City.
                                    </p>

                                    {/* Action Link */}
                                    <Link
                                        href="/contact"
                                        onClick={handleClose}
                                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1a544e] hover:text-[#257a70] transition-colors group"
                                    >
                                        Get Notified
                                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
}
