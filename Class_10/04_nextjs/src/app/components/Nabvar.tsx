import React from "react";

function Nabvar() {
  return (
    // <nav className="bg-blue-700 h-12 w-100vw ">
    <nav className="flex justify-around items-center bg-blue-700 h-4 ">
      <div className="bg-black h-2 w-10"></div>
      <div className="bg-orange-600 h-2 w-20"></div>
      <ul className="flex">
        <li className="bg-red-600 h-2 w-10"></li>
        <li className="bg-pink-600 h-2 w-10"></li>
        <li className="bg-purple-900 h-2 w-10"></li>
        <li className="bg-orange-600 h-2 w-10"></li>
      </ul>
      {/* <div>
        <ul className="flex">
          <li>Home</li>
          <li>Contact</li>
          <li>Apply</li>
          <li>Courses</li>
        </ul>
      </div> */}
    </nav>
  );
}

export default Nabvar;
