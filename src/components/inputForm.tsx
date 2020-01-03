import React from "react";
import {Form, FormControl, FormGroup, ControlLabel} from "react-bootstrap";
import PropTypes from "prop-types";

export type InputFormProps = {
  value: any;
  onChange: React.FormEvent<InputFormProps & FormControl>;
};

export const InputForm = ({ value, onChange }: InputFormProps) => {
  <div className="input-container">
    <Form>
      <FormGroup controlId="formBasicEmail">
        <ControlLabel>Cup of Coffee</ControlLabel>
        <FormControl type="number" onChange ={(event: React.FormEvent<InputFormProps & FormControl>) => {onChange}} value={value} min="1" />
      </FormGroup>
    </Form>
  </div>;
};

InputForm.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.number
};

export default InputForm;
