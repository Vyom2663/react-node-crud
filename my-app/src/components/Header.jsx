import React from 'react';

function Header() {
  return (
    <header>
      <div className="logo">Crud</div>
      <nav>
        <ul class = "hov">
          <li><a href="/">Home</a></li>
          <li><a href="/adduser">AddUser</a></li>
          <li><a href="/updateuser">UpdateUser</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
