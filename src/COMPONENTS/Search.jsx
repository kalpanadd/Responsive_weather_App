import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: "25ch",
            height: "15ch"
        }
    }
}));

export default function SearchComponent({ location, setLocation, handleSubmit, locationname }) {
    const classes = useStyles();


    return (
        <form noValidate autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
            <TextField
                className={classes.root}
                id="outlined-search"
                label="Search for location"
                type="search"
                variant="outlined"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <h1>{location ? location : locationname}</h1>
        </form>
    );
}
