"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="font-serif text-xl tracking-wide text-primary">
          TimeTravel Agency
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#destinations"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Destinations
          </a>
          <a
            href="#experience"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Experience
          </a>
          <a
            href="#about"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </a>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Book Your Era
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border/40 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            <a
              href="#destinations"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Destinations
            </a>
            <a
              href="#experience"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Experience
            </a>
            <a
              href="#about"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              About
            </a>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Book Your Era
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
