import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showStats } from "../../features/allJobs/allJobsSlice";
import { ChartsContainer, StatsContainer } from "../../components";

const Stats = () => {
    const dispatch = useDispatch();
    const { isLoading, monthlyApplications } = useSelector((store) => store.allJobsStore);

    useEffect(() => {
        dispatch(showStats());
    }, []);

    return (
        <>
            <StatsContainer />
            {monthlyApplications.length > 0 && <ChartsContainer />}
        </>
    );
};

export default Stats;
