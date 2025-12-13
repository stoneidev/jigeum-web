import { products } from '../data/products';

export default function JsonLd() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Jigeum',
    alternateName: '지금',
    url: 'https://jigeum.today',
    description: 'The K-Beauty Magazine - Discover trending Korean skincare and makeup products',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://jigeum.today/?search={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Jigeum',
    url: 'https://jigeum.today',
    logo: 'https://jigeum.today/icon.svg',
    sameAs: [
      'https://www.instagram.com/explore/tags/kbeauty/',
      'https://www.tiktok.com/tag/kbeauty',
    ],
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best K-Beauty Products December 2025',
    description: 'Curated list of trending Korean skincare and makeup products',
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.name,
        brand: {
          '@type': 'Brand',
          name: product.brand,
        },
        description: product.description,
        image: product.image,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: product.rating,
          bestRating: 5,
          worstRating: 1,
          reviewCount: product.reviews.replace(/[^0-9]/g, '') || '1000',
        },
        offers: {
          '@type': 'Offer',
          price: product.price.replace(/[^0-9.]/g, ''),
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: product.shopUrl,
        },
      },
    })),
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best K-Beauty Products & Korean Skincare Trends December 2025',
    description: 'Discover the hottest K-Beauty trends and top-rated Korean skincare products including COSRX Snail Mucin, Beauty of Joseon, Anua, and more.',
    image: 'https://jigeum.today/opengraph-image',
    datePublished: '2025-12-01T00:00:00+09:00',
    dateModified: new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: 'Jigeum',
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
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://jigeum.today',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}
