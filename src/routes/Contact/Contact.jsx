import Heading from "./components/Heading";
import ContactForm from "./components/Form";
import styled from "styled-components";

export default function Contact() {
  return (
    <ContactContainer>
      <Heading />
      <ContactForm />
    </ContactContainer>
  );
}

//Styled Components
const ContactContainer = styled.div`
  height: 100%;
  margin: 0 auto;
  text-align: center;
  padding: 2.5rem;
`;
