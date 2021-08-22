import  React, { useEffect, useState } from "react"
import s from "./index.module.scss"
import Navigation from "../../components/Navigation"
import PaginationItems from"../../components/Pagination"
import AboutUsCard from '../../components/AboutUsCard'
import aboutUsData from "../../data/aboutus-data"


const SMI = () => {

    const [ aboutUsDataLength, setAboutUsDataLength] = useState([])
    const [currentPage, setCurrentPage]  = useState(1)
    const [aboutPerPage] = useState(6)

    useEffect(() => {
        const getAboutData = () => {
             setAboutUsDataLength(aboutUsData)
             console.log(aboutUsData)
        }

        getAboutData()
    }, [])


    const lastAboutIndex = currentPage * aboutPerPage
    console.log(lastAboutIndex)
    const firstAboutIndex = lastAboutIndex - aboutPerPage
    console.log(firstAboutIndex)
    const currentAbout = aboutUsDataLength.slice(firstAboutIndex, lastAboutIndex)
    console.log(currentAbout)
    const paginate = pageNumber => setCurrentPage(pageNumber)
    console.log(paginate)


    return (
    <>
        <section className={s.container}>
             <Navigation />
             <div className={s.content}>
               <h2 className={`title ${s.title}`}>Мы в СМИ</h2>
                <div className={s.wrapper}>
                        <AboutUsCard cards={currentAbout}/>
                </div>
                <PaginationItems
                aboutPerPage={aboutPerPage}
                totalAbout = {aboutUsDataLength.length}
                paginate={paginate}
            />
            </div>
        </section>
    </>
    )
}

export default SMI;