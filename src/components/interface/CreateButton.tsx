import Plus from "../../../public/assets/plus.png";
import Image from "next/image";

interface CreateButtonProps {
  onClick: () => void;
}

const CreateButton: React.FC<CreateButtonProps> = (props) => {
  const { onClick } = props;

  return (
    <div
      className="rounded-[8px] bg-blue-dark p-4 flex flex-row gap-2 hover:bg-blue justify-center items-center cursor-pointer"
      onClick={onClick}
    >
      <span className="font-[Inter] font-bold text-[14px] text-gray-100">
        Create
      </span>
      <div className="w-4 h-4">
        <Image src={Plus} alt="This is Plus Image" width={16} height={16} />
      </div>
    </div>
  );
};

export default CreateButton;
