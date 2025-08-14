

export interface ICategoryFE {
  id: number;
  label: string;
  image: string;
}

export interface IProductFE {
  id: number;
  title: string;
  part: string;
  tag: string;
  image: string;
}

export interface IProductBE {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: { rate: number; count: number };
}



const picsum = (seed: string | number, w = 200, h = 200) =>
  `https://picsum.photos/seed/${encodeURIComponent(String(seed))}/${w}/${h}`;

const pad = (n: number, size = 6) => String(n).padStart(size, "0");

export function mapCategoriesToFE(categories: string[]): ICategoryFE[] {
  return categories.map((c, idx) => ({
    id: idx,
    label: c.replace(/\b\w/g, m => m.toUpperCase()),
    image: picsum(`cat-${c}`, 200, 200),
  }));
}

export function mapProductsBEToFE(products: IProductBE[], limit = 8): IProductFE[] {
  const sorted = [...products].sort(
    (a, b) => (b.rating?.rate ?? 0) - (a.rating?.rate ?? 0)
  );
  return sorted.slice(0, limit).map(p => ({
    id: p.id,
    title: p.title.trim().split(/\s+/).slice(0, 4).join(" "),
    part: pad(p.id),                               
    tag: p.rating ? `${p.rating.rate} • ${p.category}` : p.category,
    image: p.image,    
  }));
}
