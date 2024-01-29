import React from "react";

const InputLabel = ({htmlFor, text}) => {
    return (
        <label className="block w-full pb-2" htmlFor={htmlFor}>
            {text}
        </label>
    );
};

export default InputLabel;
