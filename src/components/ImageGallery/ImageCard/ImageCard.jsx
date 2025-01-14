import { useState } from 'react';
import s from './ImageCard.module.css'
import ImageModal from '../../ImageModal/ImageModal';

const ImageCard = ({ url, altText }) => {
	const [isOpen, setIsOpen] = useState(false)

	const openModal = () => {
		setIsOpen(true)
	}

	const closeModal = (e) => {
    if (e.currentTarget === e.target) {
			setIsOpen(false);
    }
  };

	return (
    <>
      <a href={url}>{altText}</a>
      <div
        onClick={openModal}
        className={s.test}
      ></div>
      {isOpen && <ImageModal onClick={closeModal} />}
    </>
  );
};

export default ImageCard