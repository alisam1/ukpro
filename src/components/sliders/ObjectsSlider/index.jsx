import React, {useEffect, useState} from 'react'
import Slider from 'react-slick'
import s from './style.module.scss'
import PrevArrow from '../SliderArrows/PrevArrow'
import NextArrow from '../SliderArrows/NextArrow'
// import useMediaQuery from '../../customHooks/useMediaQuery'
import ObjectsSliderItem from './ObjectsSliderItem'

const ObjectsSlider = ({slides}) => {

    const settings = {
        infinite: true,
        // fade: true,
        slidesToShow: 1,
        initialSlide: 1,
        arrows: true,
        dots: false,
        // variableWidth: true,
        nextArrow: <NextArrow lightTheme positionStyles={{
            bottom: '10px',
            left: '370px',
        }}/>,
        prevArrow: <PrevArrow lightTheme positionStyles={{
            bottom: '10px',
            left: '320px',
        }}/>,
        speed: 500,
        responsive: [
            {
                breakpoint: 720,
                settings: {
                    centerMode: false,
                    dots: true,
                    arrows: false,
                    slidesToShow: 1
                }
            },
        ]
    }
    
   const items = slides.map((item, index) => (
            <div className="SliderElement" key={index}>
                <ObjectsSliderItem
                    hotelName = {item.hotelName}
                    stars = {item.stars}
                    address = {item.address}
                    rooms = {item.rooms}
                    date = {item.date}
                    ADR = {item.ADR}
                    OCC = {item.OCC}
                    topHotels = {item.topHotels}
                    tripAdvisor = {item.tripAdvisor}
                    yandex = {item.yandex}
                    imageLink= {item.imageLink}
                    link = {item.link}
            />
            </div>
        )
    )

    return (
        <div className={s.wrapper}>
            <Slider {...settings}>{items}</Slider>
        </div>
    )
}

export default ObjectsSlider
