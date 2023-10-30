import { Children } from "react";

const TableHead = ({ children }: { children: JSX.Element }) => {
  const arrayChildren = Children.toArray(children);

  return <thead className="border-b font-medium">{arrayChildren}</thead>;
};

export default TableHead;
