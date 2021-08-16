import React, { useEffect } from 'react'
import './css/theme2.css'
import caleandar from './js/caleandar'

const CalendarComponent = ({data}) => {

    const events = data

    const settings = {
        Color: '',
        LinkColor: '',
        NavShow: true,
        NavVertical: false,
        NavLocation: '',
        DateTimeShow: true,
        DateTimeFormat: 'mmm, yyyy',
        DatetimeLocation: '',
        DisabledDays: [],
        ModelChange: '',
    }

    useEffect(() => {
        const element = document.getElementById('caleandar');
        if (!document.querySelector('.cld-main')) {
            caleandar(element, events, settings);
        }
    })
    
    return (
        <div id="caleandar"/>
    )
}

export default CalendarComponent