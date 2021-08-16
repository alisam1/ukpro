import React from "react"
import s from "./index.module.scss"
import Dots from "../../shared/Dots"
import Button from "../../shared/Button"
import BannerSlider from "../../sliders/BannerSlider"
import img from "../../../images/home-page/slide-guests.png"
import two from "../../../images/home-page/slide-else.jpg"
import three from "../../../images/home-page/slide-else2.jpg"

const photos = [
    {
        img,
        numbers: '150 тысяч',
        description: 'довольных гостей в год'
    },
    {
        img: `${two}`,
        numbers: 'Template',
        description: 'template text template'
    },
    {
        img: `${three}`,
        numbers: 'Template',
        description: 'template text template'
    }
]

const HomePageBanner = () => (
    <div className={s.banner}>
        <div className={s.wrapper}>
            <div className={s.textBlock}>
                <div className={s.nineDotsWrapper}>
                    <Dots number="9"/>
                </div>
                <h1 className={s.title}>Гостиничная управляющая компания</h1>
                <h6 className={s.subtitle}>Высокая оценка гостей или повыщение доходности?</h6>
                <h6 className={s.subtitle}>Возьмем ваш объект в аренду или в управление</h6>
                <div className={s.buttonWrapper}>
                    <Button withIcon="true" text="Скачать чек-лист" subtext="чтобы оценить состояние своего объекта"/>
                </div>
            </div>
            <div className={s.sliderBlock}>
                <BannerSlider slides={photos}/>
            </div>
            <div className={s.sixDotsWrapper}>
                    <Dots number="6"/>
            </div>
        </div>
    </div>
)
export default HomePageBanner





























































//                             <div className={s.menuItem} onClick={toggleMenu}>
//                                 {/* checkactive is for cheking main root page */}
//                                 <NavLink isActive={checkActive} to={""} onClick={(e) => {
//                                     handleLinkClick(e)
//                                     document.querySelector('#sports').scrollIntoView({behavior: 'smooth', block: 'start'})
//                                 }}>
//                                     Спортивные сборы
//                                 </NavLink>
//                             </div>

//                             <div className={s.menuItem} onClick={toggleMenu}>
//                                 {/* checkactive is for cheking main root page */}
//                                 <NavLink isActive={checkActive} to={""} onClick={(e) => {
//                                     handleLinkClick(e)
//                                     document.querySelector('#gyms').scrollIntoView({behavior: 'smooth', block: 'start'})
//                                 }}>
//                                     Спортсооружения
//                                 </NavLink>
//                             </div>
//                         </div>
//                         </div>



//                         <div className={s.col}>
//                         <div className={s.menuItem} onClick={toggleMenu}>
//                                 <NavLink isActive={checkActive}  to={"/documents"}>
//                                 Инфраструктура
//                                 </NavLink>
//                                 <img src={arrowIcon} onClick={toggleInfrastructure}
//                                      className={!infrastructureOpened ? s.arrow + ' ' + s.rotated : s.arrow}
//                                      alt=""/>

//                             <div className={s.list}>        



//                             <div className={s.menuItem} onClick={toggleMenu}>
//                                 <NavLink isActive={checkActive}  to={"/documents"}>
//                                     Проживание
//                                 </NavLink>
//                             </div>
//                             <div className={s.menuItem} onClick={toggleMenu}>
//                                 <NavLink isActive={checkActive}  to={"/documents"}>
//                                     Питание
//                                 </NavLink>
//                             </div>

//                             <div className={s.listItem} onClick={toggleMenu}>
//                                 <NavLink isActive={checkActive}  to={"/documents"}>
//                                     Волейбольная площадка на пляже
//                                 </NavLink>
//                             </div>


//                             <div className={s.menuItem} onClick={toggleMenu}>
//                                 <NavLink isActive={checkActive}  to={"/documents"}>
//                                     Открытые спортивные площадки
//                                 </NavLink>
//                             </div>

//                             <div className={s.menuItem} onClick={toggleMenu}>
//                                 <NavLink isActive={checkActive}  to={"/documents"}>
//                                     Залы для единоборств
//                                 </NavLink>
//                             </div>

//                             <div className={s.menuItem} onClick={toggleMenu}>
//                                 <NavLink isActive={checkActive}  to={"/documents"}>
//                                     Гимнастический зал
//                                 </NavLink>
//                             </div>

//                             <div className={s.menuItem} onClick={toggleMenu}>
//                                 <NavLink isActive={checkActive}  to={"/documents"}>
//                                     Футбольное поле
//                                 </NavLink>
//                             </div>

//                             <div className={s.menuItem} onClick={toggleMenu}>
//                                 <NavLink isActive={checkActive}  to={"/documents"}>
//                                     Учебные классы
//                                 </NavLink>
//                             </div>

//                             <div className={s.menuItem} onClick={toggleMenu}>
//                                 <NavLink isActive={checkActive}  to={"/documents"}>
//                                     Зал для танцев
//                                 </NavLink>
//                             </div>

//                             <div className={s.menuItem} onClick={toggleMenu}>
//                                 <NavLink isActive={checkActive}  to={"/documents"}>
//                                     Летняя сцена
//                                 </NavLink>
//                             </div>

//                             <div className={s.menuItem} onClick={toggleMenu}>
//                                 <NavLink isActive={checkActive}  to={"/documents"}>
//                                     Актовый зал
//                                 </NavLink>
//                             </div>

//                             <div className={s.menuItem} onClick={toggleMenu}>
//                                 <NavLink isActive={checkActive}  to={"/documents"}>
//                                     Зал для игр
//                                 </NavLink>
//                             </div>

//                             <div className={s.menuItem} onClick={toggleMenu}>
//                                 <NavLink isActive={checkActive}  to={"/documents"}>
//                                     Залы ЛФК
//                                 </NavLink>
//                             </div>
//                         <div className={s.menuItem} onClick={toggleMenu}>
//                                 <NavLink isActive={checkActive}  to={"/documents"}>
//                                     Басссейн
//                                 </NavLink>
//                             </div>

//                             <div className={s.menuItem} onClick={toggleMenu}>
//                                 <NavLink isActive={checkActive}  to={"/documents"}>
//                                     Пляж
//                                 </NavLink>
//                             </div>
//                             </div>
//                             </div>



//                             <div className={s.col}>
//                         <div className={s.menuItem} onClick={toggleMenu}>
//                                 <NavLink isActive={checkActive}  to={"/documents"}>
//                                 О комплексе
//                                 </NavLink>
//                                 <img src={arrowIcon} onClick={toggleInfrastructure}
//                                      className={!infrastructureOpened ? s.arrow + ' ' + s.rotated : s.arrow}
//                                      alt=""/>

//                             <div className={s.list}>  

//                             <div className={s.menuItem} onClick={toggleMenu}>
//                                 <NavLink isActive={checkActive}  to={"/documents"}>
//                                     Отзывы
//                                 </NavLink>
//                             </div>

//                             <div className={s.menuItem} onClick={toggleMenu}>
//                                 <NavLink isActive={checkActive}  to={"/documents"}>
//                                     Вопросы и ответы
//                                 </NavLink>
//                             </div>

//                             <div className={s.menuItem} onClick={toggleMenu}>
//                                 <NavLink isActive={checkActive}  to={"/documents"}>
//                                     Официальные документы
//                                 </NavLink>
//                             </div>
//                             </div>
//                             </div>

//                             <div className={s.col}>
//                             <div className={s.menuItem} onClick={toggleMenu}>
//                                 <NavLink isActive={checkActive} to={""} onClick={(e) => {
//                                     handleLinkClick(e)
//                                     document.querySelector('#aboutCenter').scrollIntoView({behavior: 'smooth', block: 'start'})
//                                 }}>
//                                     О центре
//                                 </NavLink>
//                             </div>



//                             <div className={s.col}>
//                             <div className={s.menuItem} onClick={toggleMenu}>
//                                 <NavLink to={""} onClick={(e) => {
//                                     handleLinkClick(e)
//                                     document.querySelector('#footer').scrollIntoView({behavior: 'smooth', block: 'start'})
//                                 }}>
//                                     Контакты
//                                 </NavLink>
//                             </div>
//                             </div>



// <div className={`${s.col}`}>
// <div className={s.callUs}>Свяжитесь с нами</div>
// <div className={s.location}>
//     <img className={s.adressImg} src={adressImg} alt="Наш адрес"/>
// </div>
// <div className={s.phone}>
//     <img src={logoPhone} alt="Телефон"/>
//     <a href='tel:83652887177'>8 (365) 288-71-77</a>
// </div>
// <div className={s.icons}>
//     <a target={'_blank'} href="https://www.instagram.com/prometey82"><img src={logoInst} alt="Instagram"/></a>
//     <a target={'_blank'} href="https://www.facebook.com/prometey82"><img src={logoFb} alt="Facebook"/></a>
//     <a target={'_blank'} href="https://ok.ru/profile/587946776382 "><img src={logoOK} style={{width: '11px', objectFit: 'cover'}} alt="Одноклассники"/></a>
//     <a target={'_blank'} href="https://vk.com/prometey_82"><img src={logoVk} alt="ВК"/></a>
// </div>

// </div>


// </div>


// </div>

// };

// export default Menu;