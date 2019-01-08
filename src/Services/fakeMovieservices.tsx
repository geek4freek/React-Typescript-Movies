

import * as _ from 'lodash';
import Imovies from 'src/Interface/IMovies';


class Movies implements Imovies{
    
  
  public Id : string;
  public dailyrentalRate : number;
  public genre:string;
  public numberinstock : number;
  public publishDate : string;
  public title : string;
  public heart:boolean;
 }

const mov=new Array<Movies>();

mov[0]={Id:"asdasd-act"
,dailyrentalRate:2
,genre:"action"
,heart:true
,numberinstock:5
,publishDate:"2018-05-23"
,title:"naoe"

}

mov[1]={Id:"asdasdd-act"
,dailyrentalRate:2
,genre:"action"
,heart:false
,numberinstock:6
,publishDate:"2018-06-23"
,title:"name2"}

mov[2]={Id:"asd34a-com"
,dailyrentalRate:2
,genre:"comedy"
,heart:true
,numberinstock:5
,publishDate:"2018-05-23"
,title:"naoe"

}

mov[3]={Id:"asdas23-com"
,dailyrentalRate:2
,genre:"comedy"
,heart:false
,numberinstock:6
,publishDate:"2018-06-23"
,title:"name2"}

mov[4]={Id:"asd54asd-thr"
,dailyrentalRate:2
,genre:"thriller"
,heart:true
,numberinstock:5
,publishDate:"2018-05-23"
,title:"naoe"

}

mov[5]={Id:"asd22asdd-thr"
,dailyrentalRate:2
,genre:"thriller"
,heart:false
,numberinstock:6
,publishDate:"2018-06-23"
,title:"name2"}





export function getMovies(){
    
    return mov;
}

export function getMovie(genre:string):Imovies[]{
    
    if(genre==="all genres"){
        return getMovies();
    }
    return _.filter(mov,item=>item.genre===genre);
    

    
}

export function saveMovie(movie:Imovies){
    let movieImdb:Imovies;
    movieImdb=mov.find(m=>m.Id===movie.Id)||{Id:"",dailyrentalRate:0,numberinstock:0,publishDate:"",title:"",heart:false};
    movieImdb.title=movie.title;
    movieImdb.numberinstock=movie.numberinstock;
    movieImdb.dailyrentalRate=movie.dailyrentalRate;
    movieImdb.heart=movie.heart;
    
}