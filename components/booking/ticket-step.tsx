"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookingData, formatPrice } from "@/lib/booking-types"
import { CheckCircle2, Download, Mail, Home, Calendar, Users } from "lucide-react"
import Link from "next/link"
import { QRCodeSVG } from "qrcode.react"
import { format } from "date-fns"
import { fr } from "date-fns/locale"

interface TicketStepProps {
    bookingData: BookingData
}

export function TicketStep({ bookingData }: TicketStepProps) {
    const qrCodeData = JSON.stringify({
        ref: bookingData.bookingReference,
        name: bookingData.travelerName,
        destination: bookingData.destination.slug,
        date: bookingData.travelDate,
        travelers: bookingData.numTravelers,
    })

    const handleDownloadPDF = () => {
        // Simple print-to-PDF using browser's print functionality
        window.print()
    }

    const handleEmailTicket = () => {
        alert(`Votre billet a été envoyé à ${bookingData.email} !`)
    }

    return (
        <div className="space-y-8">
            {/* Success Message */}
            <Card className="border-2 border-primary/20 bg-primary/5 p-8 text-center">
                <div className="flex justify-center">
                    <div className="rounded-full bg-primary p-3">
                        <CheckCircle2 className="h-8 w-8 text-primary-foreground" />
                    </div>
                </div>
                <h2 className="mt-4 font-serif text-3xl text-foreground">Réservation Confirmée !</h2>
                <p className="mt-2 text-muted-foreground">
                    Votre voyage temporel est confirmé. Préparez-vous pour une expérience inoubliable.
                </p>
            </Card>

            {/* Ticket */}
            <Card className="overflow-hidden print:shadow-none" id="ticket">
                <div className="bg-gradient-to-br from-primary/10 via-background to-primary/5 p-8">
                    {/* Header */}
                    <div className="text-center">
                        <h3 className="font-serif text-sm tracking-widest text-primary">TIMETRAVEL AGENCY</h3>
                        <p className="mt-1 text-xs text-muted-foreground">Billet de Voyage Temporel</p>
                    </div>

                    {/* QR Code */}
                    <div className="my-8 flex justify-center">
                        <div className="rounded-lg bg-white p-4">
                            <QRCodeSVG value={qrCodeData} size={180} level="H" />
                        </div>
                    </div>

                    {/* Booking Reference */}
                    <div className="text-center">
                        <p className="text-xs font-medium text-muted-foreground">Référence de réservation</p>
                        <p className="mt-1 font-mono text-2xl font-bold tracking-wider text-primary">
                            {bookingData.bookingReference}
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="my-8 border-t-2 border-dashed border-border" />

                    {/* Ticket Details */}
                    <div className="space-y-6">
                        {/* Traveler Name */}
                        <div className="flex items-start gap-3">
                            <Users className="mt-0.5 h-5 w-5 text-primary" />
                            <div className="flex-1">
                                <p className="text-xs font-medium text-muted-foreground">Voyageur</p>
                                <p className="mt-1 font-semibold text-foreground">{bookingData.travelerName}</p>
                                <p className="text-sm text-muted-foreground">
                                    {bookingData.numTravelers} {bookingData.numTravelers > 1 ? "voyageurs" : "voyageur"}
                                </p>
                            </div>
                        </div>

                        {/* Destination */}
                        <div className="flex items-start gap-3">
                            <Home className="mt-0.5 h-5 w-5 text-primary" />
                            <div className="flex-1">
                                <p className="text-xs font-medium text-muted-foreground">Destination</p>
                                <p className="mt-1 font-semibold text-foreground">{bookingData.destination.title}</p>
                                <p className="text-sm text-muted-foreground">{bookingData.destination.period}</p>
                            </div>
                        </div>

                        {/* Travel Date */}
                        <div className="flex items-start gap-3">
                            <Calendar className="mt-0.5 h-5 w-5 text-primary" />
                            <div className="flex-1">
                                <p className="text-xs font-medium text-muted-foreground">Date de départ</p>
                                <p className="mt-1 font-semibold text-foreground">
                                    {format(bookingData.travelDate, "EEEE d MMMM yyyy", { locale: fr })}
                                </p>
                                <p className="text-sm text-muted-foreground">Durée : 3 jours / 2 nuits</p>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="rounded-lg bg-secondary/50 p-4">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-muted-foreground">Prix payé</span>
                                <span className="font-serif text-2xl text-primary">
                                    {formatPrice(bookingData.totalPrice)}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Footer Info */}
                    <div className="mt-8 rounded-lg border border-border bg-background/50 p-4">
                        <p className="text-xs text-muted-foreground">
                            <strong>Important :</strong> Présentez ce billet à l'embarquement. Arrivez 2 heures avant le
                            départ pour les contrôles de sécurité temporels. Badge temporel fourni sur place.
                        </p>
                    </div>

                    {/* Booking Date */}
                    <div className="mt-6 text-center">
                        <p className="text-xs text-muted-foreground">
                            Réservé le {format(bookingData.bookingDate, "d MMMM yyyy à HH:mm", { locale: fr })}
                        </p>
                    </div>
                </div>
            </Card>

            {/* Actions */}
            <div className="grid gap-4 md:grid-cols-3 print:hidden">
                <Button onClick={handleDownloadPDF} variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Télécharger PDF
                </Button>
                <Button onClick={handleEmailTicket} variant="outline" className="w-full">
                    <Mail className="mr-2 h-4 w-4" />
                    Envoyer par email
                </Button>
                <Link href="/" className="w-full">
                    <Button variant="default" className="w-full">
                        <Home className="mr-2 h-4 w-4" />
                        Retour à l'accueil
                    </Button>
                </Link>
            </div>

            {/* Additional Info */}
            <Card className="p-6 print:hidden">
                <h3 className="font-semibold text-foreground">Prochaines étapes</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Vous recevrez un email de confirmation dans quelques minutes</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Téléchargez votre billet et conservez-le sur votre appareil mobile</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Préparez vos documents de voyage (voir email de confirmation)</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Arrivez 2 heures avant le départ à notre terminal</span>
                    </li>
                </ul>
            </Card>
        </div>
    )
}
