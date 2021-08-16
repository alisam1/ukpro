import React from 'react'
import cx from 'classnames'
import s from './style.module.scss'
import Dots from '../../../shared/Dots'

const AdvantagesSliderItem = ({number, text}) => {

    let color

    if (number % 3 === 0) {
        color = s.three
    } else if (number % 3 === 2) {
        color = s.two
    } else {
        color = s.one
    }

    const numberWrapperStyles = cx(s.numberWrapper, color)

    return (
        <div className={s.card}>
            <div className={s.dotsWrapper}>
                <Dots number='3'/>
            </div>
            <div className={numberWrapperStyles}>
                <span className={s.number}>{number<11 ? `0${number}` : number}</span>
            </div>
            <p className={s.text} dangerouslySetInnerHTML={{__html: text}}/>
        </div>
    )
}

export default AdvantagesSliderItem
