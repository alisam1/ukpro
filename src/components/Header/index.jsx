import React from "react"
import s from "./index.module.scss"
import Menu from "./Menu"
import PopupContactForm from "../ContactForm/PopupContactForm"
import logo from "../../images/logo1.svg"
import logoPhone from "../../images/phone.svg"
import useMediaQuery from '../customHooks/useMediaQuery'


const Header = () => {
    const [scrolledFromTop, setScrolledFromTop] = React.useState(0);
    const [menuOpened, setMenuOpened] = React.useState(false);
    const [popupOpened, setPopupOpened] = React.useState(false);

    const listenToScroll = () => {
        const scroll = document.body.scrollTop || document.documentElement.scrollTop;
        setScrolledFromTop(scroll)
    };

    React.useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
        return () => window.removeEventListener('scroll', listenToScroll)
    }, []);

    const toggleMenu = () => {
        setMenuOpened(status => !status)
    };

    return (
        <>
            <header className={s.wrapper}>
                <Menu toggleMenu={toggleMenu} menuOpened={menuOpened}/>
                <div className={s.container}>
                    <div className={scrolledFromTop > window.innerHeight / 3 ? `${s.content} ${s.minified}` : s.content}>
                        <div className={menuOpened ? `${s.menuIcon} ${s.opened}` : s.menuIcon} onClick={toggleMenu} onKeyDown={toggleMenu} role='button' tabIndex={0}>
                            <span/>
                            <span/>
                            <span/>
                        </div>
                        <div className={s.logo}>
                            <a href="/"><img src={logo} alt="UPRO"/></a>
                        </div>
                        
                        <nav>
                            <ul className={s.centerBlock}>
                                <li className={s.link}><a href="#">Сотрудничество</a></li>
                                <li className={s.link}><a href="/objects">Объекты</a></li>
                                <li className={s.link}><a href="#">О компании</a></li>
                            </ul>
                        </nav>

                        <div className={s.rightBlock}>
                            <a className={s.number} href="tel:88007771826">8 (800) 777-18-26</a>
                            
                                {useMediaQuery('(max-width: 1200px)')
                                    ? <div className={s.button} role='button' tabIndex={0} >
                                         <a href="tel:88007771826"><img className={s.phoneIcon} src={logoPhone} alt="phone icon"/></a>
                                      </div>
                                    : <div className={s.button} role='button' tabIndex={0} onClick={() => setPopupOpened(true)} onKeyDown={() => setPopupOpened(true)}>Перезвоните мне</div>
                            }
                        </div>

                    </div>
                </div>
                <PopupContactForm popupOpen={popupOpened} setPopupOpen={setPopupOpened}
                                  popupTitleText='Пожалуйста, укажите свои контактные данные'
                                  submitBtnText='Жду звонка'
                                  formName='Контактная форма из шапки сайта'
                                  swalText='очень скоро наши менеджеры свяжутся c Вами'
                                  withName
                                  withPhone/>
            </header>
        </>
    )
};

export default Header;

