import React from 'react'
import { Link } from "react-router-dom";
import s from './index.module.scss'
import LazyLoadImgComponent from '../LazyLoadImgComponent/LazyLoadImgComponent'

const AboutUsCard = ({cards}) => (
    <>
        {
            cards.map((item, index) => (
                    <article className={s.card} key={index}>
                        <div className={s.topContent}>
                            <div className={s.linkWrap}>
                                {item.pdf && (
                                 <div className={s.linkView}>
                                  <a href={`${item.pdf}`} without rel="noopener noreferrer" target="_blank" className={s.link}>
                                    <button trailingIcon="picture_as_pdf" label="Resume"></button>
                                  </a>
                                </div>
                                )}
                                {item.pdf && (
                                <div className={s.linkDownload}>
                                  <a href={`${item.pdf}`} download={`${item.pdf}`}>
                                    <button trailingIcon="picture_as_pdf" label="Resume"></button>
                                  </a>
                                </div>
                                )}
                                {item.hrefName && (
                                <div className={s.linkWay}>
                                  <Link to ={`/${item.id}`} target="_blank" rel="noreferrer" className={s.link}></Link>
                                </div>
                                )}
                            </div>
                            <div className={s.wrapImage}>
                                <LazyLoadImgComponent
                                    className={s.image}
                                    alt={item.title}
                                    src={item.image}
                                />
                            </div>
                        </div>
                        <div className={s.content}>
                             <h5 className={s.title}>{item.title}</h5>
                            <p className={s.text}>{item.text}</p>
                        </div>
                    </article>
                )
            )
        }
    </>
)

export default AboutUsCard

