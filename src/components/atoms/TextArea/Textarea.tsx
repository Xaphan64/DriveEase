// ASSETS

// STYLES

// LIBRARIES

// MISC

// COMPONENTS

// CONFIGURATION
type TextareaProps = {
  name: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  defaultValue?: string;
  value?: string;
  className?: string;
  required?: boolean;
};

const CustomTextarea = (props: TextareaProps) => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <textarea
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

export default CustomTextarea;
