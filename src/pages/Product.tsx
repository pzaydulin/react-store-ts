import ProductDetails from "@app/components/ProductDetails";
import { useGetProductById } from "@app/data-access/product/hooks/useProducts";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id: productId } = useParams<{ id: string }>();
  const {
    data: product,
    isError,
    isLoading,
  } = useGetProductById(Number(productId));

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading product details.</p>;
  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <>
      <title>{product.title}</title>
      <meta name="description" content={product.description} />
      <meta property="og:title" content={product.title} />
      <meta property="og:description" content={product.description} />
      <meta property="og:image" content={product.image} />

      <ProductDetails {...product} />
    </>
  );
};

export default ProductPage;
