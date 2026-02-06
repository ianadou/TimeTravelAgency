import { NextRequest } from "next/server"
import Groq from "groq-sdk"
import { CHATBOT_CONFIG } from "@/lib/chatbot-config"

// Initialize Groq client
const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
})

export async function POST(req: NextRequest) {
    try {
        const { messages } = await req.json()

        if (!process.env.GROQ_API_KEY) {
            return new Response(
                JSON.stringify({ error: "API key not configured" }),
                { status: 500, headers: { "Content-Type": "application/json" } }
            )
        }

        // Create chat completion with streaming
        const completion = await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile", // Updated: llama3-8b-8192 decommissioned
            messages: [
                {
                    role: "system",
                    content: CHATBOT_CONFIG.systemPrompt,
                },
                ...messages,
            ],
            temperature: 0.7,
            max_tokens: 500,
            stream: true,
        })

        // Create a readable stream
        const encoder = new TextEncoder()
        const stream = new ReadableStream({
            async start(controller) {
                try {
                    for await (const chunk of completion) {
                        const content = chunk.choices[0]?.delta?.content
                        if (content) {
                            controller.enqueue(encoder.encode(content))
                        }
                    }
                    controller.close()
                } catch (error) {
                    controller.error(error)
                }
            },
        })

        return new Response(stream, {
            headers: {
                "Content-Type": "text/plain; charset=utf-8",
                "Transfer-Encoding": "chunked",
            },
        })
    } catch (error) {
        console.error("Chat API error:", error)
        return new Response(
            JSON.stringify({ error: "Failed to process chat request" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        )
    }
}
