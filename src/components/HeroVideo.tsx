import { SITE } from "@/lib/site";

export function HeroVideo() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-premium">
      <video
        className="h-full w-full scale-[1.06] object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={SITE.heroVideoPoster}
        aria-label="Vidéo — location lift et monte-meuble professionnel à Bruxelles"
      >
        <source src={SITE.heroVideo} type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-950/40 via-transparent to-transparent" />
    </div>
  );
}
