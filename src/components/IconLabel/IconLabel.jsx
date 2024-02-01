import React from "react";

const IconLabel = ({icon, iconBgColor, text}) => {
    return (
        <div className="flex items-center justify-between gap-2">
            <i className={`${icon} ${iconBgColor} text-white text-sm px-2 py-1 rounded`}></i>
            <span className="inline-block lg:text-lg md:text-base text-sm text-slate-600 font-normal transition-all">
                {text}
            </span>
        </div>
    );
};

export default IconLabel;
