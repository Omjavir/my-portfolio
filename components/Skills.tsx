import Image from "next/image";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { FaAws, FaGitAlt } from "react-icons/fa";
import { IoLogoDocker } from "react-icons/io5";
import { RiJavascriptFill, RiNextjsFill } from "react-icons/ri";
import { SiPrisma } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

export default function Skills() {
  return (
    <div className="m-4 p-4">
      <h2 className="font-bold">Skills :</h2>
      <div className="flex justify-start items-center m-3">
        <div className="font-medium">Programming : </div>
        <div className="px-3 flex flex-wrap gap-3">
          <TbBrandCpp size={"30px"} />
          <RiJavascriptFill size={"30px"} />
          <BiLogoTypescript size={"30px"} />
        </div>
      </div>
      <div className="flex justify-start items-center m-3">
        <div className="font-medium">Tech Stack : </div>
        <div className="px-3 flex flex-wrap justify-center items-center  gap-3">
          <RiNextjsFill size={"30px"} />
          <Image alt="Techstack" src={"/image.png"} width={100} height={100} />
        </div>
      </div>

      <div className="flex justify-start items-center m-3">
        <div className="font-medium">Database : </div>
        <div className="px-3 flex flex-wrap gap-3">
          {/* <Image alt="Techstack" src={"/image.png"} width={180} height={140} /> */}
          <BiLogoPostgresql size={"30px"} />
          <SiPrisma size={"30px"} />
        </div>
      </div>

      <div className="flex justify-start items-center m-3">
        <div className="font-medium">Tools : </div>
        <div className="px-3 flex flex-wrap gap-3">
          {/* <Image alt="Techstack" src={"/image.png"} width={180} height={140} /> */}
          <FaGitAlt size={"30px"} />
          <IoLogoDocker size={"30px"} />
          <FaAws size={"30px"} />
        </div>
      </div>
    </div>
  );
}
