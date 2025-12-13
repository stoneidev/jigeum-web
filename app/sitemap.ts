import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://jigeum.today',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ]
}
