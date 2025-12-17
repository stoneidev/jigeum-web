import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import IngredientPageContent from './IngredientPageContent';
import { getIngredientBySlug, getAllIngredientSlugs } from '../../data/ingredients';
import { products } from '../../data/products';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllIngredientSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const ingredient = getIngredientBySlug(slug);

  if (!ingredient) {
    return {
      title: 'Ingredient Not Found | Jigeum',
    };
  }

  return {
    title: `${ingredient.name} | K-Beauty Ingredients | Jigeum`,
    description: ingredient.description,
    keywords: [ingredient.name, ingredient.koreanName, 'K-Beauty', 'Korean skincare', 'skincare ingredients', ingredient.category],
    openGraph: {
      title: `${ingredient.name} - ${ingredient.subtitle} | Jigeum`,
      description: ingredient.description,
      url: `https://jigeum.today/ingredients/${ingredient.slug}`,
      siteName: 'Jigeum',
      images: [
        {
          url: ingredient.heroImage,
          width: 1200,
          height: 630,
          alt: ingredient.name,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${ingredient.name} | Jigeum`,
      description: ingredient.description,
      images: [ingredient.heroImage],
    },
  };
}

export default async function IngredientPage({ params }: PageProps) {
  const { slug } = await params;
  const ingredient = getIngredientBySlug(slug);

  if (!ingredient) {
    notFound();
  }

  const recommendedProducts = products.filter((p) =>
    ingredient.recommendedProducts.includes(p.id)
  );

  // JSON-LD Structured Data - Article
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${ingredient.name}: ${ingredient.subtitle}`,
    description: ingredient.description,
    image: ingredient.heroImage,
    author: {
      '@type': 'Organization',
      name: 'Jigeum Magazine',
      url: 'https://jigeum.today',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Jigeum',
      logo: {
        '@type': 'ImageObject',
        url: 'https://jigeum.today/icon.svg',
      },
    },
    datePublished: '2025-12-01',
    dateModified: '2025-12-17',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://jigeum.today/ingredients/${ingredient.slug}`,
    },
    about: {
      '@type': 'Thing',
      name: ingredient.name,
      description: ingredient.description,
    },
  };

  // JSON-LD for Product mentions
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Products containing ${ingredient.name}`,
    itemListElement: recommendedProducts.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.name,
        brand: {
          '@type': 'Brand',
          name: product.brand,
        },
        image: product.image,
        offers: {
          '@type': 'Offer',
          price: product.price.replace('$', ''),
          priceCurrency: 'USD',
          url: product.shopUrl,
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <IngredientPageContent ingredient={ingredient} recommendedProducts={recommendedProducts} />
    </>
  );
}
