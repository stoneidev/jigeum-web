import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import TipPageContent from './TipPageContent';
import { getTipBySlug, getAllTipSlugs, beautyTips } from '../../data/tips';
import { products } from '../../data/products';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllTipSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tip = getTipBySlug(slug);

  if (!tip) {
    return {
      title: 'Tip Not Found | Jigeum',
    };
  }

  return {
    title: `${tip.title} | K-Beauty Tips | Jigeum`,
    description: tip.description,
    keywords: [tip.title, 'K-Beauty', 'Korean skincare', 'skincare tips', ...tip.skinTypes],
    openGraph: {
      title: `${tip.title} | Jigeum`,
      description: tip.description,
      url: `https://jigeum.today/tips/${tip.slug}`,
      siteName: 'Jigeum',
      images: [
        {
          url: tip.heroImage,
          width: 1200,
          height: 630,
          alt: tip.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${tip.title} | Jigeum`,
      description: tip.description,
      images: [tip.heroImage],
    },
  };
}

export default async function TipPage({ params }: PageProps) {
  const { slug } = await params;
  const tip = getTipBySlug(slug);

  if (!tip) {
    notFound();
  }

  const recommendedProducts = products.filter((p) =>
    tip.recommendedProducts.includes(p.id)
  );

  // JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: tip.title,
    description: tip.description,
    image: tip.heroImage,
    totalTime: tip.readTime,
    step: tip.steps.map((step) => ({
      '@type': 'HowToStep',
      name: step.title,
      text: step.description,
      position: step.step,
    })),
    tool: tip.skinTypes.map((type) => ({
      '@type': 'HowToTool',
      name: `${type} Skin`,
    })),
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: tip.title,
    description: tip.description,
    image: tip.heroImage,
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
      '@id': `https://jigeum.today/tips/${tip.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <TipPageContent tip={tip} recommendedProducts={recommendedProducts} />
    </>
  );
}
