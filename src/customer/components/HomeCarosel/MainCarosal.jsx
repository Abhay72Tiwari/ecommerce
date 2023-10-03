import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCaroselData';
import 'react-alice-carousel/lib/alice-carousel.css';

const getitem = mainCarouselData.map((i) => <img src={i.Image} className='cursor-pointer -z-10' role='presentation' alt='' />)
const MainCarosel = () => {
    return (< AliceCarousel
        items={getitem}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
    )
    return;
};

export default MainCarosel;