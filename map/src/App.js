
import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import markers from './data/marker.json'

function App() {
  console.log(markers);
  return (
    <MapContainer center={[36.909503, 126.69407466]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        markers.map(marker => {
        return <Marker 
        key={marker.id}
        position={[marker.gps.latitude, marker.gps.longitude]}>
          <Popup>
            {
              [`${marker.gps.latitude}, ${marker.gps.longitude}`]
            }
          </Popup>
        </Marker>
        })
      }
    </MapContainer>
  );
}

export default App;
