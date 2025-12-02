"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-void-green px-4 text-center selection:bg-neon-orange/30">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
            >
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-24">
                    {/* Left Section: Hugging Face */}
                    <div className="flex flex-col items-center justify-center space-y-6">
                        <h2 className="text-2xl font-bold text-mint-white md:text-4xl">
                            Leave a Comment
                        </h2>
                        <a
                            href="https://huggingface.co/moxin-org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center gap-4 text-xl font-bold text-neon-orange transition-colors hover:text-bio-lume md:text-3xl"
                        >
                            <span>Hugging Face</span>
                            <ArrowRight className="h-6 w-6 -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                            <div className="absolute -inset-4 -z-10 rounded-xl bg-neon-orange/10 blur-xl transition-colors duration-300 group-hover:bg-bio-lume/10" />
                        </a>
                        <a
                            href="https://github.com/moxin-org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center gap-4 text-xl font-bold text-neon-orange transition-colors hover:text-bio-lume md:text-3xl"
                        >
                            <span>GitHub</span>
                            <ArrowRight className="h-6 w-6 -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                            <div className="absolute -inset-4 -z-10 rounded-xl bg-neon-orange/10 blur-xl transition-colors duration-300 group-hover:bg-bio-lume/10" />
                        </a>
                    </div>

                    {/* Right Section: Contact Info */}
                    <div className="flex flex-col items-center justify-center space-y-6">
                        <h2 className="text-2xl font-bold text-mint-white md:text-4xl">
                            Contact Us
                        </h2>
                        <div className="flex flex-col gap-4">
                            <a
                                href="mailto:piu93593@gmail.com"
                                className="group relative inline-flex items-center gap-4 text-lg font-bold text-moss-grey transition-colors hover:text-neon-orange md:text-2xl"
                            >
                                <span>Research Scientist: Pu Zhao</span>
                                <ArrowRight className="h-5 w-5 -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                            </a>

                            <a
                                href="mailto:hzeng49@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-4 text-lg font-bold text-moss-grey transition-colors hover:text-neon-orange md:text-2xl"
                            >
                                <span>Project Manager: Haochen Zeng</span>
                                <ArrowRight className="h-5 w-5 -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </main>
    );
}
