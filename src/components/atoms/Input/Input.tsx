// ASSETS

// STYLES

// LIBRARIES

// MISC

// COMPONENTS

// CONFIGURATION
type InputProps = {
  type: string;
  name: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  value?: string;
  className?: string;
  required?: boolean;
};

const CustomInput = (props: InputProps) => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      onChange={props.onChange}
      defaultValue={props.defaultValue}
      value={props.value}
      className={props.className}
      required={props.required}
    />
  );
};

export default CustomInput;
