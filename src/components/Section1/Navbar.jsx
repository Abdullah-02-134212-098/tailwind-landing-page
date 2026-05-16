import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white flex justify-between items-center h-20">
      <h4 className="bg-black text-white rounded-xl px-4 py-1 w-40 text-center ml-5">
        Target Audience
      </h4>

      
      <button className="text-black font-mono uppercase mr-5 cursor-pointer">
        Digital Banking Platform
      </button>
    </div>
  );
};

export default Navbar;
