import { useState } from "react";

export const useForm = (initialState: Record<string, any> = {}) => {
  const [inputValues, setInputValues] = useState(initialState);

  const resetForm = () => {
    setInputValues(initialState);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  return {
    inputValues,
    handleInputChange,
    resetForm,
  };
};
