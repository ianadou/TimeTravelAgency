interface PageHeroProps {
    title: string
    subtitle?: string
    backgroundImage?: string
    backgroundVideo?: string
    overlay?: boolean
}

export function PageHero({
    title,
    subtitle,
    backgroundImage,
    backgroundVideo,
    overlay = true,
}: PageHeroProps) {
    return (
        <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden md:min-h-[60vh]">
            {/* Background */}
            <div className="absolute inset-0">
                {backgroundVideo ? (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover"
                    >
                        <source src={backgroundVideo} type="video/mp4" />
                    </video>
                ) : (
                    <img
                        src={backgroundImage || "/placeholder.svg"}
                        alt=""
                        className="h-full w-full object-cover"
                    />
                )}
                {overlay && <div className="absolute inset-0 bg-background/70" />}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
                <h1 className="animate-fade-in-up font-serif text-4xl leading-tight tracking-tight text-foreground md:text-6xl md:leading-tight">
                    {title}
                </h1>
                {subtitle && (
                    <p className="animate-fade-in-up-delay-1 mt-4 text-lg text-muted-foreground md:text-xl">
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    )
}
