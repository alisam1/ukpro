import React from "react";
import s from "./index.module.scss";
import logoPhone from "../../../images/phone.svg";

const Menu = ({ menuOpened, toggleMenu }) => (
    <div className={!menuOpened ? s.menuWrapper : `${s.menuWrapper} ${s.opened}`}>
        <div className={s.flexContainer}>

            <div className={s.col}>
                <div className={s.menuItem} onClick={toggleMenu} onKeyDown={toggleMenu} role="button" tabIndex={0}>
                    <a href="#" className={s.link}>Сотрудничество</a>
                </div>
                <div className={s.menuItem} onClick={toggleMenu} onKeyDown={toggleMenu} role="button" tabIndex={0}>
                    <a href="#" className={s.link}>Объекты</a>
                </div>
                <div className={s.menuItem} onClick={toggleMenu} onKeyDown={toggleMenu} role="button" tabIndex={0}>
                    <a href="#" className={s.link}>О компании</a>
                </div>
            </div>

            <div className={`${s.col}`}>
                <div className={s.callUs}>Свяжитесь с нами</div>
                <div className={s.phone}>
                    <img src={logoPhone} alt="Телефон" />
                    <a href='tel:88007771826'>8 (800) 777-18-26</a>
                </div>
            </div>
        </div>
    </div>
)
export default Menu;