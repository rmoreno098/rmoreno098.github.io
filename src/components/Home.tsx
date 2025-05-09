import { Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <>
      <div id="intro" className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Hi, I'm Roman
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          I am a software developer who likes to build solutions to everyday
          problems.
        </p>
        <p className="text-lg md:text-xl text-gray-600">
          My interests include networking, concurrency, and distributed systems.
        </p>
        <p className="text-lg md:text-xl text-gray-600">
          I enjoy learning in the ever-evolving realm of tech and experimenting
          with new technologies.
        </p>
      </div>
      <div id="refs" className="flex space-x-6 mt-4">
        <div className="relative group">
          <a
            href="https://github.com/rmoreno098"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 mb-0.5 inline-block hover:text-gray-600 transition duration-300 "
          >
            <Github />
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out" />
          </a>
        </div>
        <div className="relative group space-y-2">
          <a
            href="https://linkedin.com/in/romanmorenojr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 mb-0.5 inline-block hover:text-gray-600 transition duration-300 "
          >
            <Linkedin />
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out" />
          </a>
        </div>
      </div>
    </>
  );
}
