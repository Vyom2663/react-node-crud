import React from 'react';

function Header() {
  return (
    <header>
      <div className="logo">LOGO</div>
      <nav>
        <ul class = "hov">
          <li><a href="#">Home</a></li>
          <li><a href="#">AddUser</a></li>
          <li><a href="#">UpdateUser</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
