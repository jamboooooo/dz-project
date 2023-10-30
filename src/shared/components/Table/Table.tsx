import { Children, ReactNode } from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import TableCell from "./TableCell";
import TableBody from "./TableBody";

const Table = ({
  children,
}: {
  children: JSX.Element | JSX.Element[] | ReactNode[];
}) => {
  const arrayChildren = Children.toArray(children);

  return (
    <table className="min-w-full text-center text-sm font-light table-fixed">
      {arrayChildren}
    </table>
  );
};

Table.Head = TableHead;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;

export default Table;
