import React from "react";
import { Form, FormControl, FormControlProps } from "react-bootstrap";

export type InputFormProps = {
  value: any;
  onChange: React.FormEventHandler<HTMLInputElement>;
};

export const InputForm = ({ value, onChange }: InputFormProps) => (
  <div className="input-container">
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Cup of Coffee</Form.Label>
        <FormControl type="number" onChange={onChange} value={value} min="1" />
      </Form.Group>
    </Form>
  </div>
);

export default InputForm;
