// ASSETS

// STYLES

// LIBRARIES

// MISC

// COMPONENTS
import HomepageCard from "../../../../../cards/HomepageCard/HomepageCard";

// CONFIGURATION
type VehicleSpecsProps = {
  vehicleTab: number;
};

const VehicleSpecs: React.FC<VehicleSpecsProps> = ({ vehicleTab }) => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <>
      {vehicleTab === 0 && <HomepageCard index={vehicleTab} />}

      {vehicleTab === 1 && <HomepageCard index={vehicleTab} />}

      {vehicleTab === 2 && <HomepageCard index={vehicleTab} />}

      {vehicleTab === 3 && <HomepageCard index={vehicleTab} />}

      {vehicleTab === 4 && <HomepageCard index={vehicleTab} />}

      {vehicleTab === 5 && <HomepageCard index={vehicleTab} />}

      {vehicleTab === 6 && <HomepageCard index={vehicleTab} />}

      {vehicleTab === 7 && <HomepageCard index={vehicleTab} />}

      {vehicleTab === 8 && <HomepageCard index={vehicleTab} />}

      {vehicleTab === 9 && <HomepageCard index={vehicleTab} />}

      {vehicleTab === 10 && <HomepageCard index={vehicleTab} />}

      {vehicleTab === 11 && <HomepageCard index={vehicleTab} />}
    </>
  );
};

export default VehicleSpecs;
