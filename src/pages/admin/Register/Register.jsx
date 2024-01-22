import { Button, Col, Divider, Input, Row } from "antd";
import React from "react";
import "./index.module.scss"

import welcomeImg from "../../../assets/img/welcome-img.avif"
import googleIcon from "../../../assets/img/icon-google.svg"
import { Link } from "react-router-dom";
import Title from "antd/es/typography/Title";

const Register = () => {
    return (
        <div className="register">
            <Row justify={"center"} align={"middle"}>
                <Col span={14}>
                    <div className="w-3/5 mx-auto">
                        <div className="flex flex-col justify-between align-middle gap-y-48">
                            <div className="text-center">
                                <div className="mb-12">
                                    <div className="w-full">
                                        <h1 className="text-4xl text-nowrap mb-3">Welcome to monday.com</h1>
                                    </div>
                                    <p className="text-lg font-light">Get started - it's free. No credit card needed.</p>
                                </div>

                                <button className="w-8/12 border border-slate-500 rounded transition-all hover:bg-blue-200 hover:bg-opacity-10">
                                    <div className="flex justify-center align-middle p-2">
                                        <img src={googleIcon} alt="Google Icon" width={20} height={20} className="inline-block"/>
                                        <p className="text-base font-light ps-2">Continue with Google</p>
                                    </div>
                                </button>

                                <Divider className="w-8/12">Or</Divider>

                                <input className="w-8/12 p-3 ps-5 mb-4 border border-slate-500 rounded transition-all focus:border-blue-500 hover:border-black" placeholder="name@company.com"></input>

                                <button className="w-8/12 p-3 mb-5 bg-blue-600 text-white border border-slate-500 rounded transition-all" size="large">Continue</button>

                                <p className="text-lg font-normal">By proceeding, you agree to the <br></br> <Link to={""} className="text-blue-600 hover:underline">Terms of Service</Link> and <Link to={""} className="text-blue-600 hover:underline">Privacy Policy</Link></p>
                            </div>
                            <div className="text-center">
                                <p className="text-lg font-normal">Already have an account? <Link to="" className="text-blue-600 hover:underline">Log in</Link> </p>
                            </div>  

                        </div>    
                    </div>
                </Col>
                <Col span={10}>
                    <img src={welcomeImg} alt="Welcome" />
                </Col>
            </Row>
        </div>
    );
};

export default Register;
