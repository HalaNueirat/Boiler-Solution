import React, {useEffect, useState} from "react";
import Products from "../components/Products/Products";
import type {ICategoryFE, IProductFE} from "../models/products.model";
import {ProductService} from "../services/products.service";
import {toast} from "react-toastify";

const ProductsPage: React.FC = () => {
  const [categories, setCategories] = useState<ICategoryFE[]>([]);
  const [products, setProducts] = useState<IProductFE[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let cancelled = false;

    const fetchAll = async () => {
      setLoading(true);
      try {
        const [cats, prods] = await Promise.all([
          ProductService.getCategories(),
          ProductService.getProducts(),
        ]);
        if (!cancelled) {
          setCategories(cats ?? []);
          setProducts(prods ?? []);
        }
      } catch (err) {
        if (!cancelled) {
          toast.error(
            "Error fetching data: " +
              (err instanceof Error ? err.message : String(err))
          );
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchAll();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading-div">Loading…</div>
      ) : (
        <Products categories={categories} products={products} />
      )}
    </>
  );
};

export default ProductsPage;
