"use client";

import { motion } from "framer-motion";
import { BentoCard } from "./BentoCard";
import { cn } from "@/lib/utils";

const models = [
    {
        title: "Moxin-7B-LLM",
        description: "Our flagship open-source model. SOTA performance. LLM/VLM/VLA.",
        tags: ["Foundation", "Open Science", "SOTA"],
        href: "https://huggingface.co/moxin-org",
        size: "large" as const,
    },
    {
        title: "Kimi-K2-Thinking",
        description: "1 Trillion Token Context. Thinking Logic. GGUF.",
        tags: ["1T Context", "Reasoning", "GGUF"],
        href: "https://huggingface.co/moxin-org/Kimi-K2-Thinking-Moxin-GGUF",
        size: "standard" as const,
    },
    {
        title: "DeepSeek-V3",
        description: "671B Parameters. Extreme Quantization.",
        tags: ["671B", "Quantization", "DeepSeek"],
        href: "https://huggingface.co/moxin-org/DeepSeek-V3-Moxin-GGUF",
        size: "standard" as const,
    },
    {
        title: "GLM-4.6 & MiniMax",
        description: "Diverse Architecture Support.",
        tags: ["MoE", "GLM", "MiniMax"],
        href: "https://huggingface.co/moxin-org",
        size: "standard" as const,
    },
    {
        title: "More Models...",
        description: "Explore our full collection of quantized models on Hugging Face.",
        tags: [],
        href: "https://huggingface.co/collections/moxin-org/moxin-gguf",
        size: "standard" as const,
        className: "bg-neon-orange/10 hover:bg-neon-orange/20 border-neon-orange/20",
    },
];

const spanClasses = {
    large: "md:col-span-2 md:row-span-2",
    vertical: "md:col-span-1 md:row-span-2",
    standard: "md:col-span-1 md:row-span-1",
};

export function ModelShowcase() {
    return (
        <section id="models" className="container mx-auto px-4 py-20">
            <div className="mb-12">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-mint-white md:text-5xl"
                >
                    Local Deployment & Quantization
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="mt-4 text-moss-grey"
                >
                    AIBao is a core contributor to the <a href="https://github.com/moxin-org" className="text-neon-orange hover:underline">Moxin Organization</a>, delivering high-fidelity GGUF quants and open-source foundations.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-4 auto-rows-[200px]">
                {models.map((model, index) => (
                    <motion.div
                        key={model.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        className={spanClasses[model.size]}
                    >
                        <BentoCard
                            {...model}
                            className={cn("h-full", model.className)}
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
