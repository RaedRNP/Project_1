import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Dropdown } from "./Dropdown"

export default function DropNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
        {!isOpen ? <IoMenu /> : <IoClose />}
      </button>
        {isOpen && (
          <div className="absolute w-full h-64 top-20 right-0 bg-[#0f0c29] flex flex-col items-center justify-around rounded-sm shadow-2xl">
            <a href="#" className="hover:underline">
              About me
            </a>
            <div>
              <Dropdown title="Projects" />
            </div>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </div>
        )}
    </>
  );
}
