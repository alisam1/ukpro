import React from 'react'
import Slider from 'react-slick'
import s from './index.module.scss'
import NextArrow from '../SliderArrows/NextArrow'
import PrevArrow from '../SliderArrows/PrevArrow'
// import {LazyLoadImage} from 'react-lazy-load-image-component'
// import img from "../../../images/home-page/slide-guests.png"

const BannerSlider = ({
                            title,
                            slides,
                        }) => {
    const settings = {
        className: 'center',
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        variableWidth: true,
        speed: 600,
        nextArrow: <NextArrow positionStyles={{
            bottom: '0',
            left: '-75px',
        }}/>,
        prevArrow: <PrevArrow positionStyles={{
            bottom: '75px',
            left: '-75px',
        }}/>,
        afterChange: (index) => {
            const slide = document.querySelector(`[data-index="${index}"`)
            const card = slide.querySelector(`#index${index}`)
            card.classList.add(s.thisCard)
        },
        beforeChange: (index) => {
            const slide = document.querySelector(`[data-index="${index}"`)
            const card = slide.querySelector(`#index${index}`)
            card.classList.remove(s.thisCard)
        },
        responsive: [
            {
                breakpoint: 520,
                settings: {
                    className: false,
                    // fade: true,
                    // centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // infinite: false,
                    variableWidth: false,
                    nextArrow: <NextArrow positionStyles={{
                        bottom: '0px',
                        left: '-40px',
                    }}/>,
                    prevArrow: <PrevArrow positionStyles={{
                        bottom: '50px',
                        left: '-40px',
                    }}/>,
                }
            }
        ]
    }

    const items = slides.map(({img, numbers, description}, index) =>
        <div key={index} className={s.slide}>
            <img className={s.photo} alt={title} src={img}/>
            <div id={`index${index}`} className={s.card} style={{transitionDuration: '700ms'}}>                <span className={s.numbers}>{numbers}</span>
                <span className={s.description}>{description}</span>
            </div>
        </div>
    )

    return (
        <div id="gallery" className={s.wrapper}>
            <div className={s.container}>
                <div className={s.sliderWrapper}>
                    <Slider {...settings}>{items}</Slider>
                </div>
            </div>
        </div>
    )
}

export default BannerSlider
