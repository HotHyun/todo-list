interface InputFieldProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = (props) => {
  const { placeholder, value, onChange } = props;

  return (
    <input
      className="rounded-[8px] p-4 w-full bg-gray-500 border border-gray-400 hover:border-purple focus:outline-none text-gray-100 font-[Inter] font-normal text-[14px] placeholder-gray-300 focus:outline focus:border-purple-dark focus:ring-0"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputField;
