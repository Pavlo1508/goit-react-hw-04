import s from './ImageModal.module.css'

const ImageModal = ({ onClick, fullPhotoUrl, alt }) => {
  return (
    <div onClick={onClick} className={s.modal_container}>
      <img src={fullPhotoUrl} alt={alt} width={500} />
    </div>
  );
};

export default ImageModal