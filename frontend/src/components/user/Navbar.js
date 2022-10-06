import React from "react";
import { Link } from 'react-router-dom'
import Container from "../Container";
import { useTheme } from "../../hooks";
import { VscColorMode } from "react-icons/vsc";

export default function Navbar() {
  const { toggleTheme } = useTheme()
  return (
    <div className="bg-secondary shadow-sm shadow-dark-subtle">
      <Container className="p-2">
        <div className="flex justify-between items-center">
          <Link to='/'><img src="./logo.png" alt="" className="h-10" /></Link>
          <ul className="flex items-center space-x-4">
            <li>
              <button onClick={toggleTheme} className="dark:bg-white bg-dark-subtle p-1 rounded">
                <VscColorMode className="text-secondary" size={24} />
              </button>{" "}
            </li>
            <li>
              <input className="border-2 border-dark-subtle p-1 bg-transparent outline-none rounded focus:border-white transistion text-white" placeholder="Search..." type="text" />
            </li>
            <li>
              <Link className="text-white font-semibold text-lg" to='auth/sign-in'>Login</Link></li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
