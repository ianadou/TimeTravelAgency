"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "lucide-react"
import { BookingData, calculateTotalPrice, formatPrice } from "@/lib/booking-types"

interface TravelDetailsStepProps {
    bookingData: Partial<BookingData>
    onUpdate: (data: Partial<BookingData>) => void
    onNext: () => void
}

export function TravelDetailsStep({ bookingData, onUpdate, onNext }: TravelDetailsStepProps) {
    const [travelDate, setTravelDate] = useState("")
    const [numTravelers, setNumTravelers] = useState(bookingData.numTravelers || 1)

    const basePrice = parseFloat(bookingData.destination?.price.replace(/[^0-9]/g, "") || "0")
    const totalPrice = calculateTotalPrice(basePrice, numTravelers)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!travelDate) {
            alert("Veuillez sélectionner une date de voyage")
            return
        }

        const selectedDate = new Date(travelDate)
        const today = new Date()
        today.setHours(0, 0, 0, 0)

        if (selectedDate < today) {
            alert("La date de voyage doit être dans le futur")
            return
        }

        onUpdate({
            travelDate: selectedDate,
            numTravelers,
            totalPrice,
        })
        onNext()
    }

    return (
        <Card className="p-8">
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <h2 className="font-serif text-2xl text-foreground">Détails du Voyage</h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Destination : <span className="font-semibold text-primary">{bookingData.destination?.title}</span>
                    </p>
                </div>

                <div className="space-y-6">
                    {/* Travel Date */}
                    <div>
                        <Label htmlFor="travelDate" className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            Date de départ
                        </Label>
                        <Input
                            id="travelDate"
                            type="date"
                            value={travelDate}
                            onChange={(e) => setTravelDate(e.target.value)}
                            className="mt-2"
                            required
                            min={new Date().toISOString().split("T")[0]}
                        />
                    </div>

                    {/* Number of Travelers */}
                    <div>
                        <Label htmlFor="numTravelers">Nombre de voyageurs</Label>
                        <div className="mt-2 flex items-center gap-4">
                            <Button
                                type="button"
                                variant="outline"
                                size="icon"
                                onClick={() => setNumTravelers(Math.max(1, numTravelers - 1))}
                                disabled={numTravelers <= 1}
                            >
                                -
                            </Button>
                            <span className="w-12 text-center font-semibold">{numTravelers}</span>
                            <Button
                                type="button"
                                variant="outline"
                                size="icon"
                                onClick={() => setNumTravelers(Math.min(10, numTravelers + 1))}
                                disabled={numTravelers >= 10}
                            >
                                +
                            </Button>
                        </div>
                    </div>

                    {/* Duration Info */}
                    <div className="rounded-lg bg-secondary/50 p-4">
                        <p className="text-sm font-medium text-foreground">Durée du voyage</p>
                        <p className="text-sm text-muted-foreground">3 jours / 2 nuits (inclus)</p>
                    </div>

                    {/* Price Summary */}
                    <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground">Prix total</p>
                                <p className="text-xs text-muted-foreground">
                                    {formatPrice(basePrice)} × {numTravelers} {numTravelers > 1 ? "voyageurs" : "voyageur"}
                                </p>
                            </div>
                            <p className="font-serif text-3xl text-primary">{formatPrice(totalPrice)}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <Button type="submit" size="lg" className="w-full">
                        Continuer
                    </Button>
                </div>
            </form>
        </Card>
    )
}
