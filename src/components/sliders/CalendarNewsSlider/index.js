import React from 'react'
import Slider from 'react-slick'
import s from './index.module.scss'
import NextArrow from '../SliderArrows/NextArrow'
import PrevArrow from '../SliderArrows/PrevArrow'
import LazyLoadImgComponent from '../../LazyLoadImgComponent/LazyLoadImgComponent'
import calendarImg from '../../../images/calendar.png'

const CalendarNewsSlider = ({slides}) => {
    const settings = {
        slidesToShow: 6,
        slidesToScroll: 6,
        // centerMode: true,
        initialSlide: 1,
        arrows: true,
        dots: false,
        // variableWidth: true,
        // multiple slides version 
        infinite: false,
        speed: 600,
        nextArrow: <NextArrow positionStyles={{
            bottom: '0',
            left: '-75px',
        }}/>,
        prevArrow: <PrevArrow positionStyles={{
            bottom: '75px',
            left: '-75px',
        }}/>,

        responsive: [
            {
                breakpoint: 2560,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 2048,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1290,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 830,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }

    const items = slides.map((item, index) =>

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

    return (
        <div className={s.container}>
            <div className={s.sliderWrapper}>
                <Slider {...settings}>{items}</Slider>
            </div>
        </div>
    )
}

export default CalendarNewsSlider
