"use client";

import { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

interface TerminalBlockProps {
    command: string;
    className?: string;
}

export function TerminalBlock({ command, className }: TerminalBlockProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(command);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={cn("relative overflow-hidden rounded-xl border border-white/10 bg-black/50 backdrop-blur-md", className)}>
            <div className="flex items-center justify-between border-b border-white/5 bg-white/5 px-4 py-2">
                <div className="flex items-center gap-2">
                    <Terminal className="h-4 w-4 text-moss-grey" />
                    <span className="text-xs font-medium text-moss-grey">Terminal</span>
                </div>
                <button
                    onClick={handleCopy}
                    className="rounded p-1 transition-colors hover:bg-white/10"
                    aria-label="Copy command"
                >
                    {copied ? (
                        <Check className="h-4 w-4 text-bio-lume" />
                    ) : (
                        <Copy className="h-4 w-4 text-moss-grey" />
                    )}
                </button>
            </div>
            <div className="p-4 font-mono text-sm text-mint-white overflow-x-auto">
                <span className="mr-2 text-neon-orange select-none">$</span>
                {command}
            </div>
        </div>
    );
}
