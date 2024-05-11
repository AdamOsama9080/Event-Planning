import React from "react";
import "./FormControlInput.css";

const FormControlInput = ({
  label,
  placeholder,
  type,
  onChange,
  handleCreateEvent,
  handleOnChange,
  dir,
}) => {
  return (
    <div className="FormControlInputContainer" dir={dir}>
      <label className="FormControlInputLabel mb-3" htmlFor={label}>
        {label}
      </label>
      <input
        className="FormControlInputInput"
        type={type}
        id={label}
        placeholder={placeholder}
        onChange={onChange ? onChange : handleOnChange ? handleOnChange : null}
        handleCreateEvent={handleCreateEvent}
        required
      />
    </div>
  );
};

export default FormControlInput;
