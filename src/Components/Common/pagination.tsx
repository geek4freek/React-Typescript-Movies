import * as _ from 'lodash';
import * as React from 'react';

export interface IPaginationProps {
    itemsCount:number;
    pageSize:number;
    onPAgeChange:any;
    currentPage:any;
}

 
const Pagination: React.FunctionComponent<IPaginationProps> = (props) => {
    const {itemsCount,pageSize}=props;
    const pageCount=itemsCount/pageSize;
    const pages=_.range(1,pageCount+1)
    if(pageCount<=1) {return null};

    return ( 
        <nav aria-label="Page navigation example">
        <ul className="pagination">
        {pages.map(page=>(
            <li key={page} className={props.currentPage===page? 'page-item active':'page-item'}><a className="page-link" onClick={props.onPAgeChange.bind(null,page)} >{page}</a></li>
        ))}
        </ul>
    </nav>
     );
}

 
export default Pagination;