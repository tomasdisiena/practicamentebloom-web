import styled from "styled-components";
import Masonry from "react-masonry-css";

export default function PicsContainer(props) {
  return (
    <StyledMasonry
      breakpointCols={breakpointColumnsObj}
      columnClassName="myMasonryGridColumn"
    >
      {props.children}
    </StyledMasonry>
  );
}

const breakpointColumnsObj = {
  default: 4,
  1200: 3,
  900: 2,
  600: 1,
};

//Styled components
const StyledMasonry = styled(Masonry)`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-right: 0.25rem;
  margin-bottom: 3rem;
  width: auto;
`;
