"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getDestinationBySlug } from "@/lib/destinations-data"
import { BookingData, generateBookingReference } from "@/lib/booking-types"
import { BookingWizard } from "@/components/booking/booking-wizard"
import { TravelDetailsStep } from "@/components/booking/travel-details-step"
import { TravelerInfoStep } from "@/components/booking/traveler-info-step"
import { PaymentStep } from "@/components/booking/payment-step"
import { TicketStep } from "@/components/booking/ticket-step"

export default function BookPage() {
    const searchParams = useSearchParams()
    const destinationSlug = searchParams.get("destination")

    const [currentStep, setCurrentStep] = useState(1)
    const [bookingData, setBookingData] = useState<Partial<BookingData>>({
        numTravelers: 1,
        medicalConditions: false,
    })

    useEffect(() => {
        if (destinationSlug) {
            const destination = getDestinationBySlug(destinationSlug)
            if (destination) {
                setBookingData((prev) => ({ ...prev, destination }))
            }
        }
    }, [destinationSlug])

    const updateBookingData = (data: Partial<BookingData>) => {
        setBookingData((prev) => ({ ...prev, ...data }))
    }

    const handleNextStep = () => {
        if (currentStep < 4) {
            setCurrentStep((prev) => prev + 1)
        }
    }

    const handlePrevStep = () => {
        if (currentStep > 1) {
            setCurrentStep((prev) => prev - 1)
        }
    }

    const handlePaymentSuccess = () => {
        // Generate booking reference and finalize
        const bookingReference = generateBookingReference()
        const bookingDate = new Date()
        const basePrice = parseFloat(bookingData.destination?.price.replace(/[^0-9]/g, "") || "0")
        const totalPrice = basePrice * (bookingData.numTravelers || 1)

        updateBookingData({
            bookingReference,
            bookingDate,
            totalPrice,
        })

        handleNextStep()
    }

    if (!bookingData.destination) {
        return (
            <main>
                <Navbar />
                <div className="flex min-h-screen items-center justify-center">
                    <p className="text-muted-foreground">Chargement...</p>
                </div>
                <Footer />
            </main>
        )
    }

    return (
        <main>
            <Navbar />

            <div className="min-h-screen bg-secondary/20 py-12 md:py-20">
                <div className="mx-auto max-w-4xl px-6">
                    <BookingWizard currentStep={currentStep} totalSteps={4} />

                    <div className="mt-12">
                        {currentStep === 1 && (
                            <TravelDetailsStep
                                bookingData={bookingData}
                                onUpdate={updateBookingData}
                                onNext={handleNextStep}
                            />
                        )}

                        {currentStep === 2 && (
                            <TravelerInfoStep
                                bookingData={bookingData}
                                onUpdate={updateBookingData}
                                onNext={handleNextStep}
                                onPrev={handlePrevStep}
                            />
                        )}

                        {currentStep === 3 && (
                            <PaymentStep
                                bookingData={bookingData}
                                onSuccess={handlePaymentSuccess}
                                onPrev={handlePrevStep}
                            />
                        )}

                        {currentStep === 4 && (
                            <TicketStep bookingData={bookingData as BookingData} />
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
