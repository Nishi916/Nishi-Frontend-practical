import React from "react";
import {
  FaUser,
  FaAddressCard,
  FaToolbox,
  FaGraduationCap,
} from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar, items, onSelect ,selectedItem}) => {
    const icons = {
        'Contact Information' : <FaUser />,
        'Schooling Information' : <FaAddressCard />,
        'Employment Details' : <FaToolbox />,
        'Hobbies and Interests' : <FaGraduationCap/>
    }
    
    return (
    <aside
      className={`shadow-lg fixed inset-y-0 left-0 bg-white md:w-64 w-full md:translate-x-0 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}
    >
      <button
        className="text-2xl md:p-4 p-2 focus:outline-none md:hidden"
        onClick={toggleSidebar}
      >
        &times;
      </button>
      <nav className="md:mt-10 mt-0">
        <ul className="flex flex-col p-4">
          {items?.map((item,index) => (
            <li className={`mb-2 flex items-center cursor-pointer ${selectedItem === index ? 'text-blue-600	rounded' : ''}`}
            onClick={() => {onSelect(index);
            }}
            >
              {icons[item.title]}
              <span
                className={`block p-2 text-gray-700 rounded ${selectedItem === index ? 'text-blue-600	rounded' : ''}`}
              >
                {item.title}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
