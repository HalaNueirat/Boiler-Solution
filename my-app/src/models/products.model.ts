

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