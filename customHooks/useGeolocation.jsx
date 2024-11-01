import { useState } from "react";

function useGeolocation() {
    const [geolocation, setGeolocation] = useState({ latitud: 44.34, longitud: 10.99 })

    function success(position) {
        setGeolocation({ latitud: position.coords.latitude, longitud: position.coords.longitude })
    }

    function error() {
        alert("Sorry, no position available.");
    }

    const options = {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000,
    };

    function getGeolocation() {
        navigator.geolocation.watchPosition(success, error, options);
    }

    return {
        geolocation,
        getGeolocation
    }
}

export default useGeolocation