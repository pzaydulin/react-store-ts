import React from "react";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import { NavLink } from "react-router-dom";
import { capitalizeFirstLetter } from "@app/shared/utils/capitalizeFirstLetter";
import { categoryIcons } from "@app/core/constants/categories";

interface CategoryCardProps {
  category: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const IconCtg = categoryIcons[category] ?? DesktopWindowsOutlinedIcon;
  return (
    <div className="w-full">
      <div className="flex flex-row h-full gap-4 rounded-lg border border-border bg-secondary/30 p-6 shadow-sm">
        <div className="w-20 shrink-0">
          <IconCtg
            className="text-primary bg-background rounded-md p-3"
            sx={{ fontSize: 64 }}
          />
        </div>
        <div className="flex-1">
          <div className="leading-7 hover:underline underline-offset-4 text-2xl font-semibold text-primary">
            <NavLink to={`/products/category/${category}`}>
              {capitalizeFirstLetter(category)}
            </NavLink>
          </div>
          <p className="mt-2 font-[300] text-muted-foreground break-words">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
            deserunt odit culpa, dolore earum perspiciatis!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;

// <NavLink to="/">
