const TableBody = ({
  children,
}: {
  children: string | number | JSX.Element;
}) => {
  return <td className="px-6 py-4 w-40 break-words">{children}</td>;
};

export default TableBody;
