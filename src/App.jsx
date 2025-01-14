import { useEffect, useState } from 'react'
import fetchImages from './services/api'
import SearchBar from './components/SearchBar/SearchBar'
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';

function App() {
	const [images, setImages] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [page, setPage] = useState(0);

	useEffect(() => {
    const getImagesList = async () => {
      try {
        setIsLoading(true);
        const { hits } = await fetchImages(searchQuery, page);
        setImages((prev) => [...prev, ...hits]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getImagesList();
  }, [searchQuery, page]);

	const handleLoadMore = () => {
		setPage(prev => prev + 1)
	}

	const handleChangeSearchQuery = (newSearchQuery) => {
    if (newSearchQuery === searchQuery) {
      return;
    }
    setSearchQuery(newSearchQuery);
		setImages([]);
		setPage(0);
  }; 

  return (
    <>
      <SearchBar onSearchChanged={handleChangeSearchQuery} />
      <ImageGallery imagesList={images} />
      {isLoading && <Loader />}
      <button onClick={handleLoadMore}>Load More</button>
    </>
  );
}

export default App
