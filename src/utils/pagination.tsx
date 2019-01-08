import * as _ from 'lodash'


export function paginate(items:any,pagenumber:number,pageSize:number):any{
    
    const startIndex=(pagenumber-1)*pageSize;
    return _(items).slice(startIndex).take(pageSize).value();

}