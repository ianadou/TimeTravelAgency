import { type ChatMessage } from "@/lib/chatbot-config"
import { Bot, User } from "lucide-react"

interface MessageProps {
    message: ChatMessage
}

export function Message({ message }: MessageProps) {
    const isUser = message.role === "user"

    return (
        <div className={`flex gap-3 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
            {/* Avatar */}
            <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${isUser ? "bg-primary" : "bg-secondary"
                    }`}
            >
                {isUser ? (
                    <User className="h-4 w-4 text-primary-foreground" />
                ) : (
                    <Bot className="h-4 w-4 text-secondary-foreground" />
                )}
            </div>

            {/* Message Content */}
            <div
                className={`max-w-[75%] rounded-lg px-4 py-2 ${isUser
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
            >
                <p className="whitespace-pre-wrap text-sm">{message.content}</p>
            </div>
        </div>
    )
}
