import { useReducer, useState } from "react";
import styled from "styled-components";
import Banner from "../components/Banner";

const Container = styled.div`
  display: flex;
  fieldset:not(:nth-child(6)) {
    min-height: 80px;
    width: 80%;
    border: none;
  }
  fieldset:nth-child(6) {
    border: none;
    width: 80%;
  }

  > div:nth-child(2) {
    height: 90vh;
    display: flex;
    justify-content: center;
  }
  form {
    width: 70%;
    display: flex;
    flex-direction: column;
    height: 70vh;
    button {
      width: 80%;
      line-height: 50px;
      border: none;
      border-radius: 25px;
      font-size: 1.2em;
      cursor: pointer;
      margin-top: 2%;
    }
  }
`;

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

function Register() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    //Agora estamos usando o reducer.
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  // function expression - Só existe a partir desta linha. Ela não sofre: Hoisting.
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  };

  return (
    <Container>
      <Banner background={true}>
        <h1>
          Complete os campos ao lado para pedir sua Conta e Cartão de crédito
        </h1>
      </Banner>
      <Banner>
        {submitting && (
          <div>
            <p>Enviando o formulário...</p>
            <ul>
              {Object.entries(formData).map(([name, value]) => (
                <li key={name}>
                  <strong>{name}</strong>: {value.toString()}
                </li>
              ))}
            </ul>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* CPF, Nome completo, Celular, E-mail, Confirmação de e-mail
           */}
          <fieldset>
            <label>
              CPF:
              <input
                type="text"
                name="cpf"
                id="cpf"
                required
                onChange={handleChange}
              />
            </label>
          </fieldset>

          <fieldset>
            <label>
              Nome Completo:
              <input
                type="text"
                name="nome"
                id="nome"
                required
                onChange={handleChange}
              />
            </label>
          </fieldset>

          <fieldset>
            <label>
              Celular:
              <input
                type="tel"
                name="celular"
                id="celular"
                onChange={handleChange}
              />
            </label>
          </fieldset>

          <fieldset>
            <label>
              E-mail:
              <input
                type="email"
                name="email"
                id="email"
                required
                onChange={handleChange}
              />
            </label>
          </fieldset>

          <fieldset>
            <label>
              Confirmação de e-mail:
              <input
                type="email"
                name="confirma_email"
                id="confirma_email"
                required
                onChange={handleChange}
              />
            </label>
          </fieldset>

          <fieldset>
            <label>
              <input
                type="checkbox"
                name="aceito_comunicacao"
                id="aceito_comunicacao"
              />
              Aceito receber comunicações do Nubank por Whatsapp.
            </label>
          </fieldset>

          <fieldset>
            <label>
              <input
                type="checkbox"
                name="aceito_contrato"
                id="aceito_contrato"
              />
              Eu li, estou ciente das condições de tratamento dos meus dados
              pessoais e dou meu consentimento, quando aplicável, conforme
              descrito nesta Política de Privacidade.
            </label>
          </fieldset>

          <button type="submit">Enviar</button>
        </form>
      </Banner>
    </Container>
  );
}

export default Register;
