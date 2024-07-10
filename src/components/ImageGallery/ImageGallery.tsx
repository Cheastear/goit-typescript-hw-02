import ImageCard from "./ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { GalleryElement } from "../../App";

type Prop = {
  images: GalleryElement[];
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
