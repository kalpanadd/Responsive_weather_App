import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: "25ch",
            height: "15ch"
        }
    }
}));

export default function SearchComponent() {
    const classes = useStyles();
    const [locationsearch, setLocationSearch] = useState("");
    const [locationname, setLocationName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        setLocationName(locationsearch);
        setLocationSearch("");
    }

    return (
        <form noValidate autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
            <TextField
                className={classes.root}
                id="outlined-search"
                label="Search for location"
                type="search"
                variant="outlined"
                value={locationsearch}
                onChange={(e) => setLocationSearch(e.target.value)}
            />
            <h1>{locationsearch ? locationsearch : locationname}</h1>
        </form>
    );
}
