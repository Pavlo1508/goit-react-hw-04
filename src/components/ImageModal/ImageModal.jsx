import ReactModal from "react-modal";
import s from "./ImageModal.module.css";

ReactModal.setAppElement("#root");

const ImageModal = ({ isOpen, modalData, onClose }) => {
  if (!modalData) return null;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={s.modal}
      overlayClassName={s.overlay}
      shouldCloseOnOverlayClick={true}
    >
      <img
        src={modalData.fullPhotoUrl}
        alt={modalData.altText}
        className={s.full_img}
      />
    </ReactModal>
  );
};

export default ImageModal;
