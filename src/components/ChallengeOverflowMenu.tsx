import React, { useState } from "react";
import Image from "next/image";

interface OverflowMenuProps {
  onEdit: () => void;
  onDelete: () => void;
}

const OverflowMenu: React.FC<OverflowMenuProps> = ({ onEdit, onDelete }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="relative ml-4">
      <button
        id="dropdownDefaultButton"
        className="inline-flex items-center rounded-lg hover:ring-2 hover:ring-gray-300"
        type="button"
        onClick={toggleMenu}
      >
        <Image
          src="/Challenge/overflow-menu.png"
          alt="Overflow"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      </button>
      {showMenu && (
        <div className="absolute right-0 z-10 mt-2 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow-lg">
          <ul className="py-2 text-sm text-gray-700">
            <li>
              <button
                onClick={onEdit}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                수정
              </button>
            </li>
            <li>
              <button
                onClick={onDelete}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                삭제
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default OverflowMenu;
