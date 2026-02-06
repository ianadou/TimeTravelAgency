export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop"
          className="h-full w-full object-cover"
        >
          <source src="/videos/hero-teaser.mp4" type="video/mp4" />
          {/* Fallback image si la vidéo ne charge pas */}
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop"
            alt="Journey through time"
            className="h-full w-full object-cover"
          />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/70" />
        {/* Gradient fade at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="animate-fade-in-up font-serif text-5xl leading-tight tracking-tight text-foreground md:text-7xl md:leading-tight">
          Le temps est votre{" "}
          <span className="text-primary">destination</span>
        </h1>
        <p className="animate-fade-in-up-delay-1 mt-6 font-serif text-lg tracking-widest text-muted-foreground md:text-xl">
          Paris 1889 &middot; Cretace &middot; Florence 1504
        </p>
        <div className="animate-fade-in-up-delay-2 mt-10">
          <a
            href="#destinations"
            className="inline-flex items-center rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Explorer nos epoques
          </a>
        </div>
      </div>
    </section>
  )
}
