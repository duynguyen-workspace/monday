import { Button, Col, Input, Row } from "antd";
import createImg from "../../../../assets/img/create-img.avif";
import { Navigate } from "react-router-dom";

const RegisterSecond = () => {
    const handleContinueClicked = (e) => {
        return <Navigate to="/ask" replace={true} />
    }

    return (
        <div className="w-full h-full">
            <Row justify={"center"} className="min-h-screen">
                <Col md={14} span={24}>
                    <div className="flex flex-col h-full mx-auto">
                        <div className="flex flex-col flex-grow justify-start lg:px-24 md:px-12 md:mx-0 py-16 mx-auto gap-2">
                            <img
                                className="md:mb-16 sm:mb-10 mb-8"
                                src="https://cdn.monday.com/images/logos/logo-full-big.png"
                                width={140}
                                alt="monday logo"
                            ></img>
                            <h1
                                className="text-3xl text-nowrap mb-6"
                                style={{ letterSpacing: -0.5 }}
                            >
                                Create your account
                            </h1>

                            <div className="flex flex-col justify-start lg:w-4/5 sm:w-96 w-72">
                                <label
                                    className="block w-full pb-2"
                                    htmlFor="fullName"
                                >
                                    Full name
                                </label>
                                <Input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    className="w-full block sm:text-base text-sm font-light sm:p-3 p-2 sm:ps-4 ps-2 mb-4 border border-slate-500 rounded transition-all focus:border-blue-500 hover:border-black"
                                    placeholder="Enter your full name"
                                ></Input>
                            </div>

                            <div className="flex flex-col justify-start lg:w-4/5 sm:w-96 w-72">
                                <label
                                    className="block w-full pb-2"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    className="w-full block sm:text-base text-sm font-light sm:p-3 p-2 sm:ps-4 ps-2 mb-4 border border-slate-500 rounded transition-all focus:border-blue-500 hover:border-black"
                                    placeholder="Enter at least 8 characters"
                                ></Input>
                            </div>

                            <div className="flex flex-col justify-start lg:w-4/5 sm:w-96 w-72">
                                <label
                                    className="block w-full pb-2"
                                    htmlFor="fullName"
                                >
                                    Account name
                                </label>
                                <Input
                                    id="accountName"
                                    name="accountName"
                                    type="text"
                                    className="w-full block sm:text-base text-sm font-light sm:p-3 p-2 sm:ps-4 ps-2 mb-4 border border-slate-500 rounded transition-all focus:border-blue-500 hover:border-black"
                                    placeholder="For example, company's or department's name"
                                ></Input>
                            </div>
                        </div>
                        <div className="flex md:gap-3 justify-between md:mb-20 sm:mb-32 mb-48 md:w-full sm:w-96 w-72 lg:px-24 md:px-12 mx-auto">
                            <Button className="w-fit h-fit px-5 py-2 sm:text-lg text-base bg-white border border-slate-600 rounded transition-all hover:!border-slate-800 hover:bg-slate-50">
                                <i className="fa-solid fa-chevron-left text-base text-black me-4"></i>
                                <span className="text-black">Back</span>
                            </Button>
                            <Button
                                className="w-fit h-fit px-5 py-2 bg-blue-600 sm:text-lg text-base border border-slate-500 rounded transition-all hover:bg-blue-800"
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
                            backgroundImage: `url(${createImg})`,
                        }}
                    ></div>
                    {/* <img className="block overflow-clip object-contain" src={welcomeImg}></img> */}
                </Col>
            </Row>
        </div>
    );
};

export default RegisterSecond;
