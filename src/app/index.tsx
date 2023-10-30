import { useEffect } from "react";
import AvatarList from "../widgets/components/AvatarList";
import Card from "../entities/components/Card/Card";
import CategoryCard from "../features/components/CategoryCard/CategoryCard";
import Paper from "../shared/components/Paper/Paper";
import { useAppDispatch } from "../hooks/redux";
import { getAvatarList } from "../store/reducers/AvatarList/actions";

const cardData = {
  pic: "https://i.pinimg.com/originals/b4/5a/69/b45a69298e312ac7049da8be77842aee.jpg",
  cost: 23490,
  description: "Magna eu exercitation ex voluptate consectetur.",
};

const categoryData = {
  category: "Аватарка Ахьмада",
  count: 235,
  pic: "https://i.pinimg.com/originals/b4/5a/69/b45a69298e312ac7049da8be77842aee.jpg",
};

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAvatarList());
  }, [dispatch]);

  return (
    <div className="py-10">
      <div className="flex justify-between">
        <Card
          pic={cardData.pic}
          cost={cardData.cost}
          description={cardData.description}
        />
        <CategoryCard
          pic={categoryData.pic}
          count={categoryData.count}
          category={categoryData.category}
        />
      </div>
      <div className="mt-5">
        <Paper>
          <AvatarList />
        </Paper>
      </div>
    </div>
  );
};

export default App;
