import React from "react"
import s from "./index.module.scss"
import useMediaQuery from "../../components/customHooks/useMediaQuery"
import HomePageBanner from "../../components/pageBanners/HomePageBanner"
import CollapseComponent from "../../components/shared/CollapseComponent"
import presentHotelsServisesData from "../../data/present-hotels-servises-data"
import plannedHotelsServisesData from "../../data/planned-hotels-servises-data"
import AdvantagesSlider from "../../components/sliders/AdvantagesSlider"
import advantagesData from "../../data/advantages-data"
import ObjectsSlider from "../../components/sliders/ObjectsSlider"
import objectsData from "../../data/objects-data"
import Dots from '../../components/shared/Dots'
import CalendarComponent from '../../components/shared/CalendarComponent'
import eventsData from "../../data/events-data"
import NewsCards from '../../components/NewsCards'
import newsData from "../../data/news-data"
import MapComponent from "../../components/shared/MapComponent"
import ExtendedContactForm from "../../components/ContactForm/ExtendedContactForm"
import Button from "../../components/shared/Button"

const HomePage = () => (

    <>
        <HomePageBanner/>
        <section className='section colorMedium'>
            <h2 className={`title ${s.title}`}>Наши решения</h2>
            <div className={s.servisesWrapper}>
                <div className={s.servisesItem}>
                    <h4 className={`subtitle ${s.servisesItemTitle}`}>Действующим отелям</h4>
                    <CollapseComponent content={presentHotelsServisesData}/>
                </div>
                <div className={s.servisesItem}>
                    <h4 className={`subtitle ${s.servisesItemTitle}`}>Планируемым отелям</h4>
                    <CollapseComponent content={plannedHotelsServisesData}/>
                </div>
            </div>
        </section>
        <section className={`section colorLight ${s.absoluteSection}`}>
            <h2 className={`title ${s.absoluteTitle}`}>Объекты</h2>
            <ObjectsSlider slides={objectsData} /> 
        </section>
        <section className={`section colorBlack ${s.advantagesSection}`}>
            <div className={s.dotsWrapper}>
                <Dots number='6'/>
            </div>
            <h2 className={`title ${s.title}`}>Почему мы?</h2>
            <h6 className={`subtitle ${s.subtitle}`}><b>5 причин </b>передать отель в управление Upro group</h6>
            <AdvantagesSlider slides={advantagesData} /> 
        </section>
        <section className='section colorDark'>
            <h2 className="title">Календарь мероприятий</h2>
            <CalendarComponent data={eventsData} />
        </section>
        <section className={`section colorMedium ${s.newsSection}`}>
            <h2 className="title">Новости</h2>
            <div className={s.newsWrapper}>
                {
                    useMediaQuery('(max-width: 1300px)') 
                    ?  <NewsCards cards={[newsData[0], newsData[1], newsData[2]]}/> 
                    :  <NewsCards cards={[newsData[0], newsData[1], newsData[2], newsData[3]]}/>
                }
            </div>
            <div className={s.buttonWrapper}>
                <Button text="Смотреть все" href="news" otherWindow/>
            </div>
        </section>
        <section className={`section colorMedium bottomPadding ${s.mapSection}`}>
            <MapComponent/>
            <div className={s.formWrapper}>
                <ExtendedContactForm
                    darkTheme
                    titleText='Остались вопросы?'
                    subtitleText='Введите свои контактные данные и мы с вами свяжемся'
                    formName='Контактная форма "остались вопросы"'
                    swalText='очень скоро наши менеджеры свяжутся c Вами'
                    popupOpened
                    submitBtnText='Отправить'
                    // requestUrl={requestUrl}
                    withName
                    withSurname
                    withEmail
                    withPhone
                    withMessage
                    textAreaPlaceholder='Введите комментарий...'
                    />
            </div>
        </section>
    </>
)

export default HomePage;
