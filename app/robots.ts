import type { MetadataRoute } from 'next';
import { ALLOW_INDEXING } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  if (!ALLOW_INDEXING) return { rules: { userAgent: '*', disallow: '/' } };
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: 'https://accelhouse.com/sitemap.xml',
    host: 'https://accelhouse.com'
  };
}
