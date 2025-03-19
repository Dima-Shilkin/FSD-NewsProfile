import { AppDispatch } from "@/app/appStore";
import { fetchNews } from "@/entities/news/api/newsApi";

import { INITIAL_PAGE, TOTAL_PAGES } from "@/shared/config/constants";
import { usePagination } from "@/shared/hooks/usePagination";
import Loader from "@/shared/ui/Loader/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Status } from "@/shared/interfaces";
import { NewsList } from "@/widgets/ui/NewsList/NewsList";
import { Pagination } from "@/features/Pagination/Pagination";
import { selectNews } from "@/entities/news/api/selector";

export const News = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { newsData, statusLoading, statusError } = useSelector(selectNews);

  const { currentPage, handleNextPage, handlePreviousPage, handlePageClick } =
    usePagination(INITIAL_PAGE, TOTAL_PAGES);

  useEffect(() => {
    dispatch(fetchNews(currentPage));
  }, [currentPage]);

  if (statusError) {
    return <p>{statusError}</p>;
  }

  if (statusLoading === Status.LOADING || !newsData.length) {
    return <Loader />;
  }

  return (
    <>
      <NewsList newsData={newsData} />

      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={currentPage}
      />
    </>
  );
};
