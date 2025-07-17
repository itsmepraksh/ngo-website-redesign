 
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useRef } from 'react';

import {motion} from "motion/react";
 
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const FreeMap = ({styling}) => {

    const markerRef = useRef(null)
    const popupRef = useRef(null)
    useEffect(() => {

        if(markerRef.current && popupRef.current){
            markerRef.current.openPopup();
        }
    }, []);

    const position = [19.54053465640802, 72.91772052870918];
    
  return (
    <MapContainer className={styling} center={position} zoom={10}  >
      <TileLayer
       
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} ref={markerRef}>
        <Popup ref={popupRef}>
          Baba Bhaskar Pawar Vrudhashram Trust 
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default FreeMap;
