import s from './ImageCard.module.css'

const ImageCard = ({ url, altText, onClick }) => {
  return (
    <>
      <img className={s.img} onClick={onClick} src={url} alt={altText} />
    </>
  );
};

export default ImageCard