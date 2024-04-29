// ASSETS

// STYLES

// LIBRARIES

// MISC

// COMPONENTS

// CONFIGURATION
type ButtonProps = {
  type: "button" | "submit" | "reset";
  name?: string;
  onClick: (event: React.MouseEvent) => void;
  children?: React.ReactNode;
  className?: string;
};

const CustomButton = (props: ButtonProps) => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <button type={props.type} name={props.name} onClick={props.onClick} className={props.className}>
      {props.children}
    </button>
  );
};

export default CustomButton;
