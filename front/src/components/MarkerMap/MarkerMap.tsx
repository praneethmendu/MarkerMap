import "./MarkerMap.css";
import React, { useState, useEffect } from "react";
import { Marker, useMapEvents, TileLayer } from "react-leaflet";
import { Places } from "../../model/place";
import MarkerPopup from "../MarkerPopup/MarkerPopup";
import { PlaceApi } from "../../api/api";

const MarkerMap: React.FC = () => {
  const placeApi = new PlaceApi();
  const [places, setPlaces] = useState<Places>([]);

  useMapEvents({
    click(clickEvent) {
      placeApi
        .addPlace({
          name: `pl${Math.floor(Date.now() / 1000)}`,
          latitude: clickEvent.latlng.lat,
          longitude: clickEvent.latlng.lng,
        })
        .then((_) => {
          refreshPlaces();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  useEffect(() => {
    refreshPlaces();
  },[]);

  function refreshPlaces(): void {
    placeApi.getAllPlaces().then((allPlaces) => {
      setPlaces(allPlaces);
    });
  }

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places
        .filter((place) => place.latitude && place.longitude)
        .map((place) => (
          <Marker
            position={[place.latitude || 0, place.longitude || 0]}
            key={place.UUID}>
            <MarkerPopup place={place} refreshPlaces={refreshPlaces} />
          </Marker>
        ))}
    </>
  );
};

export default MarkerMap;
