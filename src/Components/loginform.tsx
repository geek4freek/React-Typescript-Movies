import * as React from 'react';

class LoginForm extends React.Component<{}, {}> {

     public userName:any;
    constructor(props:string){
        super(props);
         this.userName=React.createRef<HTMLInputElement>();
    }
  public handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
// tslint:disable-next-line: no-console
    console.log( this.userName.current.value);
   };
  

   public render() { 
        return ( 
            <div style={{paddingTop:100}}>
               <h1>Login</h1>
               <form onSubmit={this.handleSubmit}>
                   <div className="form-group">
                   <label htmlFor="username">username</label>
                   <input id="username" ref={this.userName} type="text" className="form-control"/>
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