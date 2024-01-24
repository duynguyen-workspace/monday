import { Checkbox } from "antd";

const CheckboxBtn = ({text}) => {
    return (
        <Checkbox className="w-fit h-fit py-2 px-4 rounded-full border border-slate-500 transition-all">
            <span className="inline-block ps-2 lg:text-lg md:text-sm text-xs text-slate-500 font-light transition-all">
                {text}
            </span>
        </Checkbox>
    );
};

export default CheckboxBtn;
