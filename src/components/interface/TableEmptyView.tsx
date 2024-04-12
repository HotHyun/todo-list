import Image from "next/image";
import ClipBoard from "@/public/assets/clipboard.png";

const TableEmptyView: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 px-6 py-[64px] w-full items-center justify-center rounded-[8px] border-t border-t-gray-400">
      <Image
        src={ClipBoard}
        alt="This is ClipBoard Image"
        width={56}
        height={56}
      />
      <div className="whitespace-pre font-[Inter] text-[16px] text-center w-full text-gray-300">
        <span className="font-bold">{"You don’t have any tasks\n"}</span>
        <span className="font-normal">
          {"Please enter your tasks and archive that"}
        </span>
      </div>
    </div>
  );
};

export default TableEmptyView;
