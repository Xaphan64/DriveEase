// ASSETS

import { VehicleButton } from "../../../../../atoms/Button/Button.style";

// STYLES

// LIBRARIES

// MISC

// COMPONENTS

// CONFIGURATION
type VehicleButtonsProps = {
  vehicleTab: number;
  handleSwitchTab: (index: number) => void;
};

const VehicleButtons: React.FC<VehicleButtonsProps> = ({ vehicleTab, handleSwitchTab }) => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <>
      <VehicleButton type="button" onClick={() => handleSwitchTab(0)} width="250px" isActive={vehicleTab === 0}>
        Toyota Corolla
      </VehicleButton>

      <VehicleButton type="button" onClick={() => handleSwitchTab(1)} width="250px" isActive={vehicleTab === 1}>
        Nissan Altima
      </VehicleButton>

      <VehicleButton type="button" onClick={() => handleSwitchTab(2)} width="250px" isActive={vehicleTab === 2}>
        Chevrolet Equinox
      </VehicleButton>

      <VehicleButton type="button" onClick={() => handleSwitchTab(3)} width="250px" isActive={vehicleTab === 3}>
        Ford Fusion
      </VehicleButton>

      <VehicleButton type="button" onClick={() => handleSwitchTab(4)} width="250px" isActive={vehicleTab === 4}>
        Honda CR-V
      </VehicleButton>

      <VehicleButton type="button" onClick={() => handleSwitchTab(5)} width="250px" isActive={vehicleTab === 5}>
        Toyota Camry
      </VehicleButton>

      <VehicleButton type="button" onClick={() => handleSwitchTab(6)} width="250px" isActive={vehicleTab === 6}>
        Kia Optima
      </VehicleButton>

      <VehicleButton type="button" onClick={() => handleSwitchTab(7)} width="250px" isActive={vehicleTab === 7}>
        Jeep Cherokee
      </VehicleButton>

      <VehicleButton type="button" onClick={() => handleSwitchTab(8)} width="250px" isActive={vehicleTab === 8}>
        Hyunday Sonata
      </VehicleButton>

      <VehicleButton type="button" onClick={() => handleSwitchTab(9)} width="250px" isActive={vehicleTab === 9}>
        Subaru Outback
      </VehicleButton>

      <VehicleButton type="button" onClick={() => handleSwitchTab(10)} width="250px" isActive={vehicleTab === 10}>
        Volkswagen Jetta
      </VehicleButton>

      <VehicleButton type="button" onClick={() => handleSwitchTab(11)} width="250px" isActive={vehicleTab === 11}>
        Nissan Quest
      </VehicleButton>
    </>
  );
};

export default VehicleButtons;
