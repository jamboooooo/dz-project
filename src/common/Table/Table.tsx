import React, { Children } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const Table = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const arrayChildren = Children.toArray(children);
  const headTableElems = arrayChildren.filter(
    (el) => React.isValidElement(el) && el.type === TableHead,
  );
  const bodyTableElems = arrayChildren.filter(
    (el) => React.isValidElement(el) && el.type === TableBody,
  );

  return (
    <table className="min-w-full text-center text-sm font-light table-fixed">
      <thead className="border-b font-medium">
        <tr>{headTableElems}</tr>
      </thead>
      <tbody>
        <tr className="border-b hover:bg-neutral-100">{bodyTableElems}</tr>
      </tbody>
    </table>
  );
};

Table.Head = TableHead;
Table.Body = TableBody;

export default Table;
