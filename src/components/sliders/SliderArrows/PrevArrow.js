import React from 'react'
import { LeftOutlined } from '@ant-design/icons'
import s from './style.module.scss'
import arrow from '../../../images/slider-arrows/arrow-thin-small-left.png'
import arrowLight from '../../../images/slider-arrows/arrow-light-left.png'


function PrevArrow({positionStyles, onClick, lightTheme}) {
    return (
        <button
            className={!lightTheme ? `${s.prevArrow}` : `${s.prevArrow} ${s.arrowLight}`}
            style={{...positionStyles}}
            onClick={onClick}
            onKeyDown={onClick}
            type="button"
            tabIndex={0}
        >
            {/* <img src={!lightTheme ? arrow : arrowLight}  alt="arrow left"/> */}
            <LeftOutlined className={s.leftArrowImg} style={{color: '#E5A34A'}}/>
            </button>
    )
}

export default PrevArrow