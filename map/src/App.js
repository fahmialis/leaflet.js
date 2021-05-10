
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
                Address:
                  street: ${tesla.address.street},
                  city: ${tesla.address.city},
                  state: ${tesla.address.state},
                  zip: ${tesla.address.zip}
                  country: ${tesla.address.country}
                  region: ${tesla.address.region}
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
