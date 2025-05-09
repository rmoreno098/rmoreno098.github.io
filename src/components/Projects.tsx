import { Github } from "lucide-react";
import projects from "../data/projects.json";

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 p-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="relative overflow-hidden rounded-2xl shadow-md"
        >
          <img
            src={project.image || "./no-image-svgrepo-com.svg"}
            alt={project.title}
            className="w-full h-24 md:h-48 object-fill"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <button>
              <div className="relative group space-y-2">
                <a
                  className="mb-0.5 block-inline"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </a>
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out" />
              </div>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
