
import * as React from 'react';
import {  Redirect, Route, Router, Switch } from 'react-router-dom';
import customHistory from 'src/history';
import './App.css';
import NavBar from './Components/BootNavBar';
import LoginForm from './Components/loginform';
import NotFound from './Components/notfound';
import Rental from './Components/rental';
import Movie from './Movies';



class App extends React.Component {

public renderRental=()=>{

return <Rental name="asda"   />;
}


  public render() {
    return (
      <main className="container">
      
      <Router history={customHistory}>
    <React.Fragment>
    <NavBar/>

   <Switch>
    <Route exact={true} path="/loginform" component={LoginForm}/>
    <Route  exact={true} path="/movies"  component={Movie} />
    <Route  exact={true} path="/Rental" render={this.renderRental} />
    <Route exact={true} path="/not-found" component={NotFound}/>
    <Route path="/" exact={true} component={Movie}/>
    <Redirect  to="/not-found"/>
    </Switch>

    </React.Fragment>
  </Router>
      </main>
    );
  }
}

export default App;
