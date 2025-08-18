import { mapCategoriesToFE, mapProductsBEToFE } from "../map/mappers";
import {
  type ICategoryFE,
  type IProductBE,
  type IProductFE,
} from "../models/products.model";

const BASE = import.meta.env.VITE_FAKE_STORE_BASE_URL as string;
const INDEX = `${BASE}/products/categories`;
const INDEX2 = `${BASE}/products`;

export class ProductService {
  static async getCategories(): Promise<ICategoryFE[] | null> {
    try {
      const res = await fetch(`${INDEX}`, {
        credentials: "omit",
      });
      if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
      const data = (await res.json()) as string[];
      return mapCategoriesToFE(data);
    } catch (err) {
      console.error("getCategories failed:", err);
      return null;
    }
  }

  static async getProducts(limit = 8): Promise<IProductFE[] | null> {
    try {
      const res = await fetch(`${INDEX2}`, {credentials: "omit"});
      if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
      const data = (await res.json()) as IProductBE[];
      return mapProductsBEToFE(data, limit);
    } catch (err) {
      console.error("getProducts failed:", err);
      return null;
    }
  }
}
