import './App.css';

const Pagination = ({currentPage, setCurrentPage, pageCount}) => {

  const prevPage = () => {
    if (currentPage != 1) setCurrentPage(currentPage - 1);
  }

  const nextPage = () => {
    if (currentPage != pageCount) setCurrentPage(currentPage + 1);
  }

  return (
      <div className={'marginDiv'}>
      <button onClick={prevPage}>prev</button>
        <span className={'pageNumber'}>{currentPage}</span>
      <button onClick={nextPage}>next</button>
  </div>)
}

export default Pagination;