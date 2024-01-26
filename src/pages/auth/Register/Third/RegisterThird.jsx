import { Button, Col, Row } from "antd";
import askImg from "../../../../assets/img/ask-img.avif";
import { useEffect, useState } from "react";
import RadioList from "../../../../components/RadioList";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../../../paths";

const RegisterThird = () => {
    const [optionValue, setOptionValue] = useState(0);
    const [childOptionValue, setChildOptionValue] = useState(0);

    const navigate = useNavigate()

    const optionContent = ["Work", "Personal", "School", "Nonprofits"];

    const workContent = [
        "Business Owner",
        "Team Leader",
        "Team member",
        "Freelancer",
        "Director",
        "C-Level",
        "VP",
    ];
    const schoolContent = [
        "Undergraduate student",
        "Graduate student",
        "Faculty member",
        "Other",
    ];
    const nonProfitContent = [
        "Board member",
        "Executive",
        "Employee",
        "Volunteer",
        "IT staff",
        "Other",
    ];

    const handleOptionChange = (e) => {
        // console.log('radio checked', e.target.value);
        setOptionValue(e.target.value);
    };

    const handleChildOptionChange = (e) => {
        // console.log('radio checked', e.target.value);
        setChildOptionValue(e.target.value);
    };

    const renderOptionList = () => {
        switch (optionValue) {
            case 1:
                return (
                    <RadioList
                        onChange={handleChildOptionChange}
                        option={childOptionValue}
                        name="work"
                        content={workContent}
                    />
                );

            case 3:
                return (
                    <RadioList
                        onChange={handleChildOptionChange}
                        option={childOptionValue}
                        name="school"
                        content={schoolContent}
                    />
                );

            case 4:
                return (
                    <RadioList
                        onChange={handleChildOptionChange}
                        option={childOptionValue}
                        name="nonProfit"
                        content={nonProfitContent}
                    />
                );

            default:
                return <></>;
        }
    };

    const setBtnDisabled = () => {
        if (optionValue === 2) {
            return false;
        }

        if (optionValue !== 0 && childOptionValue !== 0) {
            return false;
        }

        return true;
    };

    const handleBackClicked = (e) => {
        e.preventDefault()

        navigate(`${PATH.REGISTER}/create`)
    }

    const handleContinueClicked = (e) => {
        e.preventDefault()

        navigate(`${PATH.REGISTER}/how`)
    }

    useEffect(() => {
        setChildOptionValue(0);
    }, [optionValue]);

    return (
        <div className="w-full h-full">
            
            <Row justify={"center"} className="min-h-screen">

                <Col md={14} span={24}>
                    <div className="flex flex-col h-full mx-auto">
                        <div className="flex flex-col flex-grow justify-start lg:px-24 md:px-12 md:pe-8 md:mx-0 py-16 mx-auto gap-2">
                            <img
                                className="md:mb-16 sm:mb-10 mb-8"
                                src="https://cdn.monday.com/images/logos/logo-full-big.png"
                                width={140}
                                alt="monday logo"
                            ></img>

                            <div className="h-80 overflow-y-scroll overflow-x-clip md:scroll-ps-2 scroll-ps-5">
                                <div className="flex flex-col justify-start lg:w-4/5 sm:w-96 w-72 mb-12">
                                    <h3
                                        className="lg:text-3xl text-2xl mb-6"
                                        style={{ letterSpacing: -0.5 }}
                                    >
                                        Hey there, what brings you here today?
                                    </h3>

                                    <RadioList
                                        onChange={handleOptionChange}
                                        option={optionValue}
                                        name="options"
                                        content={optionContent}
                                    />
                                </div>

                                <div className="flex flex-col justify-start lg:w-4/5 sm:w-96 w-72 h-auto">
                                    {optionValue !== 0 && (
                                        <h3
                                            className="lg:text-3xl text-2xl mb-6"
                                            style={{ letterSpacing: -0.5 }}
                                        >
                                            What best describes your current
                                            role?
                                        </h3>
                                    )}

                                    {renderOptionList()}
                                </div>
                            </div>
                        </div>
                        <div className="flex md:gap-3 justify-between md:mb-20 sm:mb-32 mb-48 md:w-full sm:w-96 w-80 lg:px-24 md:px-12 mx-auto">
                            <Button 
                                className="w-fit h-fit px-5 py-2 sm:text-lg text-base bg-white border border-slate-600 rounded transition-all hover:!border-slate-800 hover:bg-slate-50"
                                onClick={handleBackClicked}
                            >
                                <i className="fa-solid fa-chevron-left text-base text-black me-4"></i>
                                <span className="text-black">Back</span>
                            </Button>
                            <Button
                                className="w-fit h-fit px-5 py-2 bg-blue-600 sm:text-lg text-base border border-slate-500 rounded transition-all hover:bg-blue-800"
                                onClick={handleContinueClicked}
                                disabled={setBtnDisabled()}
                            >
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
                            backgroundImage: `url(${askImg})`,
                        }}
                    ></div>
                </Col>
            </Row>
        </div>
    );
};

export default RegisterThird;
