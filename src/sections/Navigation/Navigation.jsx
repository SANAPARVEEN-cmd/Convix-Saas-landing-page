import logo from "../../assets/convix-logo.svg";
import { links } from "../../utils/constants";
import Hamburger from "./Hamburger";
export default function Navigation() {
  return (
    <section className="flex justify-between ">
      <nav className="flex items-center">
        <a href="#">
          <img src={logo} alt="convix-logo" className="inline-block mr-8 mh-7" />
        </a>
        <ul className="inline-flex gap-8">
          {links.map((link) => (
            <li key={link}>
              <a href="#" className="text-lg text-orange-600 hover:text-purple-500 transition-colors duration-100">{link}</a>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="flex items-center gap-8">
        <a href = "#" className="text-lg text-orange-600 hover:text-purple-500 transition-colors duration-100">Sign In</a>
        <button className="bg-orange-500 px-8 py-4 rounded-2xl text-lg text-white transition-all duration-200 hover:bg-purple-500 hover:px-9">Get Started</button>
      </nav>
      <Hamburger />
    </section>
  );
}
