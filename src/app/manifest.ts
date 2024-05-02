import { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tripusers.com",
    short_name: "Trip users",
    start_url: "/",
    icons: [
      {
        src: "favicon.ico",
        type: "image/x-icon",
        purpose: "badge",
        sizes: "any",
      },
    ],
  };
}
