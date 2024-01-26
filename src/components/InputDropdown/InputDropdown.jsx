import { Button, Dropdown, Input } from "antd";
import { useState } from "react";

const InputDropdown = ({ id, name, items }) => {
    const [role, setRole] = useState("Select Role");

    const handleDropdown = ({ key }) => {
        console.log(`Click on item - key ${key}`);

        if (key == 1) {
            setRole("Admin");
        }

        if (key == 2) {
            setRole("Member");
        }

        //* update email list on redux here
    };

    return (
        <div className="flex sm:flex-row flex-col justify-start lg:w-4/5 md:w-96 w-full gap-y-2 mb-3">
            <Input
                id={id}
                name={name}
                type="email"
                className="w-full sm:py-0 py-2 sm:text-base text-sm font-light sm:ps-4 ps-2 border border-slate-500 rounded sm:rounded-r-none sm:rounded-bl-md transition-all focus:border-blue-500 hover:border-black"
                placeholder="Add email here"
            ></Input>

            <Dropdown
                menu={{
                    items,
                    onClick: handleDropdown,
                    selectable: true,
                    defaultSelectedKeys: ["3"],
                }}
                trigger={["click"]}
                placement="bottom"
                arrow={{
                    pointAtCenter: true,
                }}
                className="w-max"
            >
                <Button className="h-fit py-2 sm:text-base text-sm sm:bg-white bg-blue-200 border border-slate-500 rounded sm:rounded-l-none sm:rounded-tr-md">
                    <p className="text-black">
                        {role}
                        <i className="fa-solid fa-chevron-down text-base ps-4"></i>
                    </p>
                </Button>
            </Dropdown>
        </div>
    );
};

export default InputDropdown;
