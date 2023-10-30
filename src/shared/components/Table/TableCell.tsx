const TableCell = ({
  children,
  type,
}: {
  children: string | number | JSX.Element;
  type: "body" | "head";
}) => {
  return type === "body" ? (
    <td className="px-6 py-4 w-40 break-words">{children}</td>
  ) : (
    <th scope="col" className="px-6 py-4 w-40 break-words">
      {children}
    </th>
  );
};

export default TableCell;
