import type {ICategoryFE, IProductFE} from "../models/products.model";

export interface ICategoryCardProps {
  Category: ICategoryFE;
}

export interface IProductCardProps {
  product: IProductFE;
}

export interface IProductsProps {
  categories: ICategoryFE[];
  products: IProductFE[];
}
