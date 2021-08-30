import React from 'react'
import { useParams } from 'react-router-dom'
import s from './index.module.scss'
import LazyLoadImgComponent from '../LazyLoadImgComponent/LazyLoadImgComponent'
import calendarImg from '../../images/calendar_icon.svg'

const NewsFullCard = ({cards}) => {

    const { id } = useParams();

    return (
    <>
        {
            cards
            .filter((item) => item.id == id)
            .map((item, index) => (
                    <article className={s.card} key={index}>
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
                    </article>
                )
            )
        }
    </>
    )
}

export default NewsFullCard

