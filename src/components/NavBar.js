import React from "react";

function NavBar() {
  const links = [
    {id: "home"},
    {id: "about"},
    {id: "projects"}
  ];

  return (
     <nav>
      {links.map((link) => (
        <a key={link.id} href={`#${link.id}`}>
        </a>
      ))}
    </nav>
  );
}

export default NavBar;
