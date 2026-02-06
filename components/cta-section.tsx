import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CtaSectionProps {
    title: string
    description: string
    buttonText: string
    buttonHref: string
}

export function CtaSection({ title, description, buttonText, buttonHref }: CtaSectionProps) {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16 md:py-24">
            <div className="mx-auto max-w-4xl px-6 text-center">
                <h2 className="font-serif text-3xl tracking-tight text-foreground md:text-4xl">
                    {title}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    {description}
                </p>
                <div className="mt-8">
                    <Link href={buttonHref}>
                        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                            {buttonText}
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        </section>
    )
}
