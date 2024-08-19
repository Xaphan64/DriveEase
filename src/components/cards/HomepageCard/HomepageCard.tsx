// ASSETS

// STYLES

// LIBRARIES

// MISC
import { VehicleList } from "../VehicleCard/VehicleList";

// COMPONENTS

// CONFIGURATION
type HomepageCardProps = {
  index: number;
};

const HomepageCard: React.FC<HomepageCardProps> = ({ index }) => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <div style={{ width: 50, height: 50 }}>
      <div>{VehicleList[index].brand}</div>

      <div>{VehicleList[index].model}</div>
    </div>
  );
};

export default HomepageCard;
