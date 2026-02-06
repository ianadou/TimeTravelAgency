"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ChatInterface } from "./chat-interface"

export function ChatButton() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {/* Floating Chat Button */}
            {!isOpen && (
                <Button
                    onClick={() => setIsOpen(true)}
                    size="lg"
                    className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-primary shadow-lg transition-transform hover:scale-110 hover:bg-primary/90 md:h-16 md:w-16"
                    aria-label="Open chat"
                >
                    <MessageCircle className="h-6 w-6 md:h-7 md:w-7" />
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/75 opacity-75"></span>
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-primary"></span>
                    </span>
                </Button>
            )}

            {/* Chat Interface */}
            {isOpen && <ChatInterface onClose={() => setIsOpen(false)} />}
        </>
    )
}
