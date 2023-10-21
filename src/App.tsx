import AvatarList from "./AvatarList";
import Card from "./common/Card/Card";
import CategoryCard from "./common/CategoryCard/CategoryCard";
import Paper from "./common/Paper/Paper";
import Photo from "./common/assets/photo.jpg";

const cardData = {
  pic: Photo,
  cost: 23490,
  description: "Magna eu exercitation ex voluptate consectetur.",
};

const categoryData = {
  category: "Аватарка Ахьмада",
  count: 235,
  pic: Photo,
};

// const itemData = {
//   pic: Photo,
//   fullDesc: "Аватарка Ахьмада, прямой источник, качество 4k",
//   source: "Телеграм",
//   downloadCount: 1,
// };

const App = () => {
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
