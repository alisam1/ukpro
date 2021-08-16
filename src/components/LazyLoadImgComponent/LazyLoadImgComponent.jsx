import React from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const LazyLoadImgComponent = ({
                                  className,
                                  alt,
                                  src,
                                  width,
                                  style,
                                  height
                              }) => ( <LazyLoadImage
        className={className}
        alt={alt}
        effect='opacity'
        height={height}
        src={src}
        style={style}
        width={width}/>
    )

export default LazyLoadImgComponent;
