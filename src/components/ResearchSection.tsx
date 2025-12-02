"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const papers = [
    {
        title: "Fully Open Source Moxin-7B Technical Report",
        id: "2412.06845",
        date: "Dec 2024",
        link: "#",
    },
];

export function ResearchSection() {
    return (
        <section id="research" className="container mx-auto px-4 py-20">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-12 text-3xl font-bold text-mint-white md:text-5xl"
            >
                Open Science Contributions
            </motion.h2>

            <div className="space-y-4">
                {papers.map((paper, index) => (
                    <motion.div
                        key={paper.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/5 p-6 transition-colors hover:border-neon-orange/30 hover:bg-white/10"
                    >
                        <div className="flex items-center gap-4">
                            <div className="rounded-lg bg-void-green p-3 text-neon-orange">
                                <FileText className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-mint-white group-hover:text-neon-orange transition-colors">
                                    {paper.title}
                                </h3>
                                <p className="text-sm text-moss-grey">arXiv:{paper.id} • {paper.date}</p>
                            </div>
                        </div>
                        <a
                            href={`https://arxiv.org/abs/${paper.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-white/5 px-4 py-2 text-sm font-bold text-moss-grey transition-colors hover:bg-neon-orange hover:text-void-green"
                        >
                            arXiv
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
