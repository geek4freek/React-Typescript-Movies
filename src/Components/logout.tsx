import * as React from "react";

class Logoff extends React.Component {
  public componentDidMount() {
    localStorage.removeItem("token");
    window.location.href = "/";
  }
  public render() {
    return null;
  }
}

export default Logoff;
