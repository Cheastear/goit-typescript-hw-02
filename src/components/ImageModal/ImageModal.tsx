import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

interface Props {
  url: string;
  onClose: () => void;
}

const ImageModal = ({ url, onClose }: Props) => {
  return (
    <Modal
      isOpen={url !== ""}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <button className={css.closeButton} onClick={onClose}>
        x
      </button>
      <img src={url} className={css.image} alt="Modal content" />
    </Modal>
  );
};

export default ImageModal;
