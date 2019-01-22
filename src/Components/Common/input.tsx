import * as React from 'react';


export interface ITextBoxProps {
    name:string,
    autofocus?:boolean,
    value:any,
    type:string,
    handleChange:any,
    error?:string,
    validate?:any
}
 
const Input: React.FunctionComponent<ITextBoxProps> = (props) => {
    return ( 
        <div className="form-group">
        <label htmlFor={props.name}>{props.name}</label>
        <input
         autoFocus={(props.autofocus===undefined || props.autofocus===false)?false:true}
          id={props.name}
          name={props.name}
          value={props.value}
          onChange={props.handleChange}
          onBlur={props.validate}
        type={props.type}
        className="form-control"/>
        {props.error && <div className="alert alert-danger">{props.error}</div>}

        </div>
     );
}
 
export default Input;