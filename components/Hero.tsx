import Image from "next/image";

export default function Hero() {
  return (
    <div className="m-4 p-4">
      <div className=" flex justify-start flex-col mb-8 my-5">
        <Image
          alt="Profile Image"
          src={`/profile.jpg`}
          width={120}
          height={120}
          className="rounded-full"
        />
      </div>
      <div className=" mb-4">
        <h2 className="font-bold">I&apos;m Om -- a Software Developer</h2>
      </div>
      <div className=" mb-4">
        <h4 className="font-medium">
          Passionate for exploring the ever-evolving landscape of web
          technologies and Web3. My expertise spans across a diverse set of
          tools and frameworks, allowing me to craft dynamic and efficient web
          applications.
        </h4>
      </div>
    </div>
  );
}
