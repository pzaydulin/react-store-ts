import React, { useState } from "react";
import Product from "@app/components/Product";
import ModalDialog from "@app/shared/components/ModalDialog";
import ProductDetails from "@app/components/ProductDetails";
import { IProduct } from "@app/core/models/product";
import {
  useProducts,
  useProductsByCategory,
} from "@app/data-access/product/hooks/useProducts";
import { useAuth } from "@app/core/contexts/AuthContext";

export default function ProductsListPage() {
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const { categories } = useAuth();
  const [open, setOpen] = useState(false);

  const {
    data: products,
    isLoading,
    isError,
    error,
  } = selectedCategory
    ? useProductsByCategory(selectedCategory)
    : useProducts();

  const handleOpenModal = (product: IProduct) => {
    setSelectedProduct(product);
  };
  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <>
      {categories && (
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All</option>
          {categories.map((ctg) => (
            <option key={ctg} value={ctg}>
              {ctg}
            </option>
          ))}
        </select>
      )}
      <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
        {products &&
          products.map((product) => (
            <Product
              key={product.id}
              {...product}
              onDetailsClick={() => {
                handleOpenModal(product);
                setOpen(true);
              }}
            />
          ))}
      </div>
      {selectedProduct && (
        <ModalDialog open={open} onOpenChange={setOpen} iconClose={true}>
          <ProductDetails {...selectedProduct} />
        </ModalDialog>
      )}
    </>
  );
}
