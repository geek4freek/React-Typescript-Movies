import * as React from "react";
import { Link, NavLink } from "react-router-dom";

interface INavBarProps {
  name: string;
}

class NavBar extends React.Component<any, INavBarProps> {
  public render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a className="navbar-brand" href="#">
            Movies
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
              {this.props.name && (
                <React.Fragment>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      exact={true}
                      activeClassName="active"
                      to="/"
                    >
                      Home <span className="sr-only">(current)</span>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" exact={true} to="/movies">
                      Movies<span className="sr-only">(current)</span>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" exact={true} to="/Rental">
                      Rental<span className="sr-only">(current)</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      exact={true}
                      to="/Rental?id=2"
                    >
                      Rental<span className="sr-only">(current)</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                      {this.props.name}
                      <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/logout">
                      logout<span className="sr-only">(current)</span>
                    </NavLink>
                  </li>
                </React.Fragment>
              )}

              {!this.props.name && (
                <React.Fragment>
                  <li className="nav-item">
                    <NavLink className="nav-link" exact={true} to="/loginform">
                      login<span className="sr-only">(current)</span>
                    </NavLink>
                  </li>
                </React.Fragment>
              )}
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }

}

export default NavBar;
