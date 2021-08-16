import React from 'react'
import { RightOutlined } from '@ant-design/icons'
import s from './style.module.scss'
import arrow from '../../../images/slider-arrows/arrow-thin-small-right.png'
import arrowLight from '../../../images/slider-arrows/arrow-light-right.png'

function NextArrow({positionStyles, onClick, lightTheme}) {
    return (
        <button
            className={!lightTheme ? `${s.nextArrow}` : `${s.nextArrow} ${s.arrowLight}`}
            style={{...positionStyles}}
            onClick={onClick}
            onKeyDown={onClick}
            type="button"
            tabIndex={0}
        >
            {/* <img src={!lightTheme ? arrow : arrowLight} alt="arrow right"/> */}
            <RightOutlined className={s.rightArrowImg} style={{color: '#E25D40'}}/>

            </button>
    )
}

export default NextArrow