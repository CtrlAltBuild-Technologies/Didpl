"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CallToAction() {
    return (
        <section className="py-24 bg-primary relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-white/5 -skew-x-12 -translate-x-1/4" />

            <Container className="relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                        Ready to Invest in Your Future?
                    </h2>
                    <p className="text-xl text-gray-200 mb-10 leading-relaxed">
                        Book a free site visit to Dholera SIR today and witness the rapid development firsthand. Our experts are ready to guide you.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="https://wa.me/918866909600?text=Hi%2C%20I%20am%20interested%20in%20booking%20a%20free%20site%20visit%20to%20Dholera%20SIR.%20Please%20share%20the%20details." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                            <Button size="lg" variant="secondary" className="w-full sm:w-auto font-bold">
                                Book Free Site Visit
                            </Button>
                        </a>
                        <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary">
                            Contact Sales Team <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
