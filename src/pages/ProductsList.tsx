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
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { capitalizeFirstLetter } from "@app/shared/utils/capitalizeFirstLetter";

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
        <div className="relative inline">
          <select
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground 
            appearance-none h-10 px-4 py-2 pr-8 ml-auto"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All categories</option>
            {categories.map((ctg) => (
              <option key={ctg} value={ctg}>
                {capitalizeFirstLetter(ctg)}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute top-0 bottom-0 right-2 flex align-middle">
            <KeyboardArrowDownOutlinedIcon />
          </div>
        </div>
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
