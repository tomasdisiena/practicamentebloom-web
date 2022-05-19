import { Container } from "@mui/material";
import styled from "styled-components";

export default function Header() {
  return (
    <CollectionContainer>
      <CollectionTitle>Mi Colección</CollectionTitle>
      <CollectionSubTitle>
        Todas mis obras son únicas e irrepetibles , utilizando pintura , médium
        acrílico y activador celular . En este procedimiento se tiene especial
        cuidado en la paleta de colores para que no interfieran entre sí y
        puedan aflorar a la luz cada uno de los que elegímos , confiriendo a la
        obra la particularidad de los matices que se reflejan . Aqui encontraras
        una pequeña colección , espero que la disfrutes y te lleven a algún
        lugar bonito .
      </CollectionSubTitle>
    </CollectionContainer>
  );
}

//Styled components
const CollectionContainer = styled(Container)`
  margin-bottom: 3rem;
  padding: 2.5rem;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

const CollectionTitle = styled.h1`
  text-align: center;
  font-family: "Dancing Script", cursive;
  font-size: 6rem;

  @media (max-width: 768px) {
    padding-bottom: 2rem;
    font-size: 3rem;
  }
`;

const CollectionSubTitle = styled.p`
  text-align: center;
  font-family: "Dancing Script", cursive;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
