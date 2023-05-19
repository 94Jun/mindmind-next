interface SquareButtonprops {
  children: string;
  className?: string;
}

const SquareButton: React.FC<SquareButtonprops> = ({ children, className }) => {
  return <button className={`block px-4 py-2 border border-orange-200 w-32 hover:bg-orange-200 hover:text-black transition ${className}`}>{children}</button>;
};

export default SquareButton;
