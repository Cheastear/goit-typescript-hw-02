import { Element } from "../ImageGallery";

type Prop = {
  elem: Element;
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
