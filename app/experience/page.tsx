import { Navbar } from "@/components/navbar"
import { PageHero } from "@/components/page-hero"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Check } from "lucide-react"

export default function ExperiencePage() {
    return (
        <main>
            <Navbar />

            <PageHero
                title="L'Expérience de Voyage Temporel"
                subtitle="Un voyage sûr, confortable et inoubliable à travers les âges"
                backgroundImage="https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=2050&auto=format&fit=crop"
            />

            {/* How it works */}
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="mb-12 text-center">
                        <p className="text-sm font-medium uppercase tracking-widest text-primary">
                            Comment ça marche
                        </p>
                        <h2 className="mt-3 font-serif text-3xl tracking-tight text-foreground md:text-4xl">
                            Votre Voyage Étape par Étape
                        </h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {/* Step 1 */}
                        <div className="relative">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                                1
                            </div>
                            <h3 className="mt-4 font-serif text-xl text-foreground">Réservation</h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Choisissez votre destination et votre période. Notre équipe configure votre voyage temporel personnalisé.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="relative">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                                2
                            </div>
                            <h3 className="mt-4 font-serif text-xl text-foreground">Préparation</h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Formation de sécurité, briefing historique, et équipement fourni (vêtements d'époque, kit de survie).
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="relative">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                                3
                            </div>
                            <h3 className="mt-4 font-serif text-xl text-foreground">Voyage</h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Transfert temporel sécurisé en quelques secondes. Découverte immersive guidée par nos experts.
                            </p>
                        </div>

                        {/* Step 4 */}
                        <div className="relative">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                                4
                            </div>
                            <h3 className="mt-4 font-serif text-xl text-foreground">Retour</h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Retour sécurisé au présent. Débriefing et souvenirs inoubliables à partager.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="bg-secondary/30 py-16 md:py-24">
                <div className="mx-auto max-w-4xl px-6">
                    <h2 className="mb-12 text-center font-serif text-3xl tracking-tight text-foreground md:text-4xl">
                        Ce Qui Est Inclus
                    </h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="flex gap-3">
                            <Check className="h-6 w-6 shrink-0 text-primary" />
                            <div>
                                <h3 className="font-semibold text-foreground">Transfert Temporel Aller-Retour</h3>
                                <p className="text-sm text-muted-foreground">Voyage sécurisé et confortable</p>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <Check className="h-6 w-6 shrink-0 text-primary" />
                            <div>
                                <h3 className="font-semibold text-foreground">Guide Expert</h3>
                                <p className="text-sm text-muted-foreground">Historien ou paléontologue certifié</p>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <Check className="h-6 w-6 shrink-0 text-primary" />
                            <div>
                                <h3 className="font-semibold text-foreground">Équipement Complet</h3>
                                <p className="text-sm text-muted-foreground">Vêtements d'époque et matériel de sécurité</p>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <Check className="h-6 w-6 shrink-0 text-primary" />
                            <div>
                                <h3 className="font-semibold text-foreground">Assurance Temporelle</h3>
                                <p className="text-sm text-muted-foreground">Protection complète durant le voyage</p>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <Check className="h-6 w-6 shrink-0 text-primary" />
                            <div>
                                <h3 className="font-semibold text-foreground">Hébergement Premium</h3>
                                <p className="text-sm text-muted-foreground">Campement blindé ou hôtel d'époque 5 étoiles</p>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <Check className="h-6 w-6 shrink-0 text-primary" />
                            <div>
                                <h3 className="font-semibold text-foreground">Repas Inclus</h3>
                                <p className="text-sm text-muted-foreground">Cuisine locale authentique adaptée</p>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <Check className="h-6 w-6 shrink-0 text-primary" />
                            <div>
                                <h3 className="font-semibold text-foreground">Documentation Photo/Vidéo</h3>
                                <p className="text-sm text-muted-foreground">Souvenirs certifiés de votre voyage</p>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <Check className="h-6 w-6 shrink-0 text-primary" />
                            <div>
                                <h3 className="font-semibold text-foreground">Assistance 24/7</h3>
                                <p className="text-sm text-muted-foreground">Support temporel en temps réel</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-3xl px-6">
                    <h2 className="mb-12 text-center font-serif text-3xl tracking-tight text-foreground md:text-4xl">
                        Questions Fréquentes
                    </h2>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-left">
                                Est-ce dangereux de voyager dans le temps ?
                            </AccordionTrigger>
                            <AccordionContent>
                                Absolument pas. Notre technologie a été testée et certifiée par l'Autorité Temporelle
                                Internationale. Nous utilisons des protocoles de sécurité stricts et tous nos voyages
                                sont accompagnés par des experts. Le taux de satisfaction et de sécurité est de 99,9%.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-left">
                                Puis-je modifier le passé ?
                            </AccordionTrigger>
                            <AccordionContent>
                                Non. Notre technologie utilise des bulles temporelles qui vous permettent d'observer
                                et de vivre l'histoire sans pouvoir la modifier. C'est une mesure de sécurité fondamentale
                                pour préserver la ligne temporelle.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-left">
                                Combien de temps dure un voyage ?
                            </AccordionTrigger>
                            <AccordionContent>
                                Nos voyages durent généralement de 3 à 7 jours dans le passé. Grâce à la technologie
                                de compression temporelle, seulement quelques heures se seront écoulées dans le présent
                                à votre retour.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4">
                            <AccordionTrigger className="text-left">
                                Que se passe-t-il si je tombe malade pendant le voyage ?
                            </AccordionTrigger>
                            <AccordionContent>
                                Chaque voyageur est vacciné contre les maladies de l'époque avant le départ. De plus,
                                nos guides transportent une trousse médicale complète et peuvent effectuer un retour
                                d'urgence si nécessaire.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5">
                            <AccordionTrigger className="text-left">
                                Y a-t-il une limite d'âge ?
                            </AccordionTrigger>
                            <AccordionContent>
                                Les voyageurs doivent avoir entre 18 et 75 ans. Des exceptions peuvent être accordées
                                après examen médical approfondi. Pour les destinations préhistoriques, nous recommandons
                                une excellente condition physique.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-6">
                            <AccordionTrigger className="text-left">
                                Combien coûte un voyage temporel ?
                            </AccordionTrigger>
                            <AccordionContent>
                                Les prix varient selon la destination : Paris 1889 (5,000€), Florence 1504 (6,200€),
                                et Crétacé Supérieur (8,500€). Ces prix incluent tout l'équipement, l'hébergement,
                                les repas, et l'assurance temporelle.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {/* CTA */}
            <CtaSection
                title="Vivez l'Histoire en Vrai"
                description="Ne laissez pas le temps vous limiter. Réservez votre voyage temporel aujourd'hui."
                buttonText="Réserver Maintenant"
                buttonHref="/#destinations"
            />

            <Footer />
        </main>
    )
}
