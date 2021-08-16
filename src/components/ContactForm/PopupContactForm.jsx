import React from 'react'
import Rodal from 'rodal'
import ContactForm from "./ContactForm"

const PopupContactForm = ({
                              popupOpen,
                              setPopupOpen,
                              popupTitleText,
                              submitBtnText,
                              formName,
                              withName,
                              withEmail,
                              withPhone,
                              withMessage,
                              withAge,
                              textAreaPlaceholder,
                              swalText,
                              requestUrl = '',
                              withHiddenInput,
                              hiddenInputValue,
                              setNumQuestion,
                              withFile}) => (
        <Rodal className="rodal-popup" visible={popupOpen} onClose={() => setPopupOpen(false)}>
            <p style={{maxWidth: "100%"}} dangerouslySetInnerHTML={{__html: popupTitleText}}/>

            <ContactForm submitBtnText={submitBtnText}
                         requestUrl={requestUrl}
                         formName={formName}
                         withName={withName}
                         withEmail={withEmail}
                         withPhone={withPhone}
                         swalText={swalText}
                         withMessage={withMessage}
                         textAreaPlaceholder={textAreaPlaceholder}
                         withHiddenInput={withHiddenInput}
                         hiddenInputValue={hiddenInputValue}
                         setPopupOpen={setPopupOpen}
                         setNumQuestion={setNumQuestion}
                         withAge={withAge}
                         withFile={withFile}/>
        </Rodal>)

export default PopupContactForm;
