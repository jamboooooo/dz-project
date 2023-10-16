import { CardDescriptionTypes } from "./types";

const CardDescription = ({ cost, description }: CardDescriptionTypes) => {
  return (
    <div className="pt-5">
      <h1 className="text-blue-600 font-bold text-2xl mb-2">{cost} руб.</h1>
      <p>{description}</p>
    </div>
  );
};

export default CardDescription;
