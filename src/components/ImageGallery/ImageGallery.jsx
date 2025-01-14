import ImageCard from './ImageCard/ImageCard';

const ImageGallery = ({ imagesList }) => {
	
	return (
    <>
      <ul>
        {imagesList.map((image) => (
          <li key={image.objectID}>
            <ImageCard url={image.url} altText={image.title} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ImageGallery