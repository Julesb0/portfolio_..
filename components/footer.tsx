"use client"

import { ArrowUp, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative border-t border-[#1e293b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="font-mono text-sm text-[#64748b]">
              Julesb0 © {new Date().getFullYear()} — Diseñado & desarrollado con código y café.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Julesb0"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-[#1e293b] text-[#64748b] hover:text-[#f1f5f9] hover:border-[#7c3aed] transition-all cursor-pointer"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/esteban-bolaños-641668387"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-[#1e293b] text-[#64748b] hover:text-[#f1f5f9] hover:border-[#7c3aed] transition-all cursor-pointer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        size="icon"
        className="fixed bottom-8 right-8 rounded-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white shadow-lg shadow-[#7c3aed]/30 z-40 cursor-pointer"
        aria-label="Volver arriba"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    </footer>
  )
}
