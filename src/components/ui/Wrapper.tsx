const Wrapper = ({
  children,
  widthPx,
}: {
  children: React.ReactNode;
  widthPx: number;
}) => {
  return (
    <div
      className="flex flex-col px-5 pt-7 mx-auto"
      style={{ width: `${widthPx}px` }}
    >
      {children}
    </div>
  );
};

export default Wrapper;
