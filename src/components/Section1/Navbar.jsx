import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white flex justify-between items-center h-20">
      <h4 className="bg-black text-white rounded-full px-4 py-1 w-40 text-center ml-5 text-sm tracking-widest">
        Target Audience
      </h4>

      
      <button className="text-black font-mono uppercase mr-5 cursor-pointer bg-gray-100  px-4 py-1 rounded-full text-sm tracking-widest">
        Digital Banking Platform
      </button>
    </div>
  );
};

export default Navbar;
