import { IoLogoReact } from "react-icons/io5";
import { Dropdown } from "./Dropdown"

function Navbar() {
  return (
    <header id="Navbar" className="w-full h-12 flex bg-black text-white justify-between items-center px-8">
      <div>
        <a href="/">
          <IoLogoReact />
        </a>
      </div>
      <nav className="flex w-80 items-center justify-between">
        <a href="#" className="hover:underline">About me</a>
        <a href="#" className="hover:underline">Find me</a>
        <div>
            <Dropdown title="Projects" />
        </div>
      </nav>
    </header>
  );
}

export { Navbar };
