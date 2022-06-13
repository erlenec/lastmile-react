import './css/collectionButtons.css';
import AssignONOPopup from '../AssignONOPopup';

const Map = () => {
    return (
      
        <div className="button-area">
            <button className='collection-button'>
                Report Cargo Unit
            </button>
            <AssignONOPopup/>
        </div>
      
    );
  };
  
  export default Map;