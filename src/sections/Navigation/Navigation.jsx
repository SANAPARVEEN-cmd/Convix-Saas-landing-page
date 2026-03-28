import logo from "../../assets/convix-logo.svg";
import { links } from "../../utils/constants";
import Hamburger from "./Hamburger";

export default function Navigation() {
  return (
    <section className="w-full px-6 md:px-10 lg:px-16 py-4 flex justify-between items-center">

      {/* LEFT SIDE */}
      <nav className="flex items-center">
        <a href="#">
          <img
            src={logo}
            alt="convix-logo"
            className="inline-block mr-6 h-8 md:h-9"
          />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:inline-flex gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-base lg:text-lg text-orange-600 hover:text-purple-500 transition-colors duration-200 font-medium"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* RIGHT SIDE */}
      <nav className="hidden md:flex items-center gap-6 lg:gap-8">
        <a
          href="#"
          className="text-base lg:text-lg text-orange-600 hover:text-purple-500 transition-colors duration-200 font-medium"
        >
          Sign In
        </a>

        <button className="bg-orange-500 px-6 lg:px-8 py-2.5 lg:py-3 rounded-xl text-base lg:text-lg text-white transition-all duration-300 hover:bg-purple-500 hover:scale-105 shadow-sm">
          Get Started
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Hamburger />
      </div>
    </section>
  );
}