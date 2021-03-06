
import * as Joi from "joi";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import httpService from "./Common/httpService";
import Input from "./Common/input";


interface ILogin {
  account: {
    userName: string;
    password: string;
  };
  errors: {
    userName: string;
    password: string;
  };
}
class LoginForm extends React.Component<{} & RouteComponentProps, ILogin> {
  public state = {
    account: {
      password: "",
      userName: ""
    },
    errors: {
      password: "",
      userName: ""
    }
  };
  public schme = {
    password: Joi.string().required(),
    userName: Joi.string().required()
  };
  constructor(props: any) {
    super(props);
  }

  public validate = () => {
    // const result = Joi.validate(this.state.account, this.schme);


    const Errors = { ...this.state.errors };
    Errors.password = "";
    Errors.userName = "";
    if (this.state.account.userName.trim() === "") {
      Errors.userName = "username required.";
    }
    if (this.state.account.password.trim() === "") {
      Errors.password = "Password required.";
    }
    return Errors;
  };
  public validateProperty = (e: React.ChangeEvent<HTMLInputElement>) => {
    const Errors = { ...this.state.errors };
    Errors.userName = "";
    Errors.password = "";
    if (this.state.account.userName === "mid") {
      Errors.userName = "mid not allowed";
    }

    if (this.state.account.password === "mid") {
      Errors.password = "mid not allowed";
    }
    return Errors;
  };
  public handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
    const error = this.validateProperty(e);
    this.setState({
      errors: { userName: error.userName, password: error.password }
    });
  };
  public handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({
      errors: { userName: errors.userName, password: errors.password }
    });
    try {
      const { data: token } = await httpService.post(
        "https://localhost:44390/api/login",
        {
          password: this.state.account.userName,
          username: this.state.account.password
        }
      );
      localStorage.setItem("token", token);
      window.location.href = "/movies";
    } catch (error) {
      alert("wrong username or password");
    }
  };

  public render() {
    return (
      <div style={{ paddingTop: 100 }}>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            autofocus={true}
            handleChange={this.handleChange}
            name="userName"
            value={this.state.account.userName}
            type="text"
            error={this.state.errors.userName}
          />
          <Input
            error={this.state.errors.password}
            handleChange={this.handleChange}
            name="password"
            value={this.state.account.password}
            type="password"
          />
          <button className="btn btn-primary">login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
