import'./css/map.css';
import mappic from '../assets/routemap.png';

const Map = () => {
    return (
      
        <div className="map-area scrollable">
            <img className="map" src={mappic} alt="Not Available" /> 
        </div>
      
    );
  };
  
  export default Map;