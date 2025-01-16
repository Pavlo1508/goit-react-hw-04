import { useState } from 'react';
import s from './ImageCard.module.css'
import ImageModal from '../../ImageModal/ImageModal';

const ImageCard = ({ url, altText, fullPhotoUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = (e) => {
    if (e.currentTarget === e.target) {
      setIsOpen(false);
    }
  };

  return (
    <>
			<img className={s.img} onClick={openModal} src={url} alt={altText} />
      {isOpen && (
        <ImageModal onClick={closeModal} fullPhotoUrl={fullPhotoUrl} alt={altText}/>
      )}
    </>
  );
};

export default ImageCard