import React, {useEffect, useState} from 'react'
import Slider from 'react-slick'
import s from './style.module.scss'
import PrevArrow from '../SliderArrows/PrevArrow'
import NextArrow from '../SliderArrows/NextArrow'
// import useMediaQuery from '../../customHooks/useMediaQuery'
import AdvantagesSliderItem from './AdvantagesSliderItem'

const AdvantagesSlider = ({slides}) => {

    const settings = {
        infinite: true,
        slidesToShow: 3,
        // centerMode: true,
        initialSlide: 0,
        arrows: true,
        dots: false,
        variableWidth: true,
        nextArrow: <NextArrow positionStyles={{
            bottom: '-5px',
            left: '50px',
        }}/>,
        prevArrow: <PrevArrow positionStyles={{
            bottom: '-5px',
        }}/>,
        speed: 500,
        responsive: [
            {
                breakpoint: 720,
                settings: {
                    centerMode: false,
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                    initialSlide: 0,
                }
            },
        ]
    }
    
   const items = slides.map((item, index) => (
            <div className="SliderElement" key={index}>
                <AdvantagesSliderItem
                    number={item.number}
                    text={item.text}
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

export default AdvantagesSlider
