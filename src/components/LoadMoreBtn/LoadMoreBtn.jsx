import s from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({ loadMore }) => {
  return <button className={s.load_more} onClick={loadMore}>Load More</button>;
};

export default LoadMoreBtn;
