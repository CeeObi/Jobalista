import React from "react";
import { useDispatch } from "react-redux";
import { handlePage } from "../features/allJobs/allJobsSlice";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

const PaginationBtnContainer = ({ page, totalJobs, numOfPages, has_next, has_prev }) => {
    const pageNums = Array.from({ length: numOfPages }, (_, index) => index + 1);
    const dispatch = useDispatch();

    const handleClick = (event) => {
        dispatch(handlePage(event.target.name));
    };
    const handleNextPage = () => {
        let nextPage = page + 1;
        if (nextPage > numOfPages) {
            nextPage = 1;
        }
        dispatch(handlePage(nextPage));
    };
    const handlePrevPage = () => {
        let prevPage = page - 1;
        if (prevPage < 1) {
            prevPage = numOfPages;
        }
        dispatch(handlePage(prevPage));
    };

    return (
        <div className="flex justify-center md:justify-end mx-5 mt-10 ">
            <button
                className={`btn-outline border btn-primary btn-sm rounded-sm ${
                    !has_prev && "btn-disabled"
                }  disabled:opacity-50`}
                onClick={handlePrevPage}
                disabled={!has_prev && true}
            >
                <div className="mx-auto flex justify-center my-0 py-2">
                    <div className=" my-0 py-0">
                        <HiChevronDoubleLeft />
                    </div>
                    <div className="mx-2 capitalize my-0 py-0">Prev</div>
                </div>
            </button>
            {pageNums.map((pageNum) => {
                return (
                    <button
                        key={pageNum}
                        id={pageNum}
                        name={pageNum}
                        className={`btn-outline ${pageNum === page && "btn-active"} ${
                            pageNum != page && pageNum != page + 1 && pageNum != page - 1 && "hidden md:block"
                        } border btn-primary btn-sm rounded-sm`}
                        onClick={handleClick}
                    >
                        {pageNum}
                    </button>
                );
            })}

            <button
                className={`btn-outline border btn-primary btn-sm rounded-sm ${
                    !has_next && "btn-disabled"
                }  disabled:opacity-50`}
                onClick={handleNextPage}
                disabled={!has_next && true}
            >
                <div className="mx-auto flex justify-center my-0 py-2">
                    <div className="mx-2 capitalize my-0 py-0">Next</div>
                    <div className=" my-0 py-0">
                        <HiChevronDoubleRight />
                    </div>
                </div>
            </button>
        </div>
    );
};

export default PaginationBtnContainer;
