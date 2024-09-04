import React from "react";
import { NavLink, useLocation } from "react-router-dom";

return function Navbar() {
  <div>
  <nav className="topnav navbar navbar-light">
  <button type="button" className="navbar-toggler text-muted mt-2 p-0 mr-3 collapseSidebar">
    <i className="fe fe-menu navbar-toggler-icon"></i>
  </button>
  <ul className="nav">
    <li className="nav-item">
      <NavLink className="nav-link text-muted my-2" href="#" id="modeSwitcher" data-mode="dark">
        <i className="fe fe-sun fe-16"></i>
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link text-muted my-2" href="./#" data-toggle="modal" data-target=".modal-shortcut">
        <span className="fe fe-grid fe-16"></span>
      </NavLink>
    </li>
    <li className="nav-item nav-notif">
      <NavLink className="nav-link text-muted my-2" href="./#" data-toggle="modal" data-target=".modal-notif">
        <span className="fe fe-bell fe-16"></span>
        <span className="dot dot-md bg-success"></span>
      </NavLink>
    </li>
    <li className="nav-item dropdown">
      <NavLink className="nav-link dropdown-toggle text-muted pr-0" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span className="avatar avatar-sm mt-2">
          <img src={require('./assets/avatars/face-1.jpg')} alt="..." className="avatar-img rounded-circle"/>
        </span>
      </NavLink>
      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
        <NavLink className="dropdown-item" href="#">Profile</NavLink>
        <NavLink className="dropdown-item" href="#">Settings</NavLink>
        <NavLink className="dropdown-item" href="#">Activities</NavLink>
      </div>
    </li>
  </ul>
</nav>
</div>

}
