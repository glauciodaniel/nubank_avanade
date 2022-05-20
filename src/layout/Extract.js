import { useReducer, useState } from "react";
import styled from "styled-components";
import Banner from "../components/Banner";

const Container = styled.div`
  display: flex;
  fieldset {
    width: 60%;
    border: none;
  }
`;

function Extract() {
  return (
    <Container>
      <Banner background={true}>
        <h1>Confira seu extrato</h1>
      </Banner>
      <Banner></Banner>
    </Container>
  );
}

export default Extract;
