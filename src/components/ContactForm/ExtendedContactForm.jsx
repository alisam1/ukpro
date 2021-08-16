import React from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import cx from 'classnames';
import {withRouter} from 'react-router-dom';
import swal from 'sweetalert2';
import 'moment/locale/ru';
import Cleave from 'cleave.js/react';
import {request} from '../../api';
import 'antd/dist/antd.css'
import s from "./index.module.scss"

const Input = ({
                   field,
                   type,
                   labelName,
                   form: {touched, errors},
                   ...props
               }) => {
    const classNames = cx('input', {'success': touched[field.name] && !errors[field.name]}, {'error': touched[field.name] && errors[field.name]})

    return <div className={s.inputWrapper} style={{
        position: field.name === 'hidden' ? 'absolute' : 'relative',
        zIndex: field.name === 'hidden' ? '-100' : 'unset'
    }}>
        <label>
            <span className={s.labelName}>{labelName}</span>
            <input type={type} className={`${classNames} ${s.input}`} {...field} {...props} />
        </label>
        {touched[field.name] &&
        errors[field.name] && <div className={`error ${s.error}`}>{errors[field.name]}</div>}
    </div>
};

const Textarea = ({
                      field,
                      labelName,
                      form: {touched, errors},
                      ...props
                  }) => {
    const classNames = cx('input', {'success': touched[field.name] && !errors[field.name]}, {'error': touched[field.name] && errors[field.name]})
    return <div className={s.textareaWrapper}  style={{position: 'relative'}}>
        <label>
        <span className={s.labelName}>{labelName}</span>
            <textarea rows={6} className={`${classNames} ${s.textarea}`}{...field} {...props} />
        </label>
        {touched[field.name] &&
        errors[field.name] && <div className={`error ${s.error}`}>{errors[field.name]}</div>}
    </div>
};

const NumInput = ({
    field,
    labelName,
    type,
    form: {touched, errors},
    ...props
}) => {
const classNames = cx('input', {'success': touched[field.name] && !errors[field.name]}, {'error': touched[field.name] && errors[field.name]})
return <div style={{position: 'relative'}} className={s.inputWrapper}>
    <label>
    <span className={s.labelName}>{labelName}</span>
        <Cleave placeholder='Номер телефона'
        options={{
        //   prefix: '+7',
        delimiters: [' (', ') ', '-', '-'],
        blocks: [2, 3, 3, 2, 2],
        }}
        className={`${classNames} ${s.input}`}
        {...field} {...props}
        type={type}
        />
    </label>
{touched[field.name] &&
errors[field.name] && <div className={`error ${s.error}`}>{errors[field.name]}</div>}
</div>
};

const ContactForm = ({
                         darkTheme,
                         titleText,
                         subtitleText,
                         submitBtnText,
                         setPopupOpen,
                         withName,
                         withSurname,
                         withEmail,
                         withPhone,
                         withMessage,
                         withHiddenInput,
                         setNumQuestion,
                         swalText = 'Мы получили Вашу заявку 😌',
                         textAreaPlaceholder = 'Введите Ваше сообщение',
                         requestUrl,
                        //  ...props
                     }) => {

    const rePhoneNumber = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

    Yup.addMethod(Yup.string, "phone", function testPhone () {
        return this.test("phone", "Некорректный номер", value =>
            rePhoneNumber.test(value)
        );
    });

    const Schema = Yup.object().shape({
        name: withName ? Yup.string()
            .min(2, 'Слишком короткое имя 😢')
            .max(25, 'Слишком длинное имя 😢')
            .required('Пожалуйста, введите имя') : null,
        surname: withSurname ? Yup.string()
            .min(2, 'Слишком короткая фамилия 😢')
            .max(35, 'Слишком длинная фамилия 😢')
            .required('Пожалуйста, введите фамилию') : null,
        phone: withPhone ? Yup.string()
            .min(11, 'Пожалуйста, в формате +7xxxxxxxxxx')
            .max(16, 'Слишком длинный номер телефона 😢')
            .phone()
            .required('Это поле тоже обязательное') : null,
        email: withEmail ? Yup.string()
            .email('E-mail введен некорректно')
            .required('Это поле тоже обязательное') : null,
        message: withMessage ? Yup.string()
            .min(2, 'Слишком мало букв 😢')
            .max(3000, 'Слишком много букв 😢')
            .required('Пожалуйста, введите текст сообщения') : null,
    });

    const data = {};

    const onSubmit = (values, {resetForm}) => {
        data.form = {
            'url': `${requestUrl || window.location.href}`,
        };
        if (withName) data.inputs = [
            ...data.inputs,
            {
                'alias': 'Имя',
                'value': values.name,
            },
        ];
        if (withSurname) data.inputs = [
            ...data.inputs,
            {
                'alias': 'Фамилия',
                'value': values.surname,
            },
        ];
        if (withPhone) data.inputs = [
            ...data.inputs,
            {
                'alias': 'Номер телефона',
                'value': values.phone,
            },
        ];
        if (withEmail) data.inputs = [
            ...data.inputs,
            {
                'alias': 'E-mail',
                'value': values.email,
            },
        ];
        if (withMessage) data.inputs = [
            ...data.inputs,
            {
                'alias': 'Сообщение',
                'value': values.message,
            },
        ];

        window.ym(46190439, 'reachGoal', 'sendForm');
        request(data)
            .then((response) => {
                if (response.status === 200) {
                    if (values.name) {
                        const name = values.name[0].toUpperCase() + values.name.slice(1);
                        swal.fire({
                            title: `Спасибо, ${name}!`,
                            text: swalText,
                            icon: 'success',
                            confirmButtonText: 'Хорошо'
                        })
                    } else swal.fire({
                        title: `Спасибо!`,
                        text: swalText,
                        icon: 'success',
                        confirmButtonText: 'Хорошо'
                    })
                }
            })
            .catch((err) => {
                swal.fire({
                    title: 'При отправке данных произошла ошибка 🤭',
                    text: 'Мы уже работаем над ее исправлением!',
                    icon: 'error',
                    confirmButtonText: 'Хорошо'
                })
                console.log(err)
            });
        resetForm({})
    };

    const classNames = cx(s.wrapper, darkTheme ? s.dark : null)

    return <Formik
        initialValues={{
            name: '',
            phone: '',
            email: '',
            message: '',
            date: '',
            hidden: '',
        }}
        validationSchema={Schema}
        onSubmit={onSubmit}>
        <div className={classNames}>
            <h3 className={s.title} dangerouslySetInnerHTML={{__html: titleText}}/>
            <p className={s.subtitle} style={{maxWidth: "100%"}} dangerouslySetInnerHTML={{__html: subtitleText}}/>

            <Form>
                {/* <Field component={Input} name='hidden' /> */}
                {withName && <Field component={Input} name='name' placeholder='Иван' labelName='Имя'/>}
                {withSurname && <Field component={Input} name='surname' placeholder='Петров' labelName='Фамилия'/>}
                {withPhone && <Field component={NumInput} name='phone' type='tel' placeholder='+7 (___)-___-__-__' labelName='Телефон'/>}
                {withEmail && <Field component={Input} name='email' type='email' placeholder='example@gmail.com' labelName='E-mail'/>}
                {withMessage && <Field component={Textarea} name='message' placeholder={textAreaPlaceholder} labelName='Комментарий'/>}
                <button type='submit'
                        onClick={() => {
                            setPopupOpen && setPopupOpen(false);
                            withHiddenInput && setNumQuestion(0);
                        }}>{submitBtnText}
                </button>
            </Form>

            <p className={s.poitics}>Нажимая на кнопку вы соглашаетесь с <a className={s.poiticsLink} href="/mock-change-me-address/shared/politics.pdf" target="_blank" rel="noopener noreferrer">политикой конфиденциальности</a></p>
        </div>
    </Formik>
};

export default withRouter(ContactForm)
