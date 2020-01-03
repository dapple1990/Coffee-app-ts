import React from "react";
import Card from "react-bootstrap/Card";

type FactProps = {
  data: string;
};

export const Fact = ({ data }: FactProps) => (
  <div>
    <Card className="fact-card" style={{ width: "15 rem" }}>
      <Card.Body>
        <Card.Title>Fact</Card.Title>
        {data}
        <Card.Text></Card.Text>
      </Card.Body>
    </Card>
  </div>
);

export default Fact;
