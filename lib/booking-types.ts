import { DestinationData } from "./destinations-data"

export interface BookingData {
    // Step 1: Travel Details
    destination: DestinationData
    travelDate: Date | null
    numTravelers: number

    // Step 2: Traveler Information
    travelerName: string
    email: string
    phone: string
    emergencyContact: string
    passportNumber: string
    medicalConditions: boolean

    // Step 4: Confirmation
    bookingReference: string
    bookingDate: Date
    totalPrice: number
}

export interface PaymentData {
    cardNumber: string
    cardExpiry: string
    cardCVV: string
    cardholderName: string
}

export interface TicketData {
    bookingReference: string
    travelerName: string
    destination: string
    travelDate: Date
    numTravelers: number
    totalPrice: number
    bookingDate: Date
    qrCodeData: string
}

export function generateBookingReference(): string {
    const prefix = "TTA"
    const year = new Date().getFullYear()
    const random = Math.random().toString(36).substring(2, 8).toUpperCase()
    return `${prefix}-${year}-${random}`
}

export function calculateTotalPrice(basePrice: number, numTravelers: number): number {
    return basePrice * numTravelers
}

export function formatPrice(price: number): string {
    return new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 0,
    }).format(price)
}
