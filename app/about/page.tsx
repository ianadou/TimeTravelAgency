import { Navbar } from "@/components/navbar"
import { PageHero } from "@/components/page-hero"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { Clock, Shield, Users, Award } from "lucide-react"

export default function AboutPage() {
    return (
        <main>
            <Navbar />

            <PageHero
                title="À Propos de TimeTravel Agency"
                subtitle="Pionnier du tourisme temporel depuis 2157"
                backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            />

            {/* Mission */}
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-4xl px-6">
                    <div className="text-center">
                        <p className="text-sm font-medium uppercase tracking-widest text-primary">
                            Notre Mission
                        </p>
                        <h2 className="mt-3 font-serif text-3xl tracking-tight text-foreground md:text-4xl">
                            Rendre l'Histoire Accessible
                        </h2>
                        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                            Chez TimeTravel Agency, nous croyons que l'histoire ne devrait pas être confinée aux livres.
                            Grâce à notre technologie de pointe en déplacement temporel, nous offrons des expériences
                            immersives uniques qui permettent à nos voyageurs de vivre les moments les plus fascinants
                            de l'histoire humaine et de la Terre.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="bg-secondary/30 py-16 md:py-24">
                <div className="mx-auto max-w-6xl px-6">
                    <h2 className="mb-12 text-center font-serif text-3xl tracking-tight text-foreground md:text-4xl">
                        Nos Valeurs
                    </h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div className="text-center">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                <Shield className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="mt-4 font-serif text-xl text-foreground">Sécurité Absolue</h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Protocoles de sécurité certifiés par l'Autorité Temporelle Internationale
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                <Clock className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="mt-4 font-serif text-xl text-foreground">Précision Temporelle</h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Arrivée garantie au moment historique exact que vous souhaitez vivre
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                <Users className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="mt-4 font-serif text-xl text-foreground">Guides Experts</h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Historiens et paléontologues certifiés vous accompagnent
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                <Award className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="mt-4 font-serif text-xl text-foreground">Excellence Premium</h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Expériences de luxe et service 5 étoiles à travers les époques
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-4xl px-6">
                    <h2 className="mb-12 text-center font-serif text-3xl tracking-tight text-foreground md:text-4xl">
                        Notre Histoire
                    </h2>
                    <div className="space-y-8">
                        <div className="border-l-2 border-primary pl-6">
                            <p className="text-sm font-medium text-primary">2157</p>
                            <h3 className="mt-1 font-serif text-xl text-foreground">Fondation</h3>
                            <p className="mt-2 text-muted-foreground">
                                TimeTravel Agency est fondée par le Dr. Elena Chronos, physicienne quantique pionnière
                                dans le domaine des voyages temporels.
                            </p>
                        </div>

                        <div className="border-l-2 border-primary pl-6">
                            <p className="text-sm font-medium text-primary">2159</p>
                            <h3 className="mt-1 font-serif text-xl text-foreground">Premier Voyage Commercial</h3>
                            <p className="mt-2 text-muted-foreground">
                                Lancement de notre première destination : Paris 1889. Un succès immédiat avec plus de
                                10,000 voyageurs la première année.
                            </p>
                        </div>

                        <div className="border-l-2 border-primary pl-6">
                            <p className="text-sm font-medium text-primary">2161</p>
                            <h3 className="mt-1 font-serif text-xl text-foreground">Expansion Préhistorique</h3>
                            <p className="mt-2 text-muted-foreground">
                                Ouverture de notre destination Crétacé, première expédition au-delà de l'ère humaine.
                            </p>
                        </div>

                        <div className="border-l-2 border-primary pl-6">
                            <p className="text-sm font-medium text-primary">2163</p>
                            <h3 className="mt-1 font-serif text-xl text-foreground">Renaissance Culturelle</h3>
                            <p className="mt-2 text-muted-foreground">
                                Lancement de Florence 1504, destination culturelle permettant de rencontrer les plus
                                grands artistes de la Renaissance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CtaSection
                title="Prêt à Voyager dans le Temps ?"
                description="Découvrez nos destinations exclusives et réservez votre voyage historique dès aujourd'hui."
                buttonText="Explorer les Destinations"
                buttonHref="/#destinations"
            />

            <Footer />
        </main>
    )
}
