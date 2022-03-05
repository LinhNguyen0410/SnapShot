import React, { useState } from "react";
import { ButtonSubmit, TextField } from "../styles/style";

interface Props {
  onChange: Function;
}

function Input({ onChange }: Props) {
  const [valueSearch, setValueSearch] = useState<string>("");
  const [displayBtn, setDisplayBtn] = useState<boolean>(false);

  // event
  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValueSearch(e.currentTarget.value);
    e.currentTarget.value.length > 0
      ? setDisplayBtn(true)
      : setDisplayBtn(false);
  };

  const handleInputSubmit = () => {
    if (onChange) onChange(valueSearch);
    setValueSearch("");
    setDisplayBtn(false);
  };

  return (
    <>
      <TextField
        placeholder="Search...."
        onChange={handleInputChange}
        value={valueSearch}
      />
      {displayBtn ? (
        <ButtonSubmit onClick={handleInputSubmit}>Search Now</ButtonSubmit>
      ) : (
        <ButtonSubmit disabled>Search Now</ButtonSubmit>
      )}
    </>
  );
}

export default Input;
