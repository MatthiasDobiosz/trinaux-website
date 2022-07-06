import React from "react";
import "./ContactMap.css"
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

const ContactMap = () => {


    return(
        <MapContainer center={[49.013432, 12.101624]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[49.013432, 12.101624]}>
                <Popup>
                Trinaux Hauptquartier
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default ContactMap;
