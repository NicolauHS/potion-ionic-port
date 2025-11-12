type Button = React.PropsWithChildren<{
  classes?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
}>;

const Button: React.FC<Button> = ({
  type,
  onClick,
  children,
  classes,
  style,
}) => {
  return (
    <button
      type={type ?? "button"}
      onClick={onClick}
      style={style}
      className={`min-h-12 cursor-pointer flex items-center justify-center transition-all duration-300 ease-in-out ${classes}`}
    >
      {children}
    </button>
  );
};

export default Button;
