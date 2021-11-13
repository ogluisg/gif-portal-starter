import React from "react";

export const InputField = ({
  onSubmit,
  buttonLabel,
  placeholder,
  inputValue,
  onChangeInput,
}) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={onChangeInput}
      />
      <button type="submit" className="cta-button submit-gif-button">
        {buttonLabel}
      </button>
    </form>
  );
};

export default InputField;
