import React from "react"
import s from "./index.module.scss"
import cooperationData from "../../data/cooperation-data"
import CooperationCards from "../../components/CooperationCards"
import ExtendedContactForm from "../../components/ContactForm/ExtendedContactForm"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Cooperation = () => (
    <>
        <section className={s.block}>
          <div className={s.container}>
             <div className={s.content}>
                <Tabs>
                  <TabList>
                    <Tab>Прочту</Tab>
                    <Tab>Нет времени читать?</Tab>
                  </TabList>

                  <TabPanel>
                    <div className={s.wrapper}>
                        <CooperationCards cards={cooperationData}/>
                    </div>
                  </TabPanel>
                  <TabPanel>
                   <div className={s.wrapper}>
                        <ExtendedContactForm
                            lightTheme
                            titleText='Отправим Вам на почту'
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
                  </TabPanel>
                </Tabs>
            </div>
          </div>
        </section>
    </>
)

export default Cooperation;