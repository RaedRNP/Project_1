import { IoLogoReact } from "react-icons/io5";
import { Dropdown } from "./Dropdown";

function Navbar() {
  return (
    <header
      id="Navbar"
      className="w-full h-20 flex bg-transparent text-white justify-between items-center px-12 absolute"
    >
      <a href="/" className="flex">
        <div>
          <IoLogoReact className="text-2xl" />
        </div>
        <h1 className="mx-4">Raed Nouredine</h1>
      </a>

      <nav className="flex w-80 items-center justify-between">
        <a href="#" className="hover:underline">
          About me
        </a>
        <div>
          <Dropdown title="Projects" />
        </div>
        <a href="#" className="hover:underline">
          Contact
        </a>
      </nav>
    </header>
  );
}

export { Navbar };
