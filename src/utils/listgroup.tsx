import * as React from 'react';

export interface IListGroupProps {
    itemName:string[],
    handleClick:any,
    activelist:any,

}
 
const ListGroup: React.FunctionComponent<IListGroupProps> = (props) => {
    const classforactive="list-group-item ";
    return (  
        <ul className="list-group">
        {props.itemName.map(item=>(
            <li key={item} className={props.activelist===item?classforactive+"active":classforactive} onClick={props.handleClick.bind(null,item)} style={{cursor:'pointer'}} >{item}</li>
        ))}
        </ul>

    );
}
 
export default ListGroup;