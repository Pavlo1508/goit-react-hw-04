import { useState } from "react";
import fetchImages from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isError, setIsError] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getImagesList = async (query, currentPage) => {
    try {
      setIsLoading(true);
      const data = await fetchImages({ searchQuery: query, page: currentPage });
      setImages((prev) => (currentPage === 1 ? data : [...prev, ...data])); // Очищення списку при новому пошуку
      setIsError(!data.length);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchClick = () => {
    setImages([]); // Скидання списку зображень
    setPage(1); // Скидання номера сторінки
    setIsError(false); // Скидання стану помилки
    getImagesList(searchQuery, 1); // Виконання нового запиту
  };

  const handleSearchChange = (newSearchQuery) => {
    setSearchQuery(newSearchQuery);
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    getImagesList(searchQuery, nextPage);
  };

  const openModal = (data) => {
    setModalData(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  return (
    <>
      <SearchBar
        onSearchChanged={handleSearchChange}
        onSearchClick={handleSearchClick}
      />
      {isError && <ErrorMessage />}
      <ImageGallery imagesList={images} onImageClick={openModal} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn loadMore={handleLoadMore} />
      )}
      <ImageModal
        isOpen={isModalOpen}
        modalData={modalData}
        onClose={closeModal}
      />
    </>
  );
}

export default App;
