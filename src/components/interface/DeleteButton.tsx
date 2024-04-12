import Image from "next/image";
import Trash from "../../../public/assets/trash.png";
import HoverTrash from "../../../public/assets/hoverTrash.png";

interface DeleteButtonProps {
  onClick: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = (props) => {
  const { onClick } = props;

  return (
    <div className="w-6 h-6 flex justify-center items-center hover:rounded-[4px] hover:bg-gray-400 cursor-pointer">
      <div className="w-[16px] h-[16px] flex justify-center items-center">
        <img
          src={Trash.src}
          alt="This is Trash Vector"
          width={14}
          height={14}
          onMouseOver={(e) => {
            e.currentTarget.src = HoverTrash.src;
          }}
          onMouseOut={(e) => {
            e.currentTarget.src = Trash.src;
          }}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default DeleteButton;
