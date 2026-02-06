"use client"

import { useState, useRef, useEffect } from "react"
import { X, Send, Loader2, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { CHATBOT_CONFIG, type ChatMessage } from "@/lib/chatbot-config"
import { Message } from "./message"

interface ChatInterfaceProps {
    onClose: () => void
}

export function ChatInterface({ onClose }: ChatInterfaceProps) {
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            role: "assistant",
            content: CHATBOT_CONFIG.welcomeMessage,
            timestamp: Date.now(),
        },
    ])
    const [input, setInput] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const scrollRef = useRef<HTMLDivElement>(null)

    // Auto-scroll to bottom
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [messages])

    const sendMessage = async (messageText?: string) => {
        const textToSend = messageText || input.trim()
        if (!textToSend || isLoading) return

        // Add user message
        const userMessage: ChatMessage = {
            role: "user",
            content: textToSend,
            timestamp: Date.now(),
        }
        setMessages((prev) => [...prev, userMessage])
        setInput("")
        setIsLoading(true)

        try {
            // Call API
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: [...messages, userMessage].map((m) => ({
                        role: m.role,
                        content: m.content,
                    })),
                }),
            })

            if (!response.ok) throw new Error("API request failed")

            // Handle streaming response
            const reader = response.body?.getReader()
            const decoder = new TextDecoder()
            let assistantMessage = ""

            // Add placeholder for assistant  message
            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: "", timestamp: Date.now() },
            ])

            while (reader) {
                const { done, value } = await reader.read()
                if (done) break

                const chunk = decoder.decode(value)
                assistantMessage += chunk

                // Update the last message (assistant's response)
                setMessages((prev) => {
                    const newMessages = [...prev]
                    newMessages[newMessages.length - 1].content = assistantMessage
                    return newMessages
                })
            }
        } catch (error) {
            console.error("Chat error:", error)
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: CHATBOT_CONFIG.errorMessages.generic,
                    timestamp: Date.now(),
                },
            ])
        } finally {
            setIsLoading(false)
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        sendMessage()
    }

    const showSuggestions = messages.length === 1 // Only show on first message

    return (
        <Card className="fixed bottom-6 right-6 z-50 flex h-[600px] w-[380px] flex-col overflow-hidden shadow-2xl md:w-[420px]">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border bg-gradient-to-r from-primary/10 to-primary/5 p-4">
                <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary p-2">
                        <Bot className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-foreground">Assistant IA</h3>
                        <p className="text-xs text-muted-foreground">TimeTravel Agency</p>
                    </div>
                </div>
                <Button variant="ghost" size="icon" onClick={onClose}>
                    <X className="h-5 w-5" />
                </Button>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4" ref={scrollRef}>
                <div className="space-y-4">
                    {messages.map((message, index) => (
                        <Message key={index} message={message} />
                    ))}
                    {isLoading && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <Loader2 className="h-4 w-4 animate-spin" />
                            <span className="text-sm">L'assistant réfléchit...</span>
                        </div>
                    )}
                </div>
            </ScrollArea>

            {/* Suggested Questions */}
            {showSuggestions && (
                <div className="border-t border-border bg-secondary/20 p-3">
                    <p className="mb-2 text-xs font-medium text-muted-foreground">Questions suggérées:</p>
                    <div className="flex flex-wrap gap-2">
                        {CHATBOT_CONFIG.suggestedQuestions.slice(0, 3).map((question, index) => (
                            <button
                                key={index}
                                onClick={() => sendMessage(question)}
                                className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground transition-colors hover:bg-secondary/80"
                                disabled={isLoading}
                            >
                                {question}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Input */}
            <div className="border-t border-border p-4">
                <form onSubmit={handleSubmit} className="flex gap-2">
                    <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Tapez votre message..."
                        disabled={isLoading}
                        maxLength={500}
                        className="flex-1"
                    />
                    <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                        <Send className="h-4 w-4" />
                    </Button>
                </form>
            </div>
        </Card>
    )
}
