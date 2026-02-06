"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-xl tracking-wide text-primary">
          TimeTravel Agency
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/#destinations"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Destinations
          </Link>
          <Link
            href="/experience"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Experience
          </Link>
          <Link
            href="/about"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </Link>
          <Link href="/#destinations">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Book Your Era
            </Button>
          </Link>
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
            <Link
              href="/#destinations"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Destinations
            </Link>
            <Link
              href="/experience"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Experience
            </Link>
            <Link
              href="/about"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <Link href="/#destinations" onClick={() => setMobileOpen(false)}>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Book Your Era
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
