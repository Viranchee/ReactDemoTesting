import React from "react";
import { Link } from "react-router-dom";

function NavigationMenu(props) {
  return (
    <div>
      <div>
        <span className="font-bold py-3">The Menu</span>
      </div>
      <ul>
        <li>
          <Link
            to="/"
            className="text-blue-500 py-3 border-t border-b block"
            onClick={props.closeMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-blue-500 py-3 border-b block"
            onClick={props.closeMenu}
          >
            About Me
          </Link>
        </li>

        <li>
          <Link
            to="/products/2"
            className="text-blue-500 py-3 border-b block"
            onClick={props.closeMenu}
          >
            Product
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavigationMenu;
