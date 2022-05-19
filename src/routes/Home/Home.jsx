import styled from "styled-components";
import Bio from "./components/Bio";

export default function Home() {
  return (
    <HomeContainer>
      <ProfilePic src="./profile-pic.jpg" alt="Foto de perfil" loading="lazy" />
      <Bio />
    </HomeContainer>
  );
}

//Styled components
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfilePic = styled.img`
  width: 30%;
  border: 10px ridge #fbdb6b;
  border-radius: 5px;
  margin-top: 2rem;

  @media (max-width: 768px) {
    width: 50%;
    margin: 0;
    margin-top: 1rem;
  }
`;
