import React from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import cx from 'classnames';
import {withRouter} from 'react-router-dom';
import swal from 'sweetalert2';
import 'moment/locale/ru';
import locale from 'antd/es/date-picker/locale/ru_RU';
import {DatePicker} from 'antd';
import moment from 'moment'
import Cleave from 'cleave.js/react';
import {request} from '../../api';
import 'antd/dist/antd.css'

const {RangePicker} = DatePicker;

const Input = ({
                   field,
                   type,
                   form: {touched, errors},
                   ...props
               }) => {
    const classNames = cx('input', {'success': touched[field.name] && !errors[field.name]}, {'error': touched[field.name] && errors[field.name]})

    return <div className='inputWrapper' style={{
        position: field.name === 'hidden' ? 'absolute' : 'relative',
        zIndex: field.name === 'hidden' ? '-100' : 'unset'
    }}>
        <input type={type} className={classNames} {...field} {...props} />
        {touched[field.name] &&
        errors[field.name] && <div className='error'>{errors[field.name]}</div>}
    </div>
};

const NumInput = ({
                      field,
                      type,
                      form: {touched, errors},
                      ...props
                  }) => {
    const classNames = cx('input', {'success': touched[field.name] && !errors[field.name]}, {'error': touched[field.name] && errors[field.name]})
    return <div style={{position: 'relative'}} className='inputWrapper'>
        <Cleave placeholder='Номер телефона'
                options={{
                    prefix: '+7',
                    delimiters: [' (', ') ', '-', '-'],
                    blocks: [2, 3, 3, 2, 2],
                }}
                className={classNames}
                {...field} {...props}
                type={type}
        />
        {touched[field.name] &&
        errors[field.name] && <div className='error'>{errors[field.name]}</div>}
    </div>
};

const SelectInput = ({
                         field,
                         form: {touched, errors},
                         ...props
                     }) => {
    const classNames = cx('input', {'success': touched[field.name] && !errors[field.name]}, {'error': touched[field.name] && errors[field.name]})
    return <div style={{position: 'relative'}} className='inputWrapper'>
        <select
            className={classNames}
            {...props}
            {...field}
        >
            children = this.props
        </select>
        {touched[field.name] &&
        errors[field.name] && <div className='error'>{errors[field.name]}</div>}
    </div>
};

const Textarea = ({
                      field,
                      form: {touched, errors},
                      ...props
                  }) => {
    const classNames = cx('input', {'success': touched[field.name] && !errors[field.name]}, {'error': touched[field.name] && errors[field.name]})
    return <div className='inputWrapper' style={{position: 'relative'}}>
        <textarea rows={6} className={classNames} {...field} {...props} />
        {touched[field.name] &&
        errors[field.name] && <div className='error'>{errors[field.name]}</div>}
    </div>
};

const ContactForm = ({
                         submitBtnText,
                         setPopupOpen,
                         withName,
                         withEmail,
                         withPhone,
                         withMessage,
                         withAge,
                         withDate,
                         withHiddenInput,
                         hiddenInputValue,
                         formName,
                         setNumQuestion,
                         swalText = 'Мы получили Вашу заявку 😌',
                         textAreaPlaceholder = 'Введите Ваше сообщение',
                         requestUrl,
                         withFile,
                        //  ...props
                     }) => {

    const rePhoneNumber = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
    const reAge = /^[1-9]?[0-9]{1}$|^100$/;

    Yup.addMethod(Yup.string, "phone", function testPhone () {
        return this.test("phone", "Некорректный номер", value =>
            rePhoneNumber.test(value)
        );
    });

    Yup.addMethod(Yup.string, "age", function testPhone () {
        return this.test("age", "Некорректный возраст", value =>
            reAge.test(value)
        );
    });

    const Schema = Yup.object().shape({
        name: withName ? Yup.string()
            .min(2, 'Слишком короткое имя 😢')
            .max(25, 'Слишком длинное имя 😢')
            .required('Пожалуйста, введите имя') : null,
        phone: withPhone ? Yup.string()
            .min(11, 'Пожалуйста, в формате +7xxxxxxxxxx')
            .max(16, 'Слишком длинный номер телефона 😢')
            .phone()
            .required('Это поле тоже обязательное') : null,
        age: withAge ? Yup.string()
            .min(1, 'Введите корректный возраст')
            .max(2, 'Возраст указан не корректно 😢')
            .age()
            .required('Это поле тоже обязательное') : null,
        date: withDate && Yup.string().required('Пожалуйста, выберите дату'),
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
        if (withFile) data.form = {
            ...data.form,
            'file': '33239e62-a114-4f98-85e0-5b780224698d'
        }
        data.inputs = [
            {
                'alias': 'Источник',
                'value': formName,
            }
        ];
        if (withName) data.inputs = [
            ...data.inputs,
            {
                'alias': 'Имя',
                'value': values.name,
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
        if (withAge) data.inputs = [
            ...data.inputs,
            {
                'alias': 'Возраст',
                'value': values.age,
            },
        ];
        if (withDate) data.inputs = [
            ...data.inputs,
            {
                'alias': 'Дата',
                'value': values.date,
            },
        ];
        if (withHiddenInput) data.inputs = [
            ...data.inputs,
            {
                'alias': 'Ответы на вопросы',
                'value': hiddenInputValue,
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
                    } else if (withFile) {
                        swal.fire({
                            title: `Спасибо!`,
                            text: 'Скачать актуальный прайс Вы можете нажав по кнопке ниже',
                            icon: 'success',
                            confirmButtonText: 'Скачать прайс'
                        })
                            .then(() => {
                                window.open('documents/Прометей_Прайс 2021.jpg')
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
        <Form>
            {/* <Field component={Input} name='hidden' /> */}
            {withName && <Field component={Input} name='name' placeholder='Введите Ваше имя'/>}
            {withEmail && <Field component={Input} name='email' type='text' placeholder='Введите Ваш E-mail'/>}
            {withPhone && <Field component={Input} name='phone' type='text' placeholder='Введите Ваш телефон'/>}
            {withMessage && <Field component={Textarea} name='message' placeholder={textAreaPlaceholder}/>}
            {withAge && <Field component={Input} name='age' type='number' placeholder='Введите возраст'/>}
            <button type='submit'
                    onClick={() => {
                        setPopupOpen && setPopupOpen(false);
                        withHiddenInput && setNumQuestion(0);
                    }}>{submitBtnText}
            </button>
        </Form>
    </Formik>
};

export const BookingContactForm = ({
                                sports = 'initial',
                                setPopupOpen,
                                swalText = 'Мы получили Вашу заявку 😌',
                                requestUrl,
                                ...props
                            }) => {

    const Schema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Слишком короткое ФИО 😢')
            .max(25, 'Слишком длинное ФИО 😢')
            .required('Пожалуйста, введите ФИО'),
        phone: Yup.string()
            .min(18, 'Номер введен неверно')
            .max(18, 'Слишком длинный номер телефона 😢')
            .required('Пожалуйста, введите номер'),
        email: Yup.string()
            .email('E-mail введен некорректно')
            .required('Пожалуйста, введите почту'),
        athletesAmount: Yup.string()
            .min(1, 'Укажите количество спортсменов')
            .max(3, 'Спортсменов не может быть так много')
            .required('Укажите количество спортсменов'),
        coachesAmount: Yup.string()
            .min(1, 'Укажите количество тренеров')
            .max(3, 'Тренеров не может быть так много')
            .required('Укажите количество спортсменов'),

    });

    const data = {};

    const onSubmit = (values, {resetForm}) => {
        console.log(values)
        data.form = {
            'url': `${requestUrl || window.location.href}`,
        };
        data.inputs = [
            {
                'alias': 'Источник',
                'value': `Форма заявки на спортсборы на странице ${window.location.href}`,
            },
            {
                'alias': 'Даты',
                'value': `${selectedDate[0]} – ${selectedDate[1]}`,
            },
            {
                'alias': 'ФИО',
                'value': values.name,
            },
            {
                'alias': 'Телефон',
                'value': values.phone,
            },
            {
                'alias': 'Email',
                'value': values.email,
            },
            {
                'alias': 'Кол-во спортсменов',
                'value': values.athletesAmount,
            },
            {
                'alias': 'Кол-во тренеров',
                'value': values.coachesAmount,
            },
        ];

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

    const [selectedDate, setSelectedDate] = React.useState(['01.06.2021', '01.07.2021'])
    const [moments, setMoments] = React.useState([])

    const onDateChange = (thisMoment, dateStrings) => {
        setSelectedDate(dateStrings)
        setMoments(thisMoment)
        console.log(selectedDate)
    }

    return <Formik
        initialValues={{
            sports,
            name: '',
            phone: '',
            email: '',
            athletesAmount: '',
            coachesAmount: '',
        }}
        validationSchema={Schema}
        onSubmit={onSubmit}>
        <Form>
            <RangePicker locale={locale}
                         onChange={onDateChange}
                         defaultValue={[moment('01.06.2021', 'DD.MM.YYYY'), moment('01.07.2021', 'DD.MM.YYYY')]}
                         format='DD.MM.YYYY'/>

            <Field component={Input} name='name' placeholder='ФИО'/>
            <Field component={NumInput} name='phone' placeholder='Ваш номер телефона'/>
            <Field component={Input} name='email' type='text' placeholder='Ваш e-mail'/>
            <Field component={Input} name='athletesAmount' type='number' placeholder='Количество спортсменов'/>
            <Field component={Input} name='coachesAmount' type='number' placeholder='Количество тренеров'/>
            <Field component={SelectInput} name='sports'>
                <option value='initial' disabled>Выберите вид спорта</option>
                <option value='Плавание'>Плавание</option>
                <option value='Футбол'>Футбол</option>
                <option value='Гимнастика'>Гимнастика</option>
                <option value='Единоборства'>Единоборства</option>
                <option value='Баскетбол'>Баскетбол</option>
                <option value='Волеxйбол'>Волейбол</option>
                <option value='Гандбол'>Гандбол</option>
            </Field>

            <button type='submit'
                    onClick={() => {
                        setPopupOpen && setPopupOpen(false);
                    }}>Отправить заявку
            </button>
        </Form>
    </Formik>
};


export default withRouter(ContactForm)
