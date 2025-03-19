import { useState } from "react";

export const usePagination = (initialPage = 1, totalPages = 10) => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return {
    currentPage,
    handleNextPage,
    handlePreviousPage,
    handlePageClick,
  };
};
