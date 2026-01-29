import { NEWS, ARTICLES, BLOGS } from "@/data/content";

export function getBySlug(collection, slug) {
  return collection.find((x) => x.slug === slug) || null;
}

export function getAllSlugs(collection) {
  return collection.map((x) => ({ slug: x.slug }));
}

export function getFilteredNews(tag) {
  if (!tag) return NEWS;
  return NEWS.filter((n) => (n.tags || []).includes(tag));
}

export { NEWS, ARTICLES, BLOGS };
