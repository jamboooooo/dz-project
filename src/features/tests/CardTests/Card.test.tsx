import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Card from "../../components/Card/Card";

const props = {
  pic: "picture",
  cost: 12499,
  description: "Some description",
};

const getRegExp = (props: string | number) => new RegExp(props.toString(), "i");

describe("Card tests", () => {
  test("Card render test", () => {
    render(
      <Card
        pic={props.pic}
        cost={props.cost}
        description={props.description}
      />,
    );

    const getDescription = screen.getByText(getRegExp(props.description));
    const getPrice = screen.getByText(getRegExp(props.cost));
    const getImage = screen.getByAltText("cardpic");
    [getDescription, getPrice, getImage].forEach((item) =>
      expect(item).toBeInTheDocument(),
    );
    expect(getImage).toHaveAttribute("src", props.pic);
  });
});
