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
        <a href="#">About me</a>
        <a href="#">Find me</a>
        <div>
            <Dropdown title="Categories" />
        </div>
      </nav>
    </header>
  );
}

export { Navbar };
