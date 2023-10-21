const TableHead = ({ children }: { children: string }) => {
  return (
    <th scope="col" className="px-6 py-4 w-40 break-words">
      {children}
    </th>
  );
};

export default TableHead;
