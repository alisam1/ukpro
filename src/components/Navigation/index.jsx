import React from 'react';
import { NavLink } from "react-router-dom";
import s from "./index.module.scss"

const Navigation = () => (
        <>
            <ul className={s.list}>
                <li className={s.item}>
                    <NavLink to='/Events' className={s.link} activeClassName={s.active}>События</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/Presentation' className={s.link} activeClassName={s.active}>Презентации</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/SMI' className={s.link} activeClassName={s.active}>Мы в СМИ</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/Galery' className={s.link} activeClassName={s.active}>Галерея</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/Helpful' className={s.link} activeClassName={s.active}>Полезное</NavLink>
                </li>
            </ul>
     </>
)

export default Navigation;