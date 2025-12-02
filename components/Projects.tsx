import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="m-4 p-4">
      <h2 className="font-bold">Projects :</h2>
      <div className="flex flex-wrap gap-8 justify-center mt-8">
        <Card className="w-full md:w-[30%]">
          <CardHeader>
            <CardTitle>P2P - File Transfer App</CardTitle>
            <CardDescription>Node.js | React.js</CardDescription>
          </CardHeader>
          <CardContent>
            <h4>
              Built using <b>Node.js, Express, and React.js</b> the application
              allows users to upload files of any type and generates a unique
              6-digit share code. Recipients can enter the code to securely
              preview the file in-browser (PDF, image, video, documents) or
              download it on demand. The backend implements industry best
              practices such as a secure <b>CORS layer, Rate Limiting </b> to
              protect against abuse, and <b>Error Handling</b> to ensure
              consistent and reliable API responses.
            </h4>
          </CardContent>
          <CardFooter className="flex justify-between">
            {/* <Link href="https://backend-email-microservice.vercel.app/">
              <Button variant={"link"}>Live</Button>
            </Link> */}
            <Link href={"https://github.com/Omjavir/P2P"} target="_blank">
              <Button>Code</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="w-full md:w-[30%]">
          <CardHeader>
            <CardTitle>Ecommerce Application</CardTitle>
            <CardDescription>MERN stack | Cloudinary | Redux</CardDescription>
          </CardHeader>
          <CardContent>
            <h4>
              Developed a feature-rich e-commerce application using{" "}
              <b> React.js, Node.js, and Express.js</b> to enhance user
              engagement. Leveraged <b>MongoDB</b> for the product catalog, and
              employed <b>react-redux</b> for efficient state management.
              Utilized axios for secure API calls, enabling seamless data
              interaction with backend services. Integrated <b> Cloudinary</b>{" "}
              and <b>Multer</b> for efficient <b>image</b> upload, storage, and
              <b> processing</b>.
            </h4>
          </CardContent>
          <CardFooter className="flex justify-between mt-12">
            <Link href={"https://www.youtube.com/watch?v=cPnbUn-4l9U"}>
              <Button variant={"outline"}>Video</Button>
            </Link>
            <Link
              href={"https://github.com/Omjavir/ecommerce-server"}
              target="_blank"
            >
              <Button>Code</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="w-full md:w-[30%]">
          <CardHeader>
            <CardTitle>Youtube Streaming Application</CardTitle>
            <CardDescription>Node.js | Express.js | Docker</CardDescription>
          </CardHeader>
          <CardContent>
            <h4>
              Designed and developed a high-performance streaming application
              with <b>Node.js</b> and <b>Express.js</b>, enhancing user
              experience through seamless <b>YouTube integration</b>.
              Implemented advanced video processing and streaming using FFMPEG,
              and <b>deployed with Docker containers</b>, resulting in 30%
              faster deployment times and improved scalability, optimized
              performance and user engagement metrics.
            </h4>
          </CardContent>
          <CardFooter className="flex justify-between mt-16 pt-2">
            <Link href={"https://youtu.be/A9khVQh9n_k"}>
              <Button variant={"outline"}>Video</Button>
            </Link>
            <Link
              href={"https://github.com/Omjavir/Streaming-Application"}
              target="_blank"
            >
              <Button>Code</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      {/* <div className="m-4 p-4 flex justify-center">
        <Link href={"https://portfolio-omjavir.vercel.app/projects"}>
          <Button variant={"default"}>More Projects ...</Button>
        </Link>
      </div> */}
    </div>
  );
}
