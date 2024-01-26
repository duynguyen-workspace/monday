import React from "react";
import CheckboxBtn from "../CheckboxBtn";

const CheckboxList = ({content}) => {
    return (
        <div className="flex flex-wrap justify-start gap-x-2 gap-y-5">
            {content.map((value) => (
                <CheckboxBtn
                    key={content.indexOf(value) + 1}
                    text={value}
                />
            ))}
        </div>
    );
};

export default CheckboxList;
