import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css'

const ImageGallery = ({ imagesList }) => {

	return (
    <>
      <ul className={s.img_list}>
        {imagesList.map((image) => (
          <li key={image.id}>
            <ImageCard
              url={image.urls.small}
              altText={image.alt_description}
              fullPhotoUrl={image.urls.full}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ImageGallery