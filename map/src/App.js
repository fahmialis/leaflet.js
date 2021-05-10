
import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import markers from './data/marker.json'
import teslaData from './data/tesla-station.json'

function App() {
  const UKStations = teslaData.filter(tesla => tesla.address.country === 'United Kingdom')
  return (
    <MapContainer center={[53.314145,-1.281904]} zoom={8} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        UKStations.map(tesla => {
        return <Marker 
        // eventHandlers={onclick={()=>click()}}
        key={tesla.id}
        position={[tesla.gps.latitude, tesla.gps.longitude]}>
          <Popup position={[tesla.gps.latitude, tesla.gps.longitude]}>
            <div>
              <h3>{
                `Name : ${tesla.name},
                Street: ${tesla.address.street},
                City: ${tesla.address.city},
                State: ${tesla.address.state},
                ZIP Code: ${tesla.address.zip},
                Country: ${tesla.address.country},
                Region: ${tesla.address.region}
                `
              }</h3>
            </div>
          </Popup>
        </Marker>
        })
      }
    </MapContainer>
  );
}

export default App;
