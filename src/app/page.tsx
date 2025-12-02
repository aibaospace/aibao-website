import { HeroSection } from "@/components/HeroSection";
import { ModelShowcase } from "@/components/ModelShowcase";
import { ResearchSection } from "@/components/ResearchSection";
import { CTASection } from "@/components/CTASection";
import { Github } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-void-green selection:bg-neon-orange/30">
      <HeroSection />
      <ModelShowcase />
      <ResearchSection />
      <CTASection />

      <footer className="container mx-auto border-t border-white/5 px-4 py-8 text-center text-sm text-moss-grey">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p>© 2025 AIBao LLC. Contributing to Moxin Org.</p>
          <div className="flex gap-4 items-center">
            <a href="https://huggingface.co/moxin-org" target="_blank" rel="noopener noreferrer" className="hover:text-neon-orange transition-colors font-bold">
              HF
            </a>
            <a href="https://github.com/moxin-org" target="_blank" rel="noopener noreferrer" className="hover:text-neon-orange transition-colors">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
