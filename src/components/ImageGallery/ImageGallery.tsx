import ImageCard from "./ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export type Element = {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  slug: string;
};

type Prop = {
  images: Element[];
  onClick: (utlImg: string) => void;
};

const ImageGallery = ({ images, onClick }: Prop) => {
  return (
    <ul className={css.gallery}>
      {images.map((elem) => {
        return (
          <li className={css.item} key={elem.id}>
            <ImageCard elem={elem} onClick={onClick} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
