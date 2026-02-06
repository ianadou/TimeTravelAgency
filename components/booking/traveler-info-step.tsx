"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { BookingData } from "@/lib/booking-types"
import { User, Mail, Phone, AlertCircle } from "lucide-react"

interface TravelerInfoStepProps {
    bookingData: Partial<BookingData>
    onUpdate: (data: Partial<BookingData>) => void
    onNext: () => void
    onPrev: () => void
}

export function TravelerInfoStep({ bookingData, onUpdate, onNext, onPrev }: TravelerInfoStepProps) {
    const [travelerName, setTravelerName] = useState(bookingData.travelerName || "")
    const [email, setEmail] = useState(bookingData.email || "")
    const [phone, setPhone] = useState(bookingData.phone || "")
    const [emergencyContact, setEmergencyContact] = useState(bookingData.emergencyContact || "")
    const [passportNumber, setPassportNumber] = useState(bookingData.passportNumber || "")
    const [medicalConditions, setMedicalConditions] = useState(bookingData.medicalConditions || false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        onUpdate({
            travelerName,
            email,
            phone,
            emergencyContact,
            passportNumber,
            medicalConditions,
        })
        onNext()
    }

    return (
        <Card className="p-8">
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <h2 className="font-serif text-2xl text-foreground">Informations Voy

                        ageur</h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Veuillez fournir vos informations personnelles
                    </p>
                </div>

                <div className="space-y-6">
                    {/* Full Name */}
                    <div>
                        <Label htmlFor="travelerName" className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            Nom complet
                        </Label>
                        <Input
                            id="travelerName"
                            type="text"
                            value={travelerName}
                            onChange={(e) => setTravelerName(e.target.value)}
                            placeholder="Jean Dupont"
                            className="mt-2"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <Label htmlFor="email" className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            Email
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="jean.dupont@example.com"
                            className="mt-2"
                            required
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <Label htmlFor="phone" className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            Téléphone
                        </Label>
                        <Input
                            id="phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+33 6 12 34 56 78"
                            className="mt-2"
                            required
                        />
                    </div>

                    {/* Emergency Contact */}
                    <div>
                        <Label htmlFor="emergencyContact">Contact d'urgence</Label>
                        <Input
                            id="emergencyContact"
                            type="tel"
                            value={emergencyContact}
                            onChange={(e) => setEmergencyContact(e.target.value)}
                            placeholder="+33 6 98 76 54 32"
                            className="mt-2"
                            required
                        />
                    </div>

                    {/* Passport Number */}
                    <div>
                        <Label htmlFor="passportNumber">Numéro de passeport</Label>
                        <Input
                            id="passportNumber"
                            type="text"
                            value={passportNumber}
                            onChange={(e) => setPassportNumber(e.target.value)}
                            placeholder="12AB34567"
                            className="mt-2"
                            required
                        />
                    </div>

                    {/* Medical Conditions */}
                    <div className="flex items-start space-x-3 rounded-lg border border-border p-4">
                        <Checkbox
                            id="medicalConditions"
                            checked={medicalConditions}
                            onCheckedChange={(checked) => setMedicalConditions(checked as boolean)}
                        />
                        <div className="flex-1">
                            <Label htmlFor="medicalConditions" className="flex items-center gap-2 cursor-pointer">
                                <AlertCircle className="h-4 w-4 text-primary" />
                                Conditions médicales
                            </Label>
                            <p className="text-xs text-muted-foreground mt-1">
                                Je déclare avoir des conditions médicales nécessitant une attention particulière
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex gap-4">
                    <Button type="button" variant="outline" size="lg" onClick={onPrev} className="flex-1">
                        Retour
                    </Button>
                    <Button type="submit" size="lg" className="flex-1">
                        Continuer
                    </Button>
                </div>
            </form>
        </Card>
    )
}
