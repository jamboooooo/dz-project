const Paper = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <div
      className={`bg-white-500 border-2 w-max h-max mx-auto p-3 rounded-2xl`}
    >
      {children}
    </div>
  );
};

export default Paper;
