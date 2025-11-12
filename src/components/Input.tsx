interface InputProps {
  type?: string;
  name?: string;
  placeholder?: string;
  classes?: string;
  label?: string;
  disableP?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  let label;
  if (props.label) {
    label = <label className="block pb-2 text-[18px]">{props.label}</label>;
  }

  let padding;
  if (!props.disableP) {
    padding = "pb-5";
  }

  return (
    <div className={padding}>
      {label}
      <input
        className={`w-full inline-block h-[54px] bg-[#F4F4F5] !text-slate-900 px-2 ${props.classes}`}
        type={props.type ?? "text"}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
