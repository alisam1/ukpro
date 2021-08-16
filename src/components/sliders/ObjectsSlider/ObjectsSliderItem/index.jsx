import React from 'react'
import s from './style.module.scss'
import Button from '../../../shared/Button'
import TripAdvisorLogo from '../../../../images/objects/trip-advisor.png'
import TopHotelsLogo from '../../../../images/objects/top-hotels.png'
import YandexLogo from '../../../../images/objects/yandex.png'

const ObjectsSliderItem = ({          
                                hotelName,
                                address,
                                rooms,
                                date,
                                ADR,
                                OCC,
                                topHotels,
                                tripAdvisor, 
                                yandex,
                                imageLink,
                                stars,
                                link}) => {

    function averageRating () {
        const  arr = []
        topHotels > 0 && arr.push(topHotels)
        tripAdvisor > 0 && arr.push(tripAdvisor)
        yandex > 0 && arr.push(yandex)
        const divider = arr.length
        const result = divider > 0 ? ((topHotels + tripAdvisor + yandex) / +divider).toFixed(1) : ''
        return result
    }
                                
    return (
        <div className={s.card}>
            <div className={s.textContainer}>
                <div className={s.starsWrapper}>
                    {
                        stars && stars.map((index) => (
                            <i className={s.star} key={index}/>
                        ))
                    }
                </div>
                <h4 className={s.hotelName}>{hotelName}</h4>
                <div className={s.feature}>
                    <span className={s.featureName}>Расположение</span>
                    <span className={s.featureContent}>{address}</span>                
                </div>
                <div className={s.featuresWrapper}>
                    <div className={s.feature}>
                        <span className={s.featureName}>Номерной фонд</span>
                        <span className={s.featureContent}>{rooms}</span>                
                    </div>
                    <div className={s.feature}>
                        <span className={s.featureName}>Управляем с:</span>
                        <span className={s.featureContent}>{date}</span>                
                    </div>
                </div>
                <div className={s.buttonWrapper}>
                    <Button otherWindow href={link} text="О проекте"/>
                </div>
            </div>
            <div className={s.picsContainer}>
                <div className={s.hotelImageWrapper}>
                    <img src={imageLink} alt={hotelName} className={s.hotelImage}/>
                    <span className={s.averageRating}>{averageRating()}</span>
                </div>
                <div className={s.ratings}>
                    <div className={s.ratingItem}>
                        <img src={TripAdvisorLogo} alt="topHotels" className={s.ratingAuthor}/>
                        <span className={s.ratingNumber}>{topHotels}</span>
                    </div>
                    <div className={s.ratingItem}>
                        <img src={TopHotelsLogo} alt="tripAdvisor" className={s.ratingAuthor}/>
                        <span className={s.ratingNumber}>{tripAdvisor}</span>
                    </div>
                    <div className={s.ratingItem}>
                        <img src={YandexLogo} alt="yandex" className={s.ratingAuthor}/>
                        <span className={s.ratingNumber}>{yandex}</span>
                    </div>
                </div>
                <div className={s.profitability}>
                    <span className={s.profitabilityHeader}>Доходность номерного фонда</span>
                    <div className={s.profitabilityItem}>
                        <span className={s.profitabilityNumber}>{ADR} &#8381;</span>
                        <span className={s.profitabilityIndicator}>ADR<span className={s.profitabilityInfo}>?</span></span>
                    </div>
                    <div className={s.profitabilityItem}>
                        <span className={s.profitabilityNumber}>{OCC}</span>
                        <span className={s.profitabilityIndicator}>OCC<span className={s.profitabilityInfo}>?</span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ObjectsSliderItem