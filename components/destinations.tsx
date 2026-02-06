"use client"

import { Badge } from "@/components/ui/badge"

const destinations = [
  {
    title: "Paris 1889",
    label: "Belle Epoque",
    price: "5 000\u00A0\u20AC",
    badge: "Best Seller",
    image: "/images/paris-1889.jpg",
    description:
      "Vivez l'inauguration de la Tour Eiffel et l'effervescence de l'Exposition Universelle.",
  },
  {
    title: "Cretace Superieur",
    label: "-65M Annees",
    price: "8 500\u00A0\u20AC",
    badge: "Wild Luxury",
    image: "/images/cretaceous.jpg",
    description:
      "Observez les derniers dinosaures dans leur habitat naturel, sous escorte blindee.",
  },
  {
    title: "Florence 1504",
    label: "Renaissance",
    price: "6 200\u00A0\u20AC",
    badge: "Art & Culture",
    image: "/images/florence-1504.jpg",
    description:
      "Assistez a la creation du David de Michel-Ange et flinez dans les ateliers de Leonard.",
  },
]

export function Destinations() {
  return (
    <section id="destinations" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Voyagez dans le temps
          </p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight text-foreground md:text-5xl">
            Nos Epoques Exclusives
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {destinations.map((dest) => (
            <div
              key={dest.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card transition-transform duration-500 hover:scale-[1.03]"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={dest.image || "/placeholder.svg"}
                  alt={`${dest.title} - ${dest.label}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                {/* Badge */}
                <Badge className="absolute top-4 right-4 border-none bg-primary text-primary-foreground">
                  {dest.badge}
                </Badge>

                {/* Content over image */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs font-medium uppercase tracking-widest text-primary">
                    {dest.label}
                  </p>
                  <h3 className="mt-1 font-serif text-2xl text-foreground">
                    {dest.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {dest.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-serif text-xl text-primary">
                      {dest.price}
                    </span>
                    <button
                      type="button"
                      className="translate-y-2 rounded-lg bg-primary px-5 py-2 text-sm font-medium text-primary-foreground opacity-0 transition-all duration-300 hover:bg-primary/90 group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      Reserver
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
