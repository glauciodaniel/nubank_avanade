import styled from "styled-components";
import bannerBG from "../assets/images/bannerBG.png";
const Container = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) =>
      props.background ? "url(" + props.background + ") #e5e5e5 " : ""}
    20% 90% no-repeat;
  @media (max-width: 1278px) {
    background-size: 60%;
  }

  > h1 {
    font-size: 2em;
    margin: 10% 5%;
  }
`;

function Banner(props) {
  return (
    <Container background={props.background ? bannerBG : ""}>
      {props.children}
    </Container>
  );
}

export default Banner;
