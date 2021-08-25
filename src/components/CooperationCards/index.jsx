import React from 'react'
import { Link } from "react-router-dom";
import s from './index.module.scss'
import LazyLoadImgComponent from '../LazyLoadImgComponent/LazyLoadImgComponent'

const CooperationCards = ({cards}) => (
    <>
     <div className= {`coop-wrapper ${s.wrapper}`}>
        {
            cards.map((item, index) => (
                    <article className={`${item.class}`} key={index}>
                        <Link to ={`/${item.id}`} target="_blank" rel="noreferrer">
                            <div className={s.content}>
                                <h5 className={s.title}>{item.title}</h5>
                                <p className={s.text}>{item.text}</p>
                            </div>
                        </Link>
                    </article>
                )
            )
        }
    </div>
    </>
)

export default CooperationCards

