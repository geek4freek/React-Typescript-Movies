import * as React from 'react';
import {  NavLink } from 'react-router-dom';



 
class NavBar extends React.Component<any,any> {
    
    public render() { 
        return ( <React.Fragment>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a className="navbar-brand" href="#">Movies</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"/>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link"  exact={true} activeClassName="active"  to="/">Home <span className="sr-only">(current)</span></NavLink>
          </li>
          
          <li className="nav-item">
            <NavLink className="nav-link" exact={true}  to="/movies">Movies<span className="sr-only">(current)</span></NavLink>
          </li>
          
          <li className="nav-item">
            <NavLink className="nav-link" exact={true}  to="/Rental">Rental<span className="sr-only">(current)</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact={true}   to="/Rental?id=2">Rental<span className="sr-only">(current)</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact={true}   to="/loginform">login<span className="sr-only">(current)</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact={true}   to="/users">users<span className="sr-only">(current)</span></NavLink>
          </li>
          
     
         
  
        </ul>
      </div>
    </nav>
      </React.Fragment>  );
    }
}
 
export default NavBar ;