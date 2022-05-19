import styled from "styled-components";
import { NavLink } from "react-router-dom";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export default function Bio() {
  return (
    <BioContainer>
      <p>
        Mi nombre es Cecilia , soy de Argentina . Hace varios años que
        incursiono en el arte abstracto con acrílicos al agua y buscando en
        diferentes métodos , descubrí el pouring y perfeccioné la manera de
        controlar la pintura fluída a través de distintos mediums . Mi forma de
        arte es enérgico , vibrante , repleto de actividad , inspirado en las
        paletas de colores que brinda la naturaleza . Ésta forma de pintar me
        gustaría que sirva de estimulo a miles de personas y les permita salir
        adelante como lo logra hacer en mi día a dia . Pintar es una buena razón
        para vivir en plenitud .
      </p>
      <p>
        Los invito a conocer mis obras{" "}
        <CollectionLink to="/Collection">
          <ArrowCircleRightIcon style={{ fontSize: "3rem" }} />
        </CollectionLink>{" "}
      </p>
    </BioContainer>
  );
}

//Styled components
const BioContainer = styled.div`
  color: #222831;
  align-self: center;
  padding: 2rem;
  font-family: "Dancing Script", cursive;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1800px) {
    font-size: 3rem;
  }
`;

const CollectionLink = styled(NavLink)`
  color: #222831;
`;
