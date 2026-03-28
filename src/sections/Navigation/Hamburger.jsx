import { useState } from "react";
import { links } from "../../utils/constants";

export default function Hamburger() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="text-orange-600 text-2xl"
      >
        ☰
      </button>

      {/* Menu */}
      {open && (
        <div className="absolute top-16 right-6 bg-white shadow-lg rounded-xl p-6 w-52 z-50">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link}>
                <a href="#" className="text-gray-700 hover:text-orange-500">
                  {link}
                </a>
              </li>
            ))}
            <hr />
            <a href="#" className="text-orange-600">Sign In</a>
            <button className="bg-orange-500 text-white rounded-lg py-2">
              Get Started
            </button>
          </ul>
        </div>
      )}
    </div>
  );
}