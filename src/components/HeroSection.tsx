"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section
            ref={ref}
            className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden px-4 pt-20 pb-10 text-center"
        >
            {/* Aurora Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute -top-[20%] -left-[10%] h-[600px] w-[600px] rounded-full bg-neon-orange/20 blur-[120px] animate-pulse" />
                <div className="absolute top-[10%] -right-[10%] h-[500px] w-[500px] rounded-full bg-bio-lume/10 blur-[100px] animate-pulse delay-1000" />
            </div>

            <motion.div style={{ y, opacity }} className="relative z-10 flex max-w-7xl flex-col items-center justify-center gap-8 md:flex-row md:gap-16">
                <div className="relative h-48 w-48 flex-shrink-0 sm:h-64 sm:w-64 md:h-80 md:w-80">
                    <Image
                        src="/aibao_logo_white.png"
                        alt="AIBao"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                <div className="flex flex-col items-center text-center md:items-start md:text-left">
                    <h2 className="text-4xl font-bold tracking-tight text-mint-white sm:text-6xl md:text-7xl">
                        <span className="block">Accelerating</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-orange to-bio-lume">
                            Local Intelligence.
                        </span>
                    </h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="mt-6 max-w-2xl text-lg text-moss-grey sm:text-xl"
                    >
                        Engineering extreme quantization for popular models likeDeepSeek, Kimi, Qwen, and more.
                    </motion.p>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{
                    opacity: { delay: 1.5, duration: 1 },
                    y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <ArrowDown className="h-10 w-10 text-neon-orange" />
            </motion.div>
        </section>
    );
}
