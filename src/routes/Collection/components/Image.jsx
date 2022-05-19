import styled from "styled-components";

const StyledImage = styled.img`
  width: 100%;
  cursor: pointer;
  border: 5px ridge #2c0735;
  margin-top: 0.15rem;
  transition: all 0.3s;

  &:hover {
    opacity: 0.8;
    transform: scale(0.99);
  }
`;

export default StyledImage;
