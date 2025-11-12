type Button = React.PropsWithChildren<{
  classes?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}>;

const Button: React.FC<Button> = ({ type, onClick, children, classes }) => {
  return (
    <button
      type={type ?? "button"}
      onClick={onClick}
      className={`min-h-12 cursor-pointer flex items-center justify-center transition-all duration-300 ease-in-out ${classes}`}
    >
      {children}
    </button>
  );
};

export default Button;
