"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface BentoCardProps {
    title: string;
    description: string;
    tags: string[];
    href: string;
    size?: "large" | "vertical" | "standard";
    className?: string;
    children?: React.ReactNode;
}

export function BentoCard({
    title,
    description,
    tags,
    href,
    size = "standard",
    className,
    children,
}: BentoCardProps) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const spanClasses = {
        large: "md:col-span-2 md:row-span-2",
        vertical: "md:col-span-1 md:row-span-2",
        standard: "md:col-span-1 md:row-span-1",
    };

    return (
        <Link
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={cn(
                "group relative flex flex-col overflow-hidden rounded-3xl border border-white/5 bg-jungle-green p-6 transition-colors hover:border-neon-orange/50",
                spanClasses[size],
                className
            )}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 114, 0, 0.15),
              transparent 80%
            )
          `,
                }}
            />

            <div className="relative z-10 flex h-full flex-col justify-between gap-4">
                <div className="flex-1">
                    {children}
                </div>

                <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-white/5 px-2 py-1 text-xs font-medium text-moss-grey backdrop-blur-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="space-y-1">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold text-mint-white group-hover:text-neon-orange transition-colors">{title}</h3>
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-bold text-neon-orange opacity-0 transition-opacity group-hover:opacity-100">HF</span>
                                <ArrowUpRight className="h-5 w-5 text-neon-orange opacity-0 transition-opacity group-hover:opacity-100" />
                            </div>
                        </div>
                        <p className="text-sm text-gray-400 line-clamp-3">{description}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
