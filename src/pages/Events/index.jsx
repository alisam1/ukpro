import React from "react"
import s from "./index.module.scss"
import Navigation from "../../components/Navigation"
import EventsCard from '../../components/EventsCard'
import eventData from "../../data/event-data"


const Events = () => (
    <>
        <section className={s.container}>
             <Navigation />
             <div className={s.content}>
               <h2 className={`title ${s.title}`}>События</h2>
                <div className={s.wrapper}>
                        <EventsCard cards={eventData}/>
                </div>
            </div>
        </section>
    </>
)

export default Events;