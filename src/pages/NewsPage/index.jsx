import React from "react"
import s from "./index.module.scss"
import Navigation from "../../components/Navigation"
import NewsFullCard from '../../components/NewsFullCard'
import newsFullData from "../../data/news-full-data"


const NewsPage = ({cards}) => {

    return (
        <>
        <section className={s.container}>
            <Navigation />
                <div className={s.content}>
                <h2 className={`title ${s.title}`}>События</h2>
                    <div className={s.wrapper}>
                            <NewsFullCard cards={newsFullData}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewsPage;
