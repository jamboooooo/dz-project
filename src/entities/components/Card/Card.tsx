import Paper from "../../../shared/components/Paper/Paper";
import CardButtons from "../../../shared/components/CardButtons/CardButtons";
import { CardTypes } from "../../types/CardTypes/types";
import CardDescription from "../../../shared/components/CardDescription/CardDescription";

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
