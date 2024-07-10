import { GalleryElement } from "../../../App";

type Prop = {
  elem: GalleryElement;
  onClick: (utlImg: string) => void;
};

const ImageCard = ({ elem, onClick }: Prop) => {
  return (
    <>
      <img
        onClick={() => onClick(elem.urls.regular)}
        src={elem.urls.small}
        alt={elem.slug}
      />
    </>
  );
};

export default ImageCard;
