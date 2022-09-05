import React from "react";
import { BsFillSunFill } from "react-icons//bs";
import Container from "../Container";

export default function Navbar() {
  return (
    <div className="bg-secondary shadow-sm shadow-dark-subtle">
      <Container className="p-2">
        <div className="flex justify-between items-center">
          <img src="./logo.png" alt="" className="h-10" />

          <ul className="flex items-center space-x-4">
            <li>
              <button className="bg-dark-subtle p-1 rounded">
                <BsFillSunFill className="text-white" size={24} />
              </button>{" "}
            </li>
            <li>
              <input className="border-2 border-dark-subtle p-1 bg-transparent outline-none rounded focus:border-white transistion text-white" placeholder="Search..." type="text" />
            </li>
            <li className="text-white font-semibold text-lg">Login</li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
