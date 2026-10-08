import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full">

      <div className="flex items-center justify-between gap-18 w-full h-[40px]">

        {/* Logo */}
        <div className="w-[200px] h-full flex items-center px-6 shrink-0">
          <h2 className="text-xl font-semibold cursor-pointer dancing-script">
            ASHRAYA
          </h2>
        </div>


        {/* Navigation Links */}
        <div className="flex-1 h-full flex items-center w-fit  justify-between px-6 gap-12 border border-gray-500 rounded-[10px]">

          <button className="hover:text-gray-300 transition cursor-pointer">
            Dashboard
          </button>

          <button className="hover:text-gray-300 transition cursor-pointer">
            Dashboard
          </button>

          <button className="hover:text-gray-300 transition cursor-pointer">
            Dashboard
          </button>

        </div>


        {/* Profile */}
        {/* Profile */}
<div className="w-[100px] h-full flex items-center justify-center shrink-0 mr-2">
  
  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden cursor-pointer">
    
    {/* Default person icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-7 h-7 text-gray-600"
    >
      <path
        fillRule="evenodd"
        d="M12 2a5 5 0 1 0 0 10A5 5 0 0 0 12 2ZM4 21a8 8 0 1 1 16 0H4Z"
        clipRule="evenodd"
      />
    </svg>

  </div>

</div>
      </div>

    </nav>
  );
};

export default Navbar;