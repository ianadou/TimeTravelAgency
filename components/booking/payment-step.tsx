"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BookingData, formatPrice } from "@/lib/booking-types"
import { CreditCard, Lock, Loader2 } from "lucide-react"

interface PaymentStepProps {
    bookingData: Partial<BookingData>
    onSuccess: () => void
    onPrev: () => void
}

export function PaymentStep({ bookingData, onSuccess, onPrev }: PaymentStepProps) {
    const [cardNumber, setCardNumber] = useState("")
    const [cardExpiry, setCardExpiry] = useState("")
    const [cardCVV, setCardCVV] = useState("")
    const [cardholderName, setCardholderName] = useState("")
    const [isProcessing, setIsProcessing] = useState(false)

    const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, "")
        if (value.length > 16) value = value.slice(0, 16)

        // Format as XXXX XXXX XXXX XXXX
        const formatted = value.match(/.{1,4}/g)?.join(" ") || value
        setCardNumber(formatted)
    }

    const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, "")
        if (value.length >= 2) {
            value = value.slice(0, 2) + "/" + value.slice(2, 4)
        }
        setCardExpiry(value)
    }

    const handleCVVChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, "").slice(0, 3)
        setCardCVV(value)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Validate card number (must be 16 digits)
        const cleanCardNumber = cardNumber.replace(/\s/g, "")
        if (cleanCardNumber.length !== 16) {
            alert("Le numéro de carte doit contenir 16 chiffres")
            return
        }

        // Validate expiry
        if (!/^\d{2}\/\d{2}$/.test(cardExpiry)) {
            alert("Format de date d'expiration invalide (MM/YY)")
            return
        }

        // Validate CVV
        if (cardCVV.length !== 3) {
            alert("Le CVV doit contenir 3 chiffres")
            return
        }

        // Simulate payment processing
        setIsProcessing(true)

        setTimeout(() => {
            setIsProcessing(false)
            onSuccess()
        }, 2500)
    }

    const basePrice = parseFloat(bookingData.destination?.price.replace(/[^0-9]/g, "") || "0")
    const total = basePrice * (bookingData.numTravelers || 1)

    return (
        <Card className="p-8">
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <h2 className="font-serif text-2xl text-foreground">Paiement Sécurisé</h2>
                    <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                        <Lock className="h-4 w-4 text-primary" />
                        <span>Vos informations sont cryptées et sécurisées</span>
                    </div>
                </div>

                <div className="space-y-6">
                    {/* Card Number */}
                    <div>
                        <Label htmlFor="cardNumber" className="flex items-center gap-2">
                            <CreditCard className="h-4 w-4" />
                            Numéro de carte
                        </Label>
                        <Input
                            id="cardNumber"
                            type="text"
                            value={cardNumber}
                            onChange={handleCardNumberChange}
                            placeholder="1234 5678 9012 3456"
                            className="mt-2 font-mono"
                            required
                        />
                        <p className="mt-1 text-xs text-muted-foreground">
                            💳 Utilisez 4111 1111 1111 1111 pour tester
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Expiry Date */}
                        <div>
                            <Label htmlFor="cardExpiry">Date d'expiration</Label>
                            <Input
                                id="cardExpiry"
                                type="text"
                                value={cardExpiry}
                                onChange={handleExpiryChange}
                                placeholder="MM/YY"
                                className="mt-2 font-mono"
                                required
                            />
                        </div>

                        {/* CVV */}
                        <div>
                            <Label htmlFor="cardCVV">CVV</Label>
                            <Input
                                id="cardCVV"
                                type="text"
                                value={cardCVV}
                                onChange={handleCVVChange}
                                placeholder="123"
                                className="mt-2 font-mono"
                                required
                            />
                        </div>
                    </div>

                    {/* Cardholder Name */}
                    <div>
                        <Label htmlFor="cardholderName">Titulaire de la carte</Label>
                        <Input
                            id="cardholderName"
                            type="text"
                            value={cardholderName}
                            onChange={(e) => setCardholderName(e.target.value)}
                            placeholder="JEAN DUPONT"
                            className="mt-2 uppercase"
                            required
                        />
                    </div>

                    {/* Order Summary */}
                    <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-6">
                        <h3 className="font-semibold text-foreground">Récapitulatif</h3>
                        <div className="mt-4 space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Destination</span>
                                <span className="font-medium">{bookingData.destination?.title}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Voyageurs</span>
                                <span className="font-medium">{bookingData.numTravelers}</span>
                            </div>
                            <div className="h-px bg-border" />
                            <div className="flex justify-between">
                                <span className="font-semibold">Total à payer</span>
                                <span className="font-serif text-2xl text-primary">{formatPrice(total)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex gap-4">
                    <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        onClick={onPrev}
                        disabled={isProcessing}
                        className="flex-1"
                    >
                        Retour
                    </Button>
                    <Button type="submit" size="lg" disabled={isProcessing} className="flex-1">
                        {isProcessing ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Traitement...
                            </>
                        ) : (
                            `Payer ${formatPrice(total)}`
                        )}
                    </Button>
                </div>
            </form>
        </Card>
    )
}
