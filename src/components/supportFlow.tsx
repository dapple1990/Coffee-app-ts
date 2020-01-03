import React from "react";
import { ButtonToolbar, Button } from "react-bootstrap";

export const SupportButton : React.FunctionComponent = () => {

  const redirectToFlow = () => {
    window.location.href = 'https://www.facebook.com/flowcoffeeandbistro';
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    redirectToFlow();
  };

    return (
      <div>
        <ButtonToolbar>
          <Button
            className="supportButton"
            variant="info"
            type="submit"
            onClick={handleSubmit}
          >
            Good coffee alert!
          </Button>
        </ButtonToolbar>
      </div>
    );
  }

export default SupportButton;