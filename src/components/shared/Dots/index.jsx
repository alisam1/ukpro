import React from "react"
import s from "./index.module.scss"

const Dots = ({number}) => {
    if (number === '3') {
        return (
            <div className={s.three}><div/><div/><div/></div>
        )
    }
    if (number === '6') {
        return (
            <div className={s.six}><div/><div/><div/><div/><div/><div/></div>
        )
    }
    if (number === '9') {
        return (
            <div className={s.nine}><div/><div/><div/><div/><div/><div/><div/><div/><div/></div>
        )
    }
    return null
}
export default Dots