import { useState, useEffect } from 'react';

function GeoLocation() {

    const [coordinates, setCoordinates] = useState({ lat: null, lng: null })
    const [error, setError] = useState(null);

    function successcallback(position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        setCoordinates({ lat, lng })
    }

    function errorcallback(error) {
        if (!error.message)
            setError('location is not supported in your browser')
        setError(error.message);

    }
    useEffect(() => {
        if (navigator.geolocation)
            navigator.geolocation.getCurrentPosition(successcallback, errorcallback)
        else
            errorcallback()
    }, [])
    return { coordinates, error }
}

export default GeoLocation;