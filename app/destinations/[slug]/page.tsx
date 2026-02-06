import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { PageHero } from "@/components/page-hero"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { getDestinationBySlug } from "@/lib/destinations-data"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Clock, AlertCircle } from "lucide-react"

interface PageProps {
    params: Promise<{
        slug: string
    }>
}

export default async function DestinationPage({ params }: PageProps) {
    const { slug } = await params
    const destination = getDestinationBySlug(slug)

    if (!destination) {
        notFound()
    }

    return (
        <main>
            <Navbar />

            <PageHero
                title={destination.title}
                subtitle={`${destination.period} • ${destination.year}`}
                backgroundVideo={destination.video}
                backgroundImage={destination.image}
            />

            {/* Overview */}
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-4xl px-6">
                    <div className="flex items-center justify-between">
                        <Badge className="bg-primary text-primary-foreground">
                            {destination.badge}
                        </Badge>
                        <div className="text-right">
                            <p className="text-sm text-muted-foreground">À partir de</p>
                            <p className="font-serif text-3xl text-primary">{destination.price}</p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            {destination.longDescription}
                        </p>
                    </div>
                </div>
            </section>

            {/* Highlights */}
            <section className="bg-secondary/30 py-16 md:py-24">
                <div className="mx-auto max-w-6xl px-6">
                    <h2 className="mb-8 text-center font-serif text-3xl tracking-tight text-foreground md:text-4xl">
                        Points Forts
                    </h2>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {destination.highlights.map((highlight, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
                            >
                                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                                <p className="text-foreground">{highlight}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Itinerary */}
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-4xl px-6">
                    <h2 className="mb-12 text-center font-serif text-3xl tracking-tight text-foreground md:text-4xl">
                        Itinéraire Détaillé
                    </h2>
                    <div className="space-y-8">
                        {destination.itinerary.map((day, index) => (
                            <div key={index} className="border-l-2 border-primary pl-6">
                                <div className="flex items-center gap-3">
                                    <Calendar className="h-5 w-5 text-primary" />
                                    <h3 className="font-serif text-xl text-foreground">
                                        {day.day} : {day.title}
                                    </h3>
                                </div>
                                <ul className="mt-4 space-y-2">
                                    {day.activities.map((activity, actIndex) => (
                                        <li key={actIndex} className="flex items-start gap-2">
                                            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                                            <span className="text-muted-foreground">{activity}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Practical Info */}
            <section className="bg-secondary/30 py-16 md:py-24">
                <div className="mx-auto max-w-6xl px-6">
                    <h2 className="mb-12 text-center font-serif text-3xl tracking-tight text-foreground md:text-4xl">
                        Informations Pratiques
                    </h2>
                    <div className="grid gap-8 md:grid-cols-2">
                        {/* What to Bring */}
                        <div className="rounded-lg border border-border bg-card p-6">
                            <h3 className="mb-4 font-serif text-xl text-foreground">À Apporter</h3>
                            <ul className="space-y-2">
                                {destination.whatToBring.map((item, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Safety */}
                        <div className="rounded-lg border border-border bg-card p-6">
                            <div className="mb-4 flex items-center gap-2">
                                <AlertCircle className="h-5 w-5 text-primary" />
                                <h3 className="font-serif text-xl text-foreground">Consignes de Sécurité</h3>
                            </div>
                            <ul className="space-y-2">
                                {destination.safetyNotes.map((note, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                                        <span className="text-muted-foreground">{note}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CtaSection
                title={`Réservez ${destination.title} Maintenant`}
                description={`Vivez l'expérience unique de ${destination.period}. Places limitées disponibles.`}
                buttonText="Réserver Ce Voyage"
                buttonHref={`/book?destination=${destination.slug}`}
            />

            <Footer />
        </main>
    )
}

// Generate static params for the 3 destinations
export async function generateStaticParams() {
    return [
        { slug: "paris-1889" },
        { slug: "cretaceous" },
        { slug: "florence-1504" },
    ]
}
