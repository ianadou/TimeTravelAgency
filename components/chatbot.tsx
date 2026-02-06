"use client"

import { useState } from "react"
import { MessageCircle, Send, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: "assistant" as const,
      text: "Bonjour ! Quelle epoque vous fait rever aujourd'hui ?",
    },
  ])
  const [input, setInput] = useState("")

  function handleSend() {
    if (!input.trim()) return
    setMessages((prev) => [...prev, { role: "user" as const, text: input }])
    setInput("")

    // Simulated bot reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant" as const,
          text: "Excellent choix ! Nos conseillers temporels vous contacteront sous peu pour organiser votre voyage.",
        },
      ])
    }, 1000)
  }

  return (
    <div className="fixed right-6 bottom-6 z-50">
      {/* Chat window */}
      {open && (
        <Card className="mb-4 w-80 border-border bg-card shadow-2xl md:w-96">
          <CardHeader className="flex flex-row items-center justify-between border-b border-border pb-3">
            <CardTitle className="font-serif text-lg text-primary">
              Chronos Assistant
            </CardTitle>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </CardHeader>
          <CardContent className="p-0">
            {/* Messages */}
            <div className="flex h-72 flex-col gap-3 overflow-y-auto p-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                    msg.role === "assistant"
                      ? "self-start bg-secondary text-secondary-foreground"
                      : "self-end bg-primary text-primary-foreground"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 border-t border-border p-3">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ecrivez votre message..."
                className="border-border bg-secondary text-foreground placeholder:text-muted-foreground"
              />
              <Button
                size="icon"
                onClick={handleSend}
                className="shrink-0 bg-primary text-primary-foreground hover:bg-primary/90"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Floating button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-110"
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>
    </div>
  )
}
