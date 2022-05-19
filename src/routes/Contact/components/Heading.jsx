import styled from "styled-components";

export default function Heading() {
  return (
    <>
      <ContactTitle>No dudes en contactarme</ContactTitle>
      <ContactSubTitle>
        Si tienes alguna pregunta , idea o sugerencia , puedes hablar conmigo a
        travės del siguiente formulario . Me esfuerzo por crecer y mejorar
        constantemente y tus comentarios son muy valiosos para mí .
      </ContactSubTitle>
    </>
  );
}

//Styled Components
const ContactTitle = styled.h1`
  text-align: center;
  font-family: "Dancing Script", cursive;
  font-size: 6rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const ContactSubTitle = styled.p`
  text-align: center;
  font-family: "Dancing Script", cursive;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
