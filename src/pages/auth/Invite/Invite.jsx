import { Button, Col, Dropdown, Input, Row } from "antd";
import inviteImg from "../../../assets/img/invite-img.avif";
import { useEffect, useState } from "react";
import InputDropdown from "../../../components/InputDropdown/InputDropdown";
import DropdownItem from "../../../components/InputDropdown/DropdownItem";

const Invite = () => {
    const [extraCount, setExtraCount] = useState(0)
    const [extraContent, setExtraContent] = useState([])

    const items = [
        {
            key: "1",
            value: "Admin",
            label: (
                <DropdownItem name="Admin" description="Can invite & manage new users"/>
            ),
        },
        {
            type: "divider",
        },
        {
            key: "2",
            value: "Member",
            label: (
                <DropdownItem name="Member" description="Can add and edit content"/>
            ),
        },
    ];

    const updateExtraCount = () => {
        setExtraCount(extraCount + 1)
    }

    const renderExtraInput = () => {
        let newContent = []

        for (let i = 0; i < extraCount; i++) {
            newContent.push(
                <InputDropdown
                    key={i + 1}
                    id={i + 1}
                    items={items}
                    name={`extra-email-${i}`}
                />
            )  
        }

        setExtraContent(newContent)
    }

    useEffect(() => {
        renderExtraInput()
    }, [extraCount])

    return (
        <div className="w-full h-full">
            <Row justify={"center"} className="min-h-screen">
                <Col md={14} span={24}>
                    <div className="flex flex-col h-full mx-auto">
                        <div className="flex flex-col flex-grow justify-start w-full lg:ps-24 md:ps-12 md:pe-0 py-16 sm:pb-16 pb-5 gap-2 sm:px-20 px-10">
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

                            <InputDropdown items={items} />

                            <InputDropdown items={items} />

                            {extraCount != 0 && extraContent.map((content) => content)}

                            <Button className="w-fit h-fit py-2 px-4 bg-white border-none shadow-none hover:bg-slate-100 disabled:opacity-30" onClick={updateExtraCount} disabled={extraCount == 3}>
                                <p className="text-black">
                                    <i className="fa-solid fa-plus pe-2"></i>
                                    Add Another
                                </p>
                            </Button>
                        </div>
                        <div className="flex sm:flex-nowrap flex-wrap w-full md:gap-3 gap-y-5 justify-between md:mb-20 sm:mb-32 mb-48 lg:px-24 sm:px-20 px-10">
                            <Button className="w-fit h-fit px-5 py-2 sm:bg-white bg-slate-100 border-none sm:shadow-non shadow-sm">
                                <span className="text-black md:text-lg sm:text-base text-sm">
                                    Remind me later
                                </span>
                            </Button>
                            <Button className="w-fit h-fit px-5 py-2 bg-blue-600 sm:text-lg text-base border border-slate-500 rounded transition-all hover:bg-blue-800">
                                <p className="text-white md:text-lg sm:text-base text-sm">
                                    Invite Your Team
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
