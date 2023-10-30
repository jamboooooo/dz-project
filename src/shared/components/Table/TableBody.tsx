import { Children } from "react";

const TableBody = ({
  children,
}: {
  children: string | number | JSX.Element | JSX.Element[];
}) => {
  const arrayChildren = Children.toArray(children);
  return <tbody>{arrayChildren}</tbody>;
};

export default TableBody;
