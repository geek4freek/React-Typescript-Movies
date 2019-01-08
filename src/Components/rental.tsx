import * as queryString from 'query-string';
import * as React from 'react';
import customHistory from 'src/history';




interface IrentalProps{
    name:string,
    }


 
class Rental extends React.Component<IrentalProps, any> {
  
    public extracturl=()=>{
       
        const stringfy=queryString.parse(location.search);
        return stringfy.id;
    }
    public handleClick=()=>{
        customHistory.replace("/movies");
        
    
    }
    public render() { 
        return ( 
            <div style={{paddingTop:100}}>
            {this.extracturl()}
            <button onClick={this.handleClick}>navigate</button>
           </div>
         );
    }

}
 
export default Rental;