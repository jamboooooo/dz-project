import { Children, ReactNode } from "react";

const TableRow = ({
  children,
  type,
}: {
  children: JSX.Element | ReactNode;
  type: "head" | "body";
}) => {
  const arrayChildren = Children.toArray(children);

  return type === "body" ? (
    <tr className="border-b hover:bg-neutral-100">{arrayChildren}</tr>
  ) : (
    <tr>{arrayChildren}</tr>
  );
};

export default TableRow;
