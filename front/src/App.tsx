import React from "react";
import "./App.css";
import MarkerMap from "./components/MarkerMap/MarkerMap";
import { MapContainer } from "react-leaflet";

function App() {
  return (
    <div className="App">
      <div className="map-container">
        <MapContainer
          center={[25, 0]}
          zoom={1.5}
          scrollWheelZoom={false}
          className="full-size">
          <MarkerMap />
        </MapContainer>
      </div>
      <div className="bottom-title">Marker Map</div>
      <div className="bottom-credit">
        <a href="http://mendu.netlify.app/">made by praneeth mendu</a>
      </div>
    </div>
  );
}

export default App;
