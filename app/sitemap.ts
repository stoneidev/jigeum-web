import { MetadataRoute } from 'next'
import { products } from './data/products'
import { getAllTipSlugs } from './data/tips'
import { getAllIngredientSlugs } from './data/ingredients'

export default function sitemap(): MetadataRoute.Sitemap {
  const productUrls = products.map((product) => ({
    url: `https://jigeum.today/#product-${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const tipUrls = getAllTipSlugs().map((slug) => ({
    url: `https://jigeum.today/tips/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const ingredientUrls = getAllIngredientSlugs().map((slug) => ({
    url: `https://jigeum.today/ingredients/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  return [
    {
      url: 'https://jigeum.today',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://jigeum.today/#skincare',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://jigeum.today/#makeup',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://jigeum.today/#device',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...tipUrls,
    ...ingredientUrls,
    ...productUrls,
  ]
}
