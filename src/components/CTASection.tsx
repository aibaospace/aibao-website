"use client";

import { motion } from "framer-motion";
import { TerminalBlock } from "./TerminalBlock";
import { ArrowRight } from "lucide-react";

export function CTASection() {
    return (
        <section className="container mx-auto px-4 py-20">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-jungle-green p-8 md:p-12">
                <div className="absolute top-0 right-0 -mt-20 -mr-20 h-96 w-96 rounded-full bg-neon-orange/10 blur-3xl" />

                <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                    <div className="max-w-xl space-y-4">
                        <h2 className="text-3xl font-bold text-mint-white md:text-4xl">
                            Ready to Deploy?
                        </h2>
                        <p className="text-lg text-moss-grey">
                            All models are available now on Hugging Face. Download the Moxin-7B series or our optimized GGUF quants today.
                        </p>
                        <a
                            href="https://huggingface.co/moxin-org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-neon-orange hover:text-bio-lume transition-colors font-medium"
                        >
                            View the Moxin Collection <ArrowRight className="h-4 w-4" />
                        </a>
                    </div>

                    <div className="w-full max-w-md">
                        <TerminalBlock command="huggingface-cli download moxin-org/Kimi-K2-Thinking-Moxin-GGUF" />
                    </div>
                </div>
            </div>
        </section>
    );
}
