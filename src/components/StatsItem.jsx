import React from "react";

const StatsItem = ({ icon, statsColor, count, statsTitle, statsBColor, statsIconBg }) => {
    return (
        <div className={`card w-full  bg-base-100 shadow-xl mt-3  ${statsBColor} border-b-4`}>
            <div className="card-title grid gap-2 grid-cols-2 px-5">
                <h6 className={`mx-2 mt-0 pt-0 card-title text-left text-4xl py-0 font-bold capitalize ${statsColor}`}>
                    {count}tbc...
                </h6>
                <div className="w-full flex justify-end px-4 py-6 ">
                    <div className={`${statsIconBg} p-3`}>{icon}</div>
                </div>
            </div>
            <hr className="h-px  bg-gray-200 border-0 dark:bg-gray-700 mt-0 pt-0"></hr>
            <div className="card-body capitalize bg-gray-100 font-semibold text-xl">
                {statsTitle === "pending" && "pending applications"}
                {statsTitle === "interview" && "interviews scheduled"}
                {statsTitle === "declined" && "jobs declined"}
            </div>
        </div>
    );
};

export default StatsItem;
