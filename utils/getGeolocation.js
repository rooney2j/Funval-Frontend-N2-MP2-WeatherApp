const coordenadas_por_defecto = {
    latitud: 44.34,
    longitud: 10.99
};

function success(position) {
    mis_coordenadas.latitud = position.coords.latitude;
    mis_coordenadas.longitud = position.coords.longitude;

    //console.log(mis_coordenadas);
}

function error() {
    alert("Sorry, no position available.");
}

const options = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000,
};

export default function getGeolocation() {
    return new Promise((resolve) => {
        // Función de éxito
        function success(position) {
            const mis_coordenadas = {
                latitud: position.coords.latitude,
                longitud: position.coords.longitude
            };

            resolve(mis_coordenadas);
        }

        // Función de error
        function error() {
            // Si hay error, devolver las coordenadas por defecto
            resolve(coordenadas_por_defecto)
        }

        navigator.geolocation.getCurrentPosition(success, error, options);
    });
}