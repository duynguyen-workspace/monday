import { Button, Col, Dropdown, Input, Row } from "antd";
import inviteImg from "../../../assets/img/invite-img.avif";
import { useState } from "react";

const Invite = () => {
    const [role, setRole] = useState("Select Role");

    const items = [
        {
            key: "1",
            value: "Admin",
            label: (
                <div className="">
                    <h3 className="text-lg font-normal">Admin</h3>
                    <span className="text-base">
                        Can invite & manage new users
                    </span>
                </div>
            ),
        },
        {
            type: "divider",
        },
        {
            key: "2",
            value: "Member",
            label: (
                <div className="">
                    <h3 className="text-lg font-normal">Member</h3>
                    <span className="text-base">Can add and edit content</span>
                </div>
            ),
        },
    ];

    const handleDropdown = ({ key }) => {
        console.log(`Click on item - key ${key}`);

        if (key == 1) {
            setRole("Admin");
        }

        if (key == 2) {
            setRole("Member");
        }
    };

    return (
        <div className="w-full h-full">
            <Row justify={"center"} className="min-h-screen">
                <Col md={14} span={24}>
                    <div className="flex flex-col h-full mx-auto">
                        <div className="flex flex-col flex-grow justify-start lg:ps-24 md:ps-12 md:pe-0 md:mx-0 py-16 mx-auto gap-2">
                            <img
                                className="md:mb-16 sm:mb-10 mb-8"
                                src="https://cdn.monday.com/images/logos/logo-full-big.png"
                                width={140}
                                alt="monday logo"
                            ></img>

                            <div className="mb-8">
                                <h3
                                    className="md:text-3xl text-2xl lg:text-nowrap font-normal mb-2"
                                    style={{ letterSpacing: -0.5 }}
                                >
                                    Invite your teammates
                                </h3>

                                <p className="text-lg font-light">
                                    Collaborate with your team to get the most
                                    out of monday.com
                                </p>
                            </div>

                            <div className="flex justify-start lg:w-4/5 sm:w-96 w-72">
                                <Input
                                    id="member-1"
                                    name="member-1"
                                    type="email"
                                    className="block sm:text-base text-sm font-light sm:ps-4 ps-2 border border-slate-500 rounded rounded-r-none transition-all focus:border-blue-500 hover:border-black"
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
                                    className=""
                                >
                                    <Button className="h-fit py-2 sm:text-base text-sm border border-slate-500 rounded rounded-l-none ">
                                        <p className="text-black">
                                            {role}
                                            <i className="fa-solid fa-chevron-down text-base ps-4"></i>
                                        </p>
                                    </Button>
                                </Dropdown>
                            </div>

                            <Button className="w-fit h-fit py-2 px-4">
                                <p className="text-black">
                                    <i className="fa-solid fa-plus pe-2"></i>
                                    Add Another
                                </p>
                            </Button>
                        </div>
                        <div className="flex md:gap-3 justify-between md:mb-20 sm:mb-32 mb-48 md:w-full sm:w-96 w-80 lg:px-24 md:px-12 mx-auto">
                            <Button className="w-fit h-fit px-5 py-2 sm:text-lg text-base bg-white border-none shadow-none">
                                <span className="text-black">
                                    Remind me later
                                </span>
                            </Button>
                            <Button className="w-fit h-fit px-5 py-2 bg-blue-600 sm:text-lg text-base border border-slate-500 rounded transition-all hover:bg-blue-800">
                                <p className="text-white">
                                    Continue
                                    <i className="fa-solid fa-chevron-right text-base ps-4"></i>
                                </p>
                            </Button>
                        </div>
                    </div>
                </Col>
                <Col md={10} span={0}>
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${inviteImg})`,
                        }}
                    ></div>
                </Col>
            </Row>
        </div>
    );
};

export default Invite;
