import * as jwtdecode from "jwt-decode";
import * as React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/BootNavBar";
import ProtectedRoute from "./Components/Common/protectedRoute";
import LoginForm from "./Components/loginform";
import Logoff from "./Components/logout";
import NotFound from "./Components/notfound";
import Rental from "./Components/rental";
import rental from "./Components/rental";
import Movie from "./Movies";

interface Iappstate {
  name: string | null;

class App extends React.Component {

public renderRental=()=>{

return <Rental name="asda"   />;

}
interface Ijwtpayload {
  iat: string;
  name: string;
  sub: string;
}
class App extends React.Component<{}, Iappstate> {
  constructor(props: Iappstate) {
    super(props);
    this.state = {
      name: null
    };
  }
  public renderRental = () => {
    return <Rental name="asda" />;
  };

  public componentWillMount() {
    try {
      const jwt: any = localStorage.getItem("token");
      const user: Ijwtpayload = jwtdecode(jwt);
      this.setState(
        {
          name: user.name
        },
        () => {
          // tslint:disable-next-line: no-console
          console.log("asdas");
        }
      );
      // tslint:disable-next-line: no-console
      console.log("didmount");
    } catch (error) {
      //
    }
  }

  public render() {
    return (
      <main className="container">
        <BrowserRouter>
          <React.Fragment>
            <NavBar name={this.state.name} />

            <Switch>
              <Route exact={true} path="/logout" component={Logoff} />
              <Route exact={true} path="/loginform" component={LoginForm} />
              <ProtectedRoute
                path="/movies"
                componentr={<Movie />}
                name={this.state.name}
              />
              <Route exact={true} path="/rental" component={rental} />
              <Route exact={true} path="/not-found" component={NotFound} />
              <Route path="/" exact={true} component={LoginForm} />
              <Redirect to="/not-found" />
            </Switch>
          </React.Fragment>
        </BrowserRouter>

      </main>
    );
  }
}

export default App;
