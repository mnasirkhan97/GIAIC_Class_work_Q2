import React from "react";

function Navbar() {
  return (
    <div className="bg-purple-400 h-[40px] flex justify-around items-center">
      <div>logo</div>
      <div className="flex">
        <div>
          <ul className="flex">
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <button>Login</button>
          <button>Register</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;