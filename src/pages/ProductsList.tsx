import React, { useState } from "react";
import Product from "@app/components/Product";
import ModalDialog from "@app/shared/components/ModalDialog";
import ProductDetails from "@app/components/ProductDetails";
import { IProduct } from "@app/core/models/product";
import { useProducts } from "@app/data-access/product/hooks/useProducts";

export default function ProductsListPage() {
  const { productsQuery } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  const [open, setOpen] = useState(false);

  const handleOpenModal = (product: IProduct) => {
    setSelectedProduct(product);
  };
  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  if (productsQuery.isLoading) return <p>Loading...</p>;
  if (productsQuery.isError) return <p>Error: {productsQuery.error.message}</p>;

  return (
    <>
      <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
        {productsQuery.data &&
          productsQuery.data.map((product) => (
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
