import styled from "styled-components";
import Banner from "../components/Banner";
import ExtractData from "../components/ExtractData";
import boleto from "../assets/images/boleto.svg";
import pix from "../assets/images/pix.svg";
import ted from "../assets/images/ted.svg";

const Container = styled.div`
  display: flex;
  fieldset {
    width: 60%;
    border: none;
  }
`;

const Ul = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  height: 100vh;
`;

const Li = styled.li`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  > div > * {
    max-height: 25px;
  }
  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    strong {
      font-size: 1.5em;
      margin-bottom: 5%;
    }
    span {
      text-align: left;
    }
  }
  &:nth-child(odd) {
    background: #eee;
  }
  > div:last-child {
    font-size: 0.9rem;
    font-weight: bold;
    color: #aaa;
  }
`;

const img = (icone) => {
  let retorno = "";
  switch (icone) {
    case "boleto":
      retorno = boleto;
      break;
    case "ted":
      retorno = ted;
      break;
    default:
      retorno = pix;
  }
  return retorno;
};

//function expression
const formatCurrency = (value) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

//timestamp
// C
const formatDate = (dateInput) => {
  const date = new Date(dateInput);
  const day = date.getDate() + 1;
  const month = date.toLocaleDateString("pt-BR", { month: "short" });
  return `${day} ${month.toLocaleUpperCase()}`;
};

function Extract() {
  return (
    <Container>
      <Banner background={true}>
        <h1>Confira seu extrato</h1>
      </Banner>
      <Banner>
        <Ul>
          {ExtractData.map((item, index) => (
            <Li key={index}>
              <div>
                <img src={img(item.icone)} alt="operação" />
              </div>
              <div>
                <strong>{item.operacao}</strong>
                {item.destinatario && <span>{item.destinatario}</span>}
                <span>{formatCurrency(item.valor)}</span>
              </div>
              <div>{formatDate(item.dataOperacao)}</div>
            </Li>
          ))}
        </Ul>
      </Banner>
    </Container>
  );
}

export default Extract;
