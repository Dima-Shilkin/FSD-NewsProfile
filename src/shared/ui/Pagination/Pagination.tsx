import styles from "./styles.module.css";

export interface PaginationProps {
  totalPages: number;
  currentPage: number;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  handlePageClick: (page: number) => void;
}

export const Pagination = ({
  totalPages,
  handleNextPage,
  handlePreviousPage,
  handlePageClick,
  currentPage,
}: PaginationProps) => {
  return (
    <div className={styles.pagination}>
      <button
        disabled={currentPage <= 1}
        onClick={handlePreviousPage}
        className={styles.arrow}
      >
        {"<"}
      </button>
      <div className={styles.arrow}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              onClick={() => handlePageClick(index + 1)}
              className={styles.pageNumber}
              disabled={index + 1 === currentPage}
              key={index}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <button
        disabled={currentPage >= totalPages}
        onClick={handleNextPage}
        className={styles.arrow}
      >
        {">"}
      </button>
    </div>
  );
};
