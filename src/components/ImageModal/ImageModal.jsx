import s from './ImageModal.module.css'

const ImageModal = ({onClick}) => {
  return (
    <div onClick={onClick} className={s.modal_container}>
      <div className={s.full_image}>Hallo man:) Saloma Lexus</div>
    </div>
  );
};

export default ImageModal