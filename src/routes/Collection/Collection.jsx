import { useState } from "react";
import Heading from "./components/Heading";
import PicsContainer from "./components/PicsContainer";
import StyledImage from "./components/Image";
import FsLightbox from "fslightbox-react";

export default function Collection() {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    sourceIndex: 1,
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      sourceIndex: number,
    });
  }
  return (
    <>
      <Heading />
      <PicsContainer>
        {images.map((item, idx) => (
          <StyledImage
            key={idx}
            src={item}
            alt={idx}
            onClick={() => openLightboxOnSlide(idx)}
            loading="lazy"
          />
        ))}
      </PicsContainer>

      <FsLightbox
        toggler={lightboxController.toggler}
        sources={images}
        sourceIndex={lightboxController.sourceIndex}
      />
    </>
  );
}

// GET IMAGES //
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context("../../images", false, /\.(webp)$/));
