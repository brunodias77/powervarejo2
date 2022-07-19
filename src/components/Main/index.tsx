import React from "react";

import { Container } from "./styles";

const Main = ({ title = "Bruno Dias" }) => {
  return (
    <Container>
      <div>{title}</div>
    </Container>
  );
};

export default Main;
