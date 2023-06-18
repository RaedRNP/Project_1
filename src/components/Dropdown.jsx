import { IoCaretDownOutline, IoCaretUpOutline } from "react-icons/io5";
import categories from "../constants/categories";
import { useState } from "react";

function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative items-center flex flex-col">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-transparent text-white w-auto h-8 flex items-center justify-center rounded-md hover:underline"
      >
        {props.title}
        {!isOpen ? <IoCaretDownOutline /> : <IoCaretUpOutline />}
      </button>
      {isOpen && (
        <div className="absolute w-28 h-40 top-8 bg-blue-700 flex flex-col items-center rounded-sm">
          {categories.map((item, i) => (
            <ul>
              <li className="py-2" key={i}>
                {item.title}
              </li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
}

export { Dropdown };
