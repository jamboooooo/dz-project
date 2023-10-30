import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";

const CardButtons = () => {
  return (
    <div className="flex justify-between pt-5">
      <Button title="Купить" variant="primary" onClick={() => {}} />
      <button className="w-max">
        <FontAwesomeIcon color="rgb(2 132 199)" icon={faCartShopping} />
      </button>
    </div>
  );
};

export default CardButtons;
