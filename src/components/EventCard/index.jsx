import React from 'react'
import s from './index.module.scss'
import LazyLoadImgComponent from '../LazyLoadImgComponent/LazyLoadImgComponent'
import calendarImg from '../../images/calendar.png'

const EventCard = (event) => (
    <>

                    <article className={s.card}>
                        <LazyLoadImgComponent
                            className={s.image}
                            alt={event.title}
                            src={event.image}
                        />
                        <div className={s.content}>
                            <div className={s.dateWrapper}>
                                <img className={s.calendar} src={calendarImg} alt="calendar"/>
                                <span className={s.date}>{event.date}</span>
                            </div>
                            <h5 className={s.title}>{event.title}</h5>
                            <p className={s.text}>{event.text}</p>
                        </div>
                    </article>
                )
            )

    </>
)

export default EventCard

