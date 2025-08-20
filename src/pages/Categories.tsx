import React from "react";
import CategoryCard from "@app/components/Category";
import { useAuth } from "@app/core/contexts/AuthContext";
import { useDocumentTitle } from "@app/shared/hooks/useDocumentTitle";

const CategoriesPage: React.FC = () => {
  const { categories } = useAuth();
  useDocumentTitle("Categories");
  return (
    <>
      {/* <h1 className="text-2xl mb-6 font-semibold leading-none tracking-tight">
        Categories
      </h1> */}
      <div className="grid mt-4 px-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories &&
          categories.map((ctg) => <CategoryCard key={ctg} category={ctg} />)}
      </div>
    </>
  );
};

export default CategoriesPage;
