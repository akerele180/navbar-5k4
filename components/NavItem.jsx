import Link from "next/link";
import React from "react";

const NavItem = ({ href, name, active }) => {
  return (
    <Link href={href}>
      <a className={`nav__link ${active ? "active" : ""}`}>{name}</a>
    </Link>
  );
};

export default NavItem;
