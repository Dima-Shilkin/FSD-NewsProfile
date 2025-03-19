import Loader from "@/shared/ui/Loader/Loader";
import { Status } from "@/shared/interfaces";
import { NewsList } from "@/widgets/ui/NewsList/NewsList";
import { selectNews } from "@/entities/news/api/selector";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/app/appStore";
import { useEffect } from "react";
import { fetchNews } from "@/entities/news/api/newsApi";
import { usePagination } from "@/shared/hooks/usePagination";
import { INITIAL_PAGE, TOTAL_PAGES } from "@/shared/config/constants";
import { Pagination } from "@/shared/ui/Pagination/Pagination";

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
