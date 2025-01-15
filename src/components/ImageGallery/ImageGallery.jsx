import ImageCard from './ImageCard/ImageCard';

const ImageGallery = ({ imagesList }) => {

	return (
    <>
      <ul>
        {imagesList.map((image) => (
          <li key={image.id}>
            <ImageCard
              url={image.urls.raw}
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