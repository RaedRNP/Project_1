import imgURL from '../assets/logo.jpeg';
import { IoCaretDownOutline, IoCaretUpOutline, IoMenu, IoClose } from "react-icons/io5";
import categories from "../constants/categories";
import { useState } from "react";

function Navbar() {
  return (
    <header
      id="Navbar"
      className="w-full h-20 flex bg-purple-900 shadow-md text-white justify-between items-center px-12 absolute"
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
        <a href="#" className="hover:underline">
          Contact
        </a>
        <div>
          <Dropdown title="Projects" />
        </div>
      </nav>

      <nav className="flex flex-col sm:hidden">
        <DropNavMobile />
      </nav>
    </header>
  );
}

function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative items-center flex flex-col">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-transparent text-white w-auto h-8 flex items-center justify-center rounded-md hover:underline"
      >
        {props}
        {!isOpen ? <IoCaretDownOutline /> : <IoCaretUpOutline />}
      </button>
      {isOpen && (
        <div className="absolute w-screen sm:w-max h-auto top-14 bg-purple-900 rounded-b-sm">
          <ul className='flex flex-col items-center'>
          {categories.map((item, i) => (
              <li className="py-5 px-4 hover:underline gap-1" key={i}>
                <a href={`${item.path}`}>{item.title}</a>
              </li>
          ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function DropNavMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
        {!isOpen ? <IoMenu /> : <IoClose />}
      </button>
        {isOpen && (
          <div className="absolute w-full h-64 top-16 right-0 bg-purple-900 flex flex-col items-center justify-around rounded-sm shadow-2xl">
            <a href="#" className="hover:underline">
              About me
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
            <div>
              <Dropdown title="Projects" />
            </div>
          </div>
        )}
    </>
  );
}

export { Navbar };
