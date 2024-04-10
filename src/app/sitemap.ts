import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.tripusers.com/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.tripusers.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    {
      url: "https://www.tripusers.com/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
  ];
}
