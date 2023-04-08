import React from "react";

const Navbar = () => {
  return (
    <>
      <div>
        {/* As a link */}
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Home
            </a>
          </div>
        </nav>
        {/* As a heading */}
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Redux Toolkit</span>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
