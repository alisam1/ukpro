import React from "react"
import {Map, Placemark, YMaps} from 'react-yandex-maps'
import useMediaQuery from '../../customHooks/useMediaQuery'
import s from "./index.module.scss"

const MapComponent = () => {

const isMobile = useMediaQuery('(max-width: 992px)')

return (
    <div className={s.wrapper}>
        <YMaps preload={false} query={{load: 'control.ZoomControl'}}>
            <Map width='100%'
                 instanceRef={ref => {
                     ref && ref.behaviors.disable('scrollZoom') && (isMobile && ref.behaviors.disable('drag'));
                 }}
                 height='100%'
                 defaultState={{
                     center: isMobile ? [59.925027, 30.344708] : [59.926513, 30.357599],
                     zoom: 15,
                     controls: ['zoomControl']
                 }}>
                <Placemark geometry={[59.928353, 30.341932]}
                           options={{
                               iconLayout: 'default#image',
                               iconImageHref: './placemark.png',
                               iconImageSize: isMobile ? [48, 67] : [62, 83],
                               iconImageOffset: isMobile ? [27, 40] : [0, 0],
                           }}
                />
            </Map>
         </YMaps> 
    </div>
    )
}

export default MapComponent;