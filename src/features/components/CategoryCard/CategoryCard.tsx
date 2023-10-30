import Paper from "../../../shared/components/Paper/Paper";
import { CategoryCardTypes } from "../../types/CategoryCardTypes/types";
import CategoryDescription from "../../../entities/components/CategotyCardDescription/CategoryDescription";

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
