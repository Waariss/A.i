import {useMemo} from 'react'
import { GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import './map.css'
export default function Home() {
  const { isLoaded} = useLoadScript({googleMapsApiKey: "AIzaSyCodgEvlSjovONeG5XJFXZ5dgFhgfh2pVg"});
  if (!isLoaded) return <div>Loading..</div>;
  return <Map />;
}
function Map() {
  const center = useMemo(() => ({ lat: 13.813867454539539,lng: 100.65877457675955}), []);
  return (
      <div className='map_container section__padding'>
        <GoogleMap zoom={17} center={center} mapContainerClassName = "map-container" >
          <Marker position={center} />
        </GoogleMap>
      <div className="ai_map-content">
        <h1 className="gradient__text">Map and Directions</h1>
        <h4>A.i.Convergence(Thailand).Co.,LTD</h4>
        <p href="https://goo.gl/maps/VsXTHCeTZppWpiBh7">Address: 132, junction 3-8-13 Navamin 74 Navamin Road Ramintra Khanayoaw Bangkok 10230</p>
        <div className='open'>
          <a href="https://goo.gl/maps/VsXTHCeTZppWpiBh7">Open in maps</a>
        </div>
      </div>
      </div>
  )
}



