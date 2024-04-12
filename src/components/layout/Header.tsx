import Image from "next/image";
import Rocket from "@/public/assets/rocket.png";

const Header: React.FC = () => {
  return (
    <div className="w-screen h-[200px] bg-gray-700 flex justify-center items-center">
      <div className="flex flex-row gap-3 items-center justify-center">
        <div className="h-[36px] w-[22px]">
          <Image
            src={Rocket}
            alt="This is Rocket Image"
            width={22}
            height={36}
          />
        </div>
        <div className="font-[Inter] font-black text-[40px]">
          <span className="text-blue">To</span>
          <span className="text-purple-dark">Do</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
