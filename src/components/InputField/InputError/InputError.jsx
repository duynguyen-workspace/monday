const InputError = ({ condition, text }) => {
    return (
        <p className="text-left font-light sm:text-sm text-xs text-red-600 -mt-2 mb-4">
            {condition ? text : null}
        </p>
    );
};

export default InputError;
