import { Input } from "antd";
const InputBtn = ({id, name, type, placeholder, onChange, value, status}) => {
    return (
        <Input
            size={"large"}
            id={id}
            name={name}
            type={type}
            className="w-full block md:text-lg sm:text-base text-sm sm:p-3 p-2 ps-4 mb-4 border border-slate-300 rounded transition-all focus:border-blue-500 hover:border-black"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            status={status}
        ></Input>
    );
};

export default InputBtn;
