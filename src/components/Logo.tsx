type Logo = React.Component<{ position?: string }>;

const Logo = ({ position }) => {
  return (
    <img
      src="/images/PoTION_logo.svg"
      alt="potion logo"
      style={{
        position: "absolute",
        top: "53px",
        left: position === "left" ? "60px" : "",
        right: position === "right" ? "63px" : "",
      }}
    />
  );
};

export default Logo;
