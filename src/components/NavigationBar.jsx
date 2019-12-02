import React from "react";
import { Link } from "react-router-dom";

export const NavigationBar = ({ search, direction }) => {
  const style = { display: "none" };
  const dummy = direction === undefined ? style : "btn btn-outline-primary";
  return (
    <nav className="navbar navbar-light bg-light shadow-sm navigation">
      <div className="navbar-brand nav-logo">
        <Link to="/">
          <i className="zmdi zmdi-home zmdi-hc-2x"></i>
        </Link>
      </div>
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          onChange={e => search(e)}
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <Link to="/dummy" className={dummy}>
          {direction}
        </Link>
      </form>
    </nav>
  );
};
