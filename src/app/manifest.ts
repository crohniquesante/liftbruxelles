import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: "Nono Lift",
    description: SITE.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    lang: "fr-BE",
    icons: [
      {
        src: SITE.logo,
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
