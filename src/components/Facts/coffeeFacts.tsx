import React, { useState, useEffect } from "react";
import { ButtonToolbar, Button } from "react-bootstrap";
import Fact from "./fact";
import { chooseFact, FACTS, FactProps } from "./factService";

export const About: React.FunctionComponent = () => {
  const [facts, setFacts] = useState<FactProps[]>([]);

  useEffect(() => {
    setFacts(state => [...state, chooseFact()]);
  }, []);

  const handleClick = () => {
    let randomFact = chooseFact();

    if (facts.length === FACTS.length) {
      return;
    }
    while (facts.some(item => item.id === randomFact.id)) {
      randomFact = chooseFact();
    }
    setFacts(state => [...state, randomFact]);
  };

  return (
    <div className="fact-container">
      {facts.map(fact => (
        <Fact key={fact.id} data={fact.fact}></Fact>
      ))}
      <ButtonToolbar>
        <Button className="fact-button" onClick={handleClick}>
          More facts!
        </Button>
      </ButtonToolbar>
    </div>
  );
};

export default About;
