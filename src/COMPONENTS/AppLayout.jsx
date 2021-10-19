import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SearchComponent from "./Search";
import TemparatureBtn from "./TemperatureButtons";

import GeoLocation from "../GeoLocationCustomHook";

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

    const coords = GeoLocation();
    console.log(coords);

    return (
        <div className={classes.root}>
            <Grid container spacing={4} className={classes.gridcontainer}>
                <Grid item container spacing={1}>
                    <Grid item xs={12} sm={5} className={classes.item}>
                        <Paper className={classes.paper}>
                            <SearchComponent />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={3} className={classes.item}>
                        <Paper className={classes.paper}>location & temp small</Paper>
                    </Grid>
                    <Grid item xs={12} sm={4} className={classes.item}>
                        <Paper className={classes.paper}>
                            <TemparatureBtn />
                        </Paper>
                    </Grid>
                </Grid>

                <Grid item container spacing={1}>
                    {coords.coordinates.lat ?
                        <>
                            <Grid item xs={12} sm={6} className={classes.item}>
                                <Paper className={classes.paper2}>
                                    current weather pppppppppppppppppppppppppppppppppppppp
                                    jkllllllllllllllllllllllllldf
                                    dvzsssssssssssssssssssshhhhhhhhhhhhhhhhhhhhhhhhhhhhhhddcccccccccc
                                    hhhhhhddddddddddddddddddddcbhisssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                                    sjd
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
