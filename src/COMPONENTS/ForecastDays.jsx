import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

import Carousel from "react-elastic-carousel";
import Card from './Card';
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        margin: theme.spacing(2),

    },
}))

function ForecastDays({ daily, hourly }) {
    const classes = useStyles();


    const abc = daily.map((each) => {

        // <>
        //     <h4>description:{each.weather[0].description}</h4>
        //     <h4>{date}</h4>
        //  </>
        const description = each.weather[0].description;
        const icon = each.weather[0].icon;
        const temp = each.temp.day;
        let hours = new Date(each.dt * 1000).getHours();
        let AMPM = "pm";
        if (hours > 12) {
            hours = hours - 12;
            AMPM = "am";

        }

        return (
            <Card
                key={Math.floor(Math.random() * 1000)}

                date={hours}
                AMPM={AMPM}
                description={description}
                temp={temp}
            />

        )
    });



    return (
        <Carousel breakPoints={breakPoints}>
            {abc}

        </Carousel>

    )
}

export default ForecastDays;
