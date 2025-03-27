
import React from "react";

interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
}

interface CategorySidebarProps {
  categories: Category[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  title: string;
}

const CategorySidebar = ({
  categories,
  activeCategory,
  setActiveCategory,
  title,
}: CategorySidebarProps) => {
  return (
    <div className="w-full md:w-64 flex-shrink-0">
      <div className="bg-muted rounded-lg p-4">
        <h3 className="text-lg font-medium mb-4">{title}</h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.id}>
              <button
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center w-full p-2 rounded-md text-sm ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted-foreground/10"
                }`}
              >
                <category.icon className="h-4 w-4 mr-2" />
                <span>{category.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategorySidebar;
