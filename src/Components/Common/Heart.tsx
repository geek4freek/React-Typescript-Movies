import * as React from 'react';
// import { Component } from 'react';

export interface IHeartProps {
    IsFilled:boolean;
    Id:string;
    handleclick:any;
}
 

 
class Heart extends React.Component<IHeartProps, any> {
    
    public render() { 
        
        return ( 
            <React.Fragment>
                <i 
                onClick={this.props.handleclick.bind(this,this.props.Id)} className={this.renderClass()} aria-hidden="true" 
                style={{cursor:'pointer'}}/>
            </React.Fragment>
         );
    }
    private renderClass(){
        let classForHeart="fa fa-heart";
        classForHeart+=this.props.IsFilled===true?"-o":"  text-danger"
        return classForHeart;
    }
}
 
export default Heart;