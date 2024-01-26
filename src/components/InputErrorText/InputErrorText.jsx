const InputErrorText = ({text}) => {
    return (
        <p className="text-left font-light sm:text-sm text-xs text-red-600 -mt-2 mb-4">
            {text}
        </p>
    );
};

export default InputErrorText;
