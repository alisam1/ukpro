import React from 'react';
import s from "./index.module.scss"

const PaginationItems = ({aboutPerPage, totalAbout, paginate}) =>  {

    const pageNumber = []

    for(let i= 1; i <= Math.ceil(totalAbout/aboutPerPage); i++) {
        pageNumber.push(i)
    }

    return  (
            <div>
                <ul className={s.pagination}>
                    {
                        pageNumber.map(number => (
                            <li className="item" key={number}>
                                <button className={s.pageLink} onClick={()=> paginate(number)}>
                                    {number}
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
    )
};

export default PaginationItems;