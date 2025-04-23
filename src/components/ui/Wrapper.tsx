const Wrapper = ({
  children,
  widthPx,
}: {
  children: React.ReactNode;
  widthPx: number;
}) => {
  return (
    <div className={`flex flex-col w-[${widthPx}px] px-5 pt-7 mx-auto`}>
      {children}
    </div>
  );
};

export default Wrapper;
