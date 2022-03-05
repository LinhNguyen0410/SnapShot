import React from "react";
import PropTypes from "prop-types";
import { ButtonSubmit, TextField } from "../styles/style";

Input.propTypes = {};

function Input() {
  return <>
  <TextField placeholder="Search...."/>
  <ButtonSubmit disabled >Search Now</ButtonSubmit>
  </>
}

export default Input;
