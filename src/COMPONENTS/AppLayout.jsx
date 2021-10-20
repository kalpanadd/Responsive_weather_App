import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SearchComponent from "./Search";
import TemparatureBtn from "./TemperatureButtons";

import GeoLocation from "../GeoLocationCustomHook";
import { GetTempByCity, GetTempByCoords } from '../API/OpenWeatherMap';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary
    },
    paper2: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        height: "40ch"
    },
    gridcontainer: {
        backgroundColor: "yellow"
    },
    item: {
        backgroundColor: "pink"
    }
}));

export default function AppLayout() {
    const classes = useStyles();
    const [locationsearch, setLocationSearch] = useState("");
    const [locationname, setLocationName] = useState("");
    const [result, setResult] = useState();
    const [unit, setUnit] = useState("metric");

    const coords = GeoLocation();
    console.log(coords);

    useEffect(async () => {
        const res = await GetTempByCoords(coords.coordinates.lat, coords.coordinates.lng, unit)
        console.log(res)
        setResult(res.data);


    }, [coords.coordinates.lat])


    async function handleSubmit(e) {
        e.preventDefault();
        setLocationName(locationsearch);
        const response = await GetTempByCity(locationsearch)
        setLocationSearch("");
        // console.log("on submit" + res.data);
        setResult(response.data);
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={4} className={classes.gridcontainer}>
                <Grid item container spacing={1}>
                    <Grid item xs={12} sm={5} className={classes.item}>
                        <Paper className={classes.paper}>
                            <SearchComponent location={locationsearch}
                                setLocation={(e) => setLocationSearch(e)}
                                handleSubmit={(e) => handleSubmit(e)}
                                locationname={locationname}
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={3} className={classes.item}>
                        {!coords.error && result ? <Paper className={classes.paper}>
                            <h4>{result.name}</h4>
                            <h4>{result.main.temp}</h4>
                        </Paper> : ""}
                    </Grid>
                    <Grid item xs={12} sm={4} className={classes.item}>
                        <Paper className={classes.paper}>
                            <TemparatureBtn />
                        </Paper>
                    </Grid>
                </Grid>

                <Grid item container spacing={1}>
                    {!coords.error && result ?
                        <>
                            <Grid item xs={12} sm={6} className={classes.item}>
                                <Paper className={classes.paper2}>
                                    <h1>Temperature: {result.main.temp}{unit === "metric" ? "℃" : "℉"}</h1>
                                    <Grid item container alignItems="center" justifyContent="space-evenly">
                                        <h4>{result.weather[0].description}</h4>
                                        <img src={`http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`} alt="clouds" />
                                    </Grid>
                                    <h3>Max Temp:{result.main.temp_max}</h3>
                                    <h3>Min Temp:{result.main.temp_min}</h3>
                                    <Grid item container alignItems="center" justifyContent="space-evenly">
                                        <h4>feels like:{result.main.feels_like}</h4>
                                        <h4>humidity:{result.main.humidity}</h4>
                                    </Grid>
                                </Paper>
                            </Grid>

                            <Grid item xs={12} sm={6} className={classes.item}>
                                <Paper className={classes.paper} className={classes.paper2}>
                                    terrain map
                                </Paper>
                            </Grid>
                        </>
                        :
                        <Grid item xs={12} className={classes.item}
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <h1>{coords.error}</h1>
                        </Grid>}
                </Grid>

                <Grid item container spacing={1}>
                    <Grid item xs={12} className={classes.item}>
                        <Paper className={classes.paper}>10days forecast heading</Paper>
                    </Grid>

                    <Grid item xs={12} className={classes.item}>
                        <Paper className={classes.paper}>10days forecast components</Paper>
                    </Grid>
                </Grid>

                <Grid item container spacing={1} className={classes.item}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>each day heading component</Paper>
                    </Grid>
                    <Grid item xs={12} className={classes.item}>
                        <Paper className={classes.paper}>
                            each day individual forecast components
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
