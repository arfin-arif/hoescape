import { GoogleMap, Marker, withGoogleMap } from "react-google-maps";

export default function Map() {
  const MapComponent = withGoogleMap((props) => (
    <GoogleMap defaultZoom={10} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      <Marker position={{ lat: -34.397, lng: 150.644 }} />
    </GoogleMap>
  ));

  return (
    <div className="map">
      <MapComponent
        containerElement={<div style={{ height: "400px" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
}
