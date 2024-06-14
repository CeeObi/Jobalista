import React from "react";
import Job from "./Job";
import PaginationBtnContainer from "./PaginationBtnContainer";

const JobsContainer = ({ jobs, totalJobs, page, numOfPages, has_next, has_prev }) => {
    if (totalJobs == 0) {
        return (
            <div className="flex content-center w-full">
                <div className="mx-5 w-full">
                    <h4 className="mx-6 font-semibold mt-3 mb-3">No job to display...</h4>
                </div>
            </div>
        );
    }

    return (
        <>
            <div
                className={`mx-auto mb-5 grid gap-8 lg:grid-cols-2 ${
                    jobs.length > 3 ? "2xl:grid-cols-4" : "2xl:grid-cols-3 gap-10 "
                } grid-cols-1 px-14 sm:px-20 md:px-32 lg:px-8 justify-center`}
            >
                {jobs.map((eachJob) => (
                    <Job key={eachJob.id} {...eachJob} />
                ))}
            </div>
            <div className=" px-5 my-5">
                {numOfPages > 1 && (
                    <PaginationBtnContainer
                        page={page}
                        totalJobs={totalJobs}
                        numOfPages={numOfPages}
                        has_next={has_next}
                        has_prev={has_prev}
                    />
                )}
            </div>
        </>
    );
};

export default JobsContainer;
