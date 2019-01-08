import * as _ from 'lodash';
import * as React from 'react';
import Heart from './Components/Common/Heart';
import Pagination from './Components/Common/pagination';
import Imovies from './Interface/IMovies';
import { getMovie,getMovies } from './Services/fakeMovieservices';
import ListGroup from './utils/listgroup';
import { paginate } from './utils/pagination';


export interface IState {
    movies:Imovies[];
    value:number;
    currentPage:number;
    genrecurrent:string;
}

class Movie extends React.Component<any,IState> {
 
    public state={

        currentPage:1,
        genrecurrent:"all genres",
        movies:getMovies(),
        value:5,
        

        
    };
   constructor(props:any){
       super(props);

   }
   public changetext(e:any){
    this.setState({
        value:e.target.value,
    })    
   }
    public  handleDelete(id:Imovies){
        const removeMovieId=this.state.movies.filter(movies=>movies.Id!==id.Id);
        this.setState({
        movies:removeMovieId
    });
    }
    public onPaginationChange(page:number){
       this.setState({
           currentPage:page,
       });
    }
    public ChangeHeart=(id:string)=>{
        const changeHeart=this.state.movies.map(x=>{
            if(x.Id===id){
                x.heart=x.heart===false?true:false;
            }
            return x;
        });
        this.setState({
            movies:changeHeart
        })

    }
    public handleGenreClick=(genre:string)=>{
   
   
        this.setState({
            currentPage:1,
            genrecurrent:genre,
            movies:getMovie(genre),
            
            
        })

    }
    public handleSort=(sortItem:string)=>{
       this.setState({
           movies:_.orderBy(this.state.movies,sortItem,"asc")
       })

    }


  
    public render() { 
        
        if(this.state.movies.length<=0){
            return(
                <div className="m-5">
                    no movies
                </div>
            )
        }
        const movies=paginate(this.state.movies,this.state.currentPage,4);
        const genre=["all genres","action","comedy","thriller"];
        return ( 
            
     <div style={{paddingTop:100}}>
         <div className="row">
         <div className="col-xs-6 m-5">
             <ListGroup itemName={genre} handleClick={this.handleGenreClick} activelist={this.state.genrecurrent} />
         </div>
         <div className="col-xs-6">
        <table className="table table-bordered header-fixed">
        <thead>
            <tr>
                <th onClick={this.handleSort.bind(null,'Id')}>
                    ID <span className="fa fa-fw fa-sort"/>
                </th>
                <th onClick={this.handleSort.bind(null,'title')}>
                    NAME <span className="fa fa-fw fa-sort"/>
                </th>
                <th onClick={this.handleSort.bind(null,'dailyrentalRate')}>
                    RENTALRATE <span className="fa fa-fw fa-sort"/>
                </th>
                <th onClick={this.handleSort.bind(null,'publishDate')}>
                    PUBLISHDATE <span className="fa fa-fw fa-sort"/>
                </th>
                <th onClick={this.handleSort.bind(null,'numberinstock')}>
                    NUMBERINSTOCK <span className="fa fa-fw fa-sort"/>
                </th>
                <th onClick={this.handleSort.bind(null,'FAVORITE')}>
                    FAVORITE 
                </th>
            </tr>
        </thead>
            {movies.map((z:Imovies)=>
        {
                    return <tbody key={z.Id}><tr>
                        <td>{z.Id}</td>
                        <td>{z.title}</td>
                        <td>{z.dailyrentalRate}</td>
                        <td>{z.publishDate}</td>
                        <td>{z.numberinstock}</td>
                        <td><Heart handleclick={this.ChangeHeart} Id={z.Id} IsFilled={z.heart} /></td>
                        <td><button onClick={this.handleDelete.bind(this, z)} className="btn btn-danger btn-sm">Delete</button></td>
                    </tr></tbody>;
                })}
        </table>
        <Pagination itemsCount={this.state.movies.length} pageSize={4} onPAgeChange={this.onPaginationChange.bind(this,)} currentPage={this.state.currentPage}/>    
     </div>
     </div>
     </div>
            
           
         );
    }
}

export default Movie;