import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "", label: "Home" },
  { id: "projects", label: "Projects" },
];

export default function HeaderComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full top-0 h-auto p-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="md:flex start-0">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <nav
            className={`md:flex md:items-center md:text-xl space-x-6 z-50 ${
              isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden md:overflow-visible transition-all duration-300 ease-in-out md:max-h-full md:opacity-100`}
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`/${item.id}`}
                className="block md:inline-block text-gray-800 hover:text-black px-6 py-2 md:p-0"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
