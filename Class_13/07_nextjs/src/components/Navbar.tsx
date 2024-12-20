import React from "react";

function Navbar() {
  return (
    <div className="bg-purple-400 h-[40px] flex justify-around items-center">
      <div>logo</div>
      <div className="flex space-x-10 gap-5">
        <div>
          <ul className="flex space-x-3">
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="space-x-3">
          <button className="">Login</button>
          <button>Register</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
