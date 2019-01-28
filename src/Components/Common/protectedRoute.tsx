import * as React from "react";
import { Redirect, Route } from "react-router";

export interface IProps {
  name: string | null;
  componentr: any;
  path: string;
}

const ProtectedRoute = (props: IProps) => {
  // tslint:disable-next-line: no-console
  console.log(props.name);
  return (
    <Route
      path={props.path}
      // tslint:disable-next-line: jsx-no-lambda
      render={Prop => {
        if (!props.name) {
          return <Redirect to="/loginform" />;
        } else {
          return props.componentr;
        }
      }}
    />
  );
};
export default ProtectedRoute;
