"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", path: "/" },
    { name: "Models", path: "/#models" },
    { name: "Contact", path: "/contact" },
];

export function NavBar() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-8 pointer-events-none">
            <div className="pointer-events-auto flex items-center gap-4 rounded-full border border-white/10 bg-void-green/80 px-6 py-3 backdrop-blur-xl shadow-lg shadow-neon-orange/5 pr-8">
                <Link href="/" className="mr-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                    {/* Placeholder for logo - ensure logo.png exists in public/ folder */}
                    <Image
                        src="/aibao_logo_black_icon.png"
                        alt="AIBao Logo"
                        width={40}
                        height={40}
                        className="h-10 w-10 object-contain"
                    />
                </Link>
                {navItems.map((item) => {
                    const isActive = item.path === pathname;

                    return (
                        <Link
                            key={item.name}
                            href={item.path}
                            className={cn(
                                "relative px-6 py-3 text-lg font-medium transition-colors hover:text-neon-orange",
                                isActive ? "text-neon-orange" : "text-moss-grey"
                            )}
                        >
                            {item.name}
                            {isActive && (
                                <motion.div
                                    layoutId="navbar-indicator"
                                    className="absolute bottom-0 left-0 right-0 h-px bg-neon-orange shadow-[0_0_10px_#FF7200]"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
