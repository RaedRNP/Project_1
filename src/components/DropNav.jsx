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
          <div>
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
