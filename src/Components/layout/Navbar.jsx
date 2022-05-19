import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Nav>
      <Logo src="/logoceci.png" alt="Logo CeciBloom" draggable={false} />
      <div>
        <Link to="/">Inicio</Link>
        <Link to="/Collection">Colección</Link>
        <Link to="/Contact">Contacto</Link>
      </div>
    </Nav>
  );
}

// STYLED COMPONENTS
const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #222831;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 1rem;
  }
`;

const Link = styled(NavLink)`
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  padding: 1rem;
  margin: 0 1rem;
  border-radius: 5px;
  transition: ease-in-out 0.2s;
  border: 1px solid #222831;

  &.active {
    color: #fbdb6b;
    border-bottom: 1px solid #fbdb6b;
  }

  &:hover {
    border: 1px solid #facf39;
    color: #fbdb6b;
  }

  @media (max-width: 425px) {
    margin: 0;
  }
`;

const Logo = styled.img`
  width: 150px;
  margin: 0.1rem 1rem;

  @media (max-width: 768px) {
    padding-bottom: 1rem;
  }
`;
