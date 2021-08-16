import React from "react";
import s from "./index.module.scss";
import Dots from "../Dots"

const Button = ({
                    text = 'Кнопка',
                    subtext = '',
                    children,
                    link = "#",
                    otherWindow = false,
                    onClick,
                    style,
                    notActive = false,
                    withIcon = false,
                    href,
                }) => {
    if (onClick) {
        return <div style={style} onClick={onClick} onKeyDown={onClick} role="button" tabIndex={0} className={notActive ? s.buttonNotActive : s.button}>
        <span>
            {children || text }
        </span>
        </div>
    }
    if (otherWindow) {
        return <a style={style} target="_blank" rel="noreferrer" className={notActive ? s.buttonNotActive : s.button} href={href}>
            <span>
                {children || text}
            </span>
        </a>
    }
    if (withIcon)  
        return (
            <a style={style} href={href} target="_blank" rel="noreferrer" className={s.buttonWithIcon}>
                <div className={s.textWrapper}>
                    <Dots number="3"/>
                    <span>{children || text }</span>
                </div>
                <span style={{fontSize: "0.7em"}}>{subtext}</span>
            </a>)
    return <a style={style} className={notActive ? s.buttonNotActive : s.button} to={link}>
        <span onClick={onClick} onKeyDown={onClick} role="button" tabIndex={0}>
            {children || text }
        </span>
    </a>
};

export default Button;

