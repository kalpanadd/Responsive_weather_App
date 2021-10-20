import React from 'react'
import Carousel from "react-elastic-carousel";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];
function ForecastDays() {
    return (
        <>
            <Carousel breakPoints={breakPoints}>
                <h1>hi</h1>
            </Carousel>
        </>
    )
}

export default ForecastDays;
