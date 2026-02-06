import { Check } from "lucide-react"

interface BookingWizardProps {
    currentStep: number
    totalSteps: number
}

export function BookingWizard({ currentStep, totalSteps }: BookingWizardProps) {
    const steps = [
        { number: 1, title: "Voyage" },
        { number: 2, title: "Informations" },
        { number: 3, title: "Paiement" },
        { number: 4, title: "Confirmation" },
    ]

    return (
        <div className="w-full">
            <div className="flex items-center justify-between">
                {steps.map((step, index) => (
                    <div key={step.number} className="flex flex-1 items-center">
                        {/* Step Circle */}
                        <div className="flex flex-col items-center">
                            <div
                                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors ${step.number < currentStep
                                        ? "border-primary bg-primary text-primary-foreground"
                                        : step.number === currentStep
                                            ? "border-primary bg-background text-primary"
                                            : "border-border bg-background text-muted-foreground"
                                    }`}
                            >
                                {step.number < currentStep ? (
                                    <Check className="h-5 w-5" />
                                ) : (
                                    <span className="font-semibold">{step.number}</span>
                                )}
                            </div>
                            <p
                                className={`mt-2 text-xs font-medium md:text-sm ${step.number === currentStep
                                        ? "text-foreground"
                                        : "text-muted-foreground"
                                    }`}
                            >
                                {step.title}
                            </p>
                        </div>

                        {/* Line */}
                        {index < steps.length - 1 && (
                            <div
                                className={`mx-2 h-0.5 flex-1 transition-colors ${step.number < currentStep ? "bg-primary" : "bg-border"
                                    }`}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
