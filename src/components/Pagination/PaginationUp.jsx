/* eslint-disable prettier/prettier */
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

function PaginationUp() {
  const { pagination, setPagination } = useContext(AppContext);

  const handlePaginationUp = () => {
    setPagination((prevPagination) => prevPagination + 1);
  };

  return (
    <div className="col-1 col-md-3 d-flex justify-content-end justify-content-md-start align-items-center">
      <i
        className="fa-solid fa-chevron-right pagination-up fs-1 text-light neon cursor-pointer"
        onClick={handlePaginationUp}
      />
    </div>
  );
}

export default PaginationUp;
