import DropNav from "./DropNav"
import imgURL from '../assets/logo.jpeg'
import { Dropdown } from "./Dropdown";

function Navbar() {
  return (
    <header
      id="Navbar"
      className="w-full h-20 flex bg-transparent text-white justify-between items-center px-12 absolute"
    >
      <a href="/" className="flex items-center">
        <div>
          <img src={imgURL} alt="logo" className="w-10 rounded-full" />
        </div>
        <h1 className="mx-4">Raed Nouredine</h1>
      </a>

      <nav className="sm:flex w-80 items-center justify-between hidden">
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

      <nav className="flex flex-col sm:hidden">
        <DropNav />
      </nav>
    </header>
  );
}

export { Navbar };
