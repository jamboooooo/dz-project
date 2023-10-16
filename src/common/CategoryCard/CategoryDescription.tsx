import { CategoryCardDescriptionTypes } from "./types";

const CategoryDescription = ({
  category,
  count,
}: CategoryCardDescriptionTypes) => {
  return (
    <div className="text-center">
      <p>{category}</p>
      <span className="font-light">{count} товаров</span>
    </div>
  );
};

export default CategoryDescription;
