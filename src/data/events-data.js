import img20210526 from '../images/news/20210526.png'
import img20210514 from '../images/news/20210514.png'
import img20210510 from '../images/news/20210510.png'
import img20210703 from '../images/events/20210703.png'
import img20210715 from '../images/events/20210715.png'



const eventsData = [
    {
        'Date': new Date(2021, 6, 7), 
        'Events': [
            {   date: '3 июня 2021',
                title: 'Москва workshop "MICE&nbsp;Connection 2021"',
                text: 'Проект основан на результатах тщательно проведенной аналитики существующих...',
                image: img20210703,
                link: '/event'
            },
            {   date: '15-17 июня',
                title: 'ХХ юбилейный Всероссийский форум "Здравница-2021"',
                text: 'Значение санаторно-курортного...',
                image: img20210715,
                link: '/event'
            }
        ]
    },
    {
        'Date': new Date(2021, 6, 15), 
        'Events': [
            {
                date: '10 мая 2021',
                title: 'Выпускной вечер на берегу моря',
                text: '21 апреля в Москве, на территории отеля InterContinental...',
                image: img20210510,
                link: '/event'
            }
        ]
    },
    {
        'Date': new Date(2021, 6, 20), 
        'Events': [
            {   date: '26 мая 2021',
                title: '«UPRO GROUP» на ежегодной конференции от делового издания «Ведомости»',
                text: '21 апреля в Москве, на территории отеля InterContinental...',
                image: img20210526,
                link: '/event'
            },
            {   date: '14 мая 2021',
                title: 'Новый проект компании «UPRO GROUP» - отель 4* Новый Берег',
                text: '21 апреля в Москве, на территории отеля InterContinental...',
                image: img20210514,
                link: '/event'
            },
            {   date: '14 мая 2021',
                title: 'Новый проект компании «UPRO GROUP» - отель 4* Новый Берег',
                text: '21 апреля в Москве, на территории отеля InterContinental...',
                image: img20210514,
                link: '/event'
            }
        ]
    },
]

export default eventsData