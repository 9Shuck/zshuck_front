import { MapContainer, TileLayer, Popup, Marker, Circle } from 'react-leaflet'
import { useEffect, useState } from 'react';
import "leaflet/dist/leaflet.css";


function Map() {
    const position = [41.4036, 2.173504]
    const fillBlueOptions = { fillColor: "#0484D6" };
    const [map, setMap] = useState(null);

    useEffect(() => {
        if (map) {
            setInterval(function () {
                map.invalidateSize();
            }, 100);
        }
    }, [map]);
 
    return(
        <div>
            <MapContainer center={position} zoom={14} scrollWheelZoom={false} style={{ height: "400px", width: "100%" }} whenCreated={setMap}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Circle center={position} radius={600} color="#ef7146"/>
        </MapContainer>
            </div>
        )
}


export default Map;