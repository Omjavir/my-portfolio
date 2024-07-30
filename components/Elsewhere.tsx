import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";

export default function Elsewhere() {
  return (
    <div className="m-4 p-4">
      <div className="font-bold">Elsewhere ...</div>
      <div className="flex flex-wrap">
        <Link target="_blank" href={"https://github.com/Omjavir"}>
          <div className="flex justify-around items-center shadow-md mx-2 my-3 py-2 px-4 rounded-md">
            <div>
              <FaGithub />
            </div>
            <div className="pl-2">omjavir</div>
          </div>
        </Link>
        <Link target="_blank" href={"http://www.linkedin.com/in/omjavir"}>
          <div className="flex justify-around items-center shadow-md mx-2 my-3 py-2 px-4 rounded-md">
            <div>
              <FaLinkedin />
            </div>
            <div className="pl-2">omjavir</div>
          </div>
        </Link>
        <Link target="_blank" href={"https://leetcode.com/omjavir/"}>
          <div className="flex justify-around items-center shadow-md mx-2 my-3 py-2 px-4 rounded-md">
            <div>
              <TbBrandLeetcode />
            </div>
            <div className="pl-2">omjavir</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
