import React from 'react'
import { Link } from "react-router-dom";
import s from './index.module.scss'
import LazyLoadImgComponent from '../LazyLoadImgComponent/LazyLoadImgComponent'
import calendarImg from '../../images/calendar_icon.svg'

const EventsCard = ({cards}) => (
    <>
        {
            cards.map((item, index) => (
                    <article className={s.card} key={index}>
                        <Link to ={`/${item.id}`} target="_blank" rel="noreferrer">
                            <LazyLoadImgComponent
                                className={s.image}
                                alt={item.title}
                                src={item.image}
                            />
                            <div className={s.content}>
                                <div className={s.dateWrapper}>
                                    <img className={s.calendar} src={calendarImg} alt="calendar"/>
                                    <span className={s.date}>{item.date}</span>
                                </div>
                                <h5 className={s.title}>{item.title}</h5>
                                <p className={s.text}>{item.text}</p>
                            </div>
                        </Link>
                    </article>
                )
            )
        }
    </>
)

export default EventsCard

