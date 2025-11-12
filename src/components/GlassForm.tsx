type GlassForm = React.PropsWithChildren<{ classes?: string }>;

const GlassForm: React.FC<GlassForm> = ({ children, classes }) => {
  return (
    <div
      className={`rounded-lg bg-white/25 backdrop-blur-md gap-8 shadow-[2px_4px_10px_5px_rgba(0,0,0,.25)] text-white ${classes}`}
    >
      {children}
    </div>
  );
};

export default GlassForm;
