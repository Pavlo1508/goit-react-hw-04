import s from './ImageModal.module.css'

const ImageModal = ({ onClick, fullPhotoUrl, alt }) => {
  return (
    <div onClick={onClick} className={s.modal_container}>
      <img className={s.full_img} src={fullPhotoUrl} alt={alt} />
    </div>
  );
};

export default ImageModal