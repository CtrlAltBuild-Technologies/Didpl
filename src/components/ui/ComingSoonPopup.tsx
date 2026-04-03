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
        // Show popup after a short delay for better UX
        const timer = setTimeout(() => {
            const dismissed = sessionStorage.getItem("aerotown2-popup-dismissed");
            if (!dismissed) {
                setIsOpen(true);
            }
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        sessionStorage.setItem("aerotown2-popup-dismissed", "true");
    };

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={handleClose}
                    />

                    {/* Popup Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.85, y: 40 }}
                        transition={{ type: "spring", damping: 20, stiffness: 300 }}
                        className="relative w-full max-w-md overflow-hidden rounded-3xl shadow-2xl"
                    >
                        {/* Gradient Background */}
                        <div className="relative bg-gradient-to-br from-[#1a544e] via-[#257a70] to-[#113835]">
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-[#c19b33]/20 rounded-full blur-3xl -translate-y-10 translate-x-10" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#c19b33]/15 rounded-full blur-2xl translate-y-8 -translate-x-8" />
                            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

                            {/* Close Button */}
                            <button
                                onClick={handleClose}
                                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 text-white/80 hover:text-white hover:rotate-90"
                            >
                                <X size={18} />
                            </button>

                            {/* Content */}
                            <div className="relative z-[1] px-8 pt-10 pb-8 text-center">
                                {/* Badge */}
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c19b33]/20 border border-[#c19b33]/40 mb-6"
                                >
                                    <Sparkles size={14} className="text-[#e0b84c]" />
                                    <span className="text-xs font-semibold uppercase tracking-widest text-[#e0b84c]">
                                        New Project
                                    </span>
                                </motion.div>

                                {/* Coming Soon Label */}
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-sm uppercase tracking-[0.3em] text-white/60 font-medium mb-3"
                                >
                                    Coming Soon
                                </motion.p>

                                {/* Project Name */}
                                <motion.h2
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-3xl md:text-4xl font-bold font-serif text-white mb-2"
                                >
                                    Aero Town
                                </motion.h2>
                                <motion.h2
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="text-3xl md:text-4xl font-bold font-serif mb-4"
                                >
                                    <span className="bg-gradient-to-r from-[#e0b84c] via-[#c19b33] to-[#e0b84c] bg-clip-text text-transparent">
                                        Residency 2
                                    </span>
                                </motion.h2>

                                {/* Divider */}
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.6, duration: 0.5 }}
                                    className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#c19b33] to-transparent mx-auto mb-5"
                                />

                                {/* Description */}
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.7 }}
                                    className="text-white/70 text-sm leading-relaxed mb-8 max-w-xs mx-auto"
                                >
                                    A premium residential project in Dholera Smart City.
                                    Stay tuned for exclusive launch offers!
                                </motion.p>

                                {/* CTA Buttons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                    className="flex flex-col sm:flex-row gap-3 justify-center"
                                >
                                    <Link
                                        href="/contact"
                                        onClick={handleClose}
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#c19b33] to-[#e0b84c] text-[#1a544e] font-semibold text-sm hover:shadow-lg hover:shadow-[#c19b33]/30 transition-all duration-300 hover:-translate-y-0.5"
                                    >
                                        Get Notified
                                        <ArrowRight size={16} />
                                    </Link>
                                    <button
                                        onClick={handleClose}
                                        className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/20 text-white/80 font-medium text-sm hover:bg-white/10 hover:text-white transition-all duration-300"
                                    >
                                        Maybe Later
                                    </button>
                                </motion.div>
                            </div>

                            {/* Bottom Shimmer Effect */}
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "200%" }}
                                transition={{
                                    delay: 1,
                                    duration: 1.5,
                                    ease: "easeInOut",
                                }}
                                className="absolute bottom-0 left-0 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#c19b33]/60 to-transparent"
                            />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
}
