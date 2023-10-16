import Paper from "../Paper/Paper";
import { CategoryCardTypes } from "./types";
import CategoryDescription from "./CategoryDescription";

const CategoryCard = ({ pic, category, count }: CategoryCardTypes) => {
  return (
    <Paper>
      <div className="p-1">
        <img width="180px" src={pic} alt="cardpic" />
      </div>
      <CategoryDescription category={category} count={count} />
    </Paper>
  );
};

export default CategoryCard;
