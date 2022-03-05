import React, { ChangeEventHandler, useState } from "react";
import { ButtonSubmit, TextField } from "../styles/style";

function Input({ onChange }: any) {
  const [valueSearch, setValueSearch] = useState<string>("");
  const [displayBtn, setDisplayBtn] = useState<boolean>(false);

  // event
  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValueSearch(e.currentTarget.value);
    e.currentTarget.value.length > 0  ? setDisplayBtn(true) : setDisplayBtn(false);
  };

  const  handleInputSubmit = () => {
    if(onChange) onChange(valueSearch)
    setValueSearch('')
  }

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
