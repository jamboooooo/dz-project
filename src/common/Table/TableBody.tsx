import { Children } from "react";

const TableBody = ({
  children,
}: {
  children: string | number | JSX.Element | JSX.Element[];
}) => {
  const arrayChildren = Children.toArray(children);
  return (
    <tbody>
      {arrayChildren}
      {/* <tr className="border-b hover:bg-neutral-100">{arrayChildren}</tr> */}
    </tbody>
  );
};

export default TableBody;
