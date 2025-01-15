import { useState } from "react";
import fetchImages from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

function App() {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isError, setIsError] = useState(false);

  const getImagesList = async (query, currentPage) => {
    try {
      setIsLoading(true);
      const data = await fetchImages({ searchQuery: query, page: currentPage });
      setImages((prev) => [...prev, ...data]);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchClick = () => {
    setImages([]);
    setPage(1);
    getImagesList(searchQuery, 1);
  };

  const handleSearchChange = (newSearchQuery) => {
    setSearchQuery(newSearchQuery);
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    getImagesList(searchQuery, nextPage);
  };

  return (
    <>
      <SearchBar
        onSearchChanged={handleSearchChange}
        onSearchClick={handleSearchClick}
      />
      {isError ? <ErrorMessage /> : <ImageGallery imagesList={images} />}
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn loadMore={handleLoadMore} />
      )}
    </>
  );
}

export default App;
