import { Button, Col, Row } from "antd";
import CheckboxList from "../../../../components/CheckboxList"
import howImg from "../../../../assets/img/how-img.avif";

const RegisterLast = () => {
    const checkboxContent = ["Youtube ad", "Friend / Colleague", "Consultant", "TV / Streaming service", "Billboard / Public transit ad", "LinkedIn", "Social media (Facebook, Instagram, Reddit, etc.)", "Audio ad (Podcast, Spotify)", "Search engine (Google, Bing, etc.)", "Software review sites", "Other"] 

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

                            <div className="md:h-fit h-80 w-full md:overflow-y-clip overflow-y-scroll overflow-x-clip">
                                <div className="flex flex-col justify-start lg:w-4/5 sm:w-96 w-80 mb-12">
                                    <h3
                                        className="md:text-2xl text-xl lg:text-nowrap mb-6"
                                        style={{ letterSpacing: -0.5 }}
                                    >
                                        One last question, how did you hear about us?
                                    </h3>

                                    <CheckboxList content={checkboxContent}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex md:gap-3 justify-between md:mb-20 sm:mb-32 mb-48 md:w-full sm:w-96 w-80 lg:px-24 md:px-12 mx-auto">
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
                            backgroundImage: `url(${howImg})`,
                        }}
                    ></div>
                </Col>
            </Row>
        </div>
    )
}

export default RegisterLast
