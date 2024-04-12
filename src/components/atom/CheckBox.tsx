import Image from "next/image";
import Check from "../../../public/assets/check.png";
import { cn } from "@/src/utils/common";

interface CheckBoxProps {
  isDone?: boolean;
  onClick: () => void;
}

const CheckBox: React.FC<CheckBoxProps> = (props) => {
  const { isDone, onClick } = props;

  return (
    <div className="w-6 h-6 flex justify-center items-center">
      <div
        className={cn(
          "w-[16px] h-[16px] rounded-full cursor-pointer",
          isDone
            ? "flex justify-center items-center bg-purple hover:bg-purple-dark"
            : "border-[2px] border-blue hover:border-blue-dark hover:bg-blue-dark bg-opacity-0 hover:bg-opacity-20"
        )}
        onClick={onClick}
      >
        {isDone ? (
          <Image src={Check} alt="This is Check Vector" width={8} height={8} />
        ) : null}
      </div>
    </div>
  );
};

export default CheckBox;
