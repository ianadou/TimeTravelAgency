import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Destinations } from "@/components/destinations"
import { Chatbot } from "@/components/chatbot"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Destinations />
      <Footer />
      <Chatbot />
    </main>
  )
}
