import styled from "styled-components";
import { FaTiktok, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <StyledFooter>
      <StyledLink
        href="https://www.instagram.com/practicamentebloom/"
        target="_blank"
      >
        <FaInstagram />
      </StyledLink>
      <StyledLink
        href="https://www.tiktok.com/@pouringartcecibloom"
        target="_blank"
      >
        <FaTiktok />
      </StyledLink>
    </StyledFooter>
  );
}

// STYLED COMPONENTS
const StyledLink = styled.a`
  color: white;
  text-decoration: none;
  padding-bottom: 0.3rem;
  padding-right: 0.3rem;
  padding-left: 0.3rem;
  border-radius: 5px;
  transition: ease-in-out 0.2s;
  border: 1px solid #222831;

  &:hover {
    border: 1px solid #facf39;
    color: #fbdb6b;
  }
`;

const StyledFooter = styled.footer`
  margin-top: auto;
  font-size: 1.5rem;
  background-color: #222831;
  padding: 1rem;
  color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
