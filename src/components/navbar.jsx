import React from "react";

const NavBar = ({ totalCounters }) => {
  //   console.log("NavBar - rendered ");
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="https://www.google.com">
          Navbar
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;

// class NavBar extends Component {
//     render() {
//     }
// }

// export default NavBar;
