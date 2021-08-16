import React from "react"
import s from "./index.module.scss"
import logo from "../../images/logo.png"
import instagram from "../../images/socials/instagram.png"
import telegram from "../../images/socials/telegram.png"
import facebook from "../../images/socials/facebook.png"
import linkedin from "../../images/socials/linkedin.png"


const Footer = () => (
    <footer className={s.wrapper}>
        <div className={s.block}>
            <a className={s.logo} href="/"><img src={logo} alt="UPRO"/></a>
            <span className={s.text}>ООО «АПГРЕЙД ПРО»</span>
            <span className={s.text}>Политика конфиденциальности</span>
        </div>
        <div className={s.block}>
            <a className={s.contacts} href="tel:88123094091">+7 (812) 309-40-91</a>
            <a className={s.contacts} href="mailto:welcome@upro.group">welcome@upro.group</a>
            <p className={s.text}>191002, г. Санкт-Петербург, Бизнес-центр «Пять Углов» Загородный пр., д.18/2, офис 28-29 (4-й этаж)</p>
        </div>
        <div className={s.block}>
            <span className={s.text}>Режим работы офиса: будние дни с 10:00 до 19:00.</span>
            <span className={s.text}>Режим работы отдела бронирования: ежедневно с&nbsp;09:00 до&nbsp;21:00.</span>
            <div className={s.socialLinks}>
                <span className={s.socialLinksText}>Социальные сети:</span>
                <div className={s.socialLinksWrapper}>
                    <a className={s.socialLink} href="/mock-adress/instagram" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="instagram"/></a>
                    <a className={s.socialLink} href="/mock-adress/telegram" target="_blank" rel="noopener noreferrer"><img src={telegram} alt="telegram"/></a>
                    <a className={s.socialLink} href="/mock-adress/facebook" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook"/></a>
                    <a className={s.socialLink} href="/mock-adress/linkedin" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin"/></a>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer;