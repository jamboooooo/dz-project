import Paper from "../Paper/Paper";
import CardButtons from "./CardButtons";
import { CardTypes } from "./types";
import CardDescription from "./CardDescription";

const Card = ({ pic, cost, description }: CardTypes) => {
  return (
    <Paper>
      <div className="w-44">
        <div className="p-4">
          <img width="150px" src={pic} alt="cardpic" />
        </div>
        <CardDescription cost={cost} description={description} />
        <CardButtons />
      </div>
    </Paper>
  );
};

export default Card;
