interface InputBoxProps {
  placeholder?: string;
  label?: string;
  type?: string;
  value?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  extraClasses?: string;
  disabled?: boolean;
  required?: boolean;
}

const InputBox = ({
  placeholder,
  label,
  name,
  type,
  value,
  onChange,
  extraClasses,
  disabled,
  required,
}: InputBoxProps) => {
  return (
    <div className={`relative mt-8 ${extraClasses}`}>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="placeholder:text-[#919191] w-full px-[10px] rounded-[6px] border border-[#CBCBCB] h-[50px]  focus:outline-none focus:border-[#000B6B] transition-colors"
        required={required}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
      <label className="absolute text-[#000B6B] bg-white text-[13px] top-0 left-[10px] transform -translate-y-1/2 px-[5px]">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
    </div>
  );
};

export default InputBox;
