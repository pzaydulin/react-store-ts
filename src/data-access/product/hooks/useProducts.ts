import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiProduct } from "@app/data-access/product/apiProduct";

export function useProducts() {
  const queryClient = useQueryClient();

  const productsQuery = useQuery({
    queryKey: ["products"],
    queryFn: apiProduct.getAll,
  });

  const getProduct = useMutation({
    mutationFn: apiProduct.getById,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["products"] }),
  });

  const createProduct = useMutation({
    mutationFn: apiProduct.create,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["products"] }),
  });

  const deleteProduct = useMutation({
    mutationFn: apiProduct.remove,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["products"] }),
  });

  return {
    productsQuery,
    getProduct,
    createProduct,
    deleteProduct,
  };
}
