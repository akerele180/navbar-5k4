import Link from "next/link";
import React from "react";
import NavItem from "./NavItem";

const menuList = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Sign In",
    href: "/sign-in",
  },
  {
    name: "Sign Up",
    href: "/sign-up",
  },
];

const Navbar = () => {
  return (
    <header>
      <nav className="nav">
        <Link href={"/"}>
          <a>
            <h1 className="logo">LOGO</h1>
          </a>
        </Link>
        <div className="nav__menu-bar">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="nav__menu-list">
          {menuList.map((menu, index) => {
            return (
              <div key={menu.index}>
                <NavItem href={menu.href} name={menu.name} />
              </div>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
