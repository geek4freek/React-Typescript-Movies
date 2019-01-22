import * as React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import  http from './Common/httpService';


export interface IusersState {
    users:IuserData[]
}
interface IuserData{
id:number,title:string,body:string
}
 
class Users extends React.Component<{}, IusersState> {
     public state = { 
        users:[]
     }
   
public async componentDidMount() {
    const {data:posts}= await  http.get('https://localhost:44390/api/values');
    this.setState({
        users:posts
    })

}
public savedata= async ()=>{
    let obj:IuserData;
    obj={body:"asda",id:2,title:"asdasd"};
    const {data:post}=await http.post('https://localhost:44390/api/values',obj)
    const newData=[post,...this.state.users];
    this.setState({
        users:newData
    });
    toast.success('success');
   
}

public deleteData=async(post:number)=>{

    const orginalPost=this.state.users;
    this.setState({
        users:[]
    });
    try{
       await http.delete('https://localhost:44390/api/values/'+post)
       toast.error('delete failed');
        
        
    }catch(ex){
// tslint:disable-next-line: no-console
        console.log(ex)
        toast.error('delete failed');
        this.setState({
            users:orginalPost
        });
    }

}

  
    public render() { 
        return (
             <div style={{paddingTop:100}}>
             <ToastContainer/>
            <button name="add" className="btn btn-primary" onClick={this.savedata}>Add</button>
            <button name="delete" className="btn btn-primary" onClick={this.deleteData.bind(null,1)}>Delete</button>
                <table className="table">
                <thead>
                <tr>
                 <th>id</th>
                 <th>Name</th>
                 <th>body</th>
                </tr>
                </thead>
                <tbody>
                    {this.state.users.map((data:IuserData)=>{
                       return(
                        <tr key={data.id} >
                        <td>{data.id}</td>
                        <td>{data.title}</td>
                        <td>{data.body}</td>
                        </tr>
                       
                       
                       );
                       
                    })}
                   
                </tbody>

                </table>
              
            </div>
                
          );
    }
}
 
export default Users;