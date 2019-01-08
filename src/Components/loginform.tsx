import * as React from 'react';


class LoginForm extends React.Component<{}, {}> {
  public handleSubmit=(e:Event)=>{
    e.preventDefault();
   }

   public render() { 
        return ( 
            <div style={{paddingTop:100}}>
               <h1>Login</h1>
               <form action="">
                   <div className="form-group">
                   <label htmlFor="username">username</label>
                   <input id="username" type="text" className="form-control"/>
                   </div>
                   <div className="form-group">
                   <label htmlFor="password">password</label
                   ><input id="password" type="text" className="form-control"/>
                   </div>
                   <button className="btn btn-primary">login</button>
               </form>
            </div>
         );
    }
}
 
export default LoginForm;