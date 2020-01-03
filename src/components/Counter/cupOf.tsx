import React, { useState } from "react";
import { DropdownButton, Dropdown, FormControl } from "react-bootstrap";
import Counter, {
  RECIPE_CORTADO,
  RECIPE_ESPRESSO,
  RECIPE_FLATWHITE
} from "./counter";
import { InputForm, InputFormProps } from "../inputForm";

export const CupOf: React.FunctionComponent = () => {
  const [amountOf, setAmount] = useState(1);
  const [type, setType] = useState(RECIPE_CORTADO);

  const handleInputValue = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    if (event.currentTarget.value) {
      const value = parseInt(event.currentTarget.value);
      setAmount(!isNaN(value) ? value : 1);
    }
  };

  const dropDownType = (event: string) => {
    setType(event);
  };

  return (
    <div className="input-container">
      <DropdownButton
        id="dropdown-basic-button"
        title={type}
        onSelect={dropDownType}
      >
        <Dropdown.Item eventKey={RECIPE_CORTADO} active>
          Cortado
        </Dropdown.Item>
        <Dropdown.Item eventKey={RECIPE_ESPRESSO}>Espresso</Dropdown.Item>
        <Dropdown.Item eventKey={RECIPE_FLATWHITE}>Flat White</Dropdown.Item>
      </DropdownButton>
      <InputForm onChange={handleInputValue} value={amountOf} />
      <Counter kindOfCoffee={type} amount={amountOf} />
    </div>
  );
};

export default CupOf;
