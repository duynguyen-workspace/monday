import { Button, Col, Divider, Input, Row } from "antd";
import welcomeImg from "../../../../assets/img/welcome-img.avif";
import googleIcon from "../../../../assets/img/icon-google.svg";
import { Link, useNavigate } from "react-router-dom";
import InputBtn from "../../../../components/InputBtn";
import InputErrorText from "../../../../components/InputErrorText";
import { PATH } from "../../../../paths";
import { useFormik } from "formik";

const RegisterFirst = () => {
    const navigate = useNavigate();

    const validate = (values) => {
        const errors = {};

        if (!values.email) {
            errors.email = "Please enter your email address!";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
            errors.email = "Invalid email address!";
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validate,
        onSubmit: (values) => {
            console.log("values: ", values);
            handleSubmit();
        },
    });

    const handleSubmit = () => {
        // console.log("Submit Actions!");

        //* Update redux store here
        // .....

        //* Navigate to next register page
        navigate(`${PATH.REGISTER}/create`);
    };

    return (
        <div className="w-full h-full">
            <Row justify={"center"} className="min-h-screen">
                <Col md={14} span={24}>
                    <div className="flex flex-col text-center h-full">
                        <div className="flex flex-col flex-grow justify-center align-middle">
                            <div className="mx-auto">
                                <div className="mb-12">
                                    <h1
                                        className="xl:text-5xl sm:text-4xl text-3xl text-nowrap mb-3"
                                        style={{ letterSpacing: -0.5 }}
                                    >
                                        Welcome to monday.com
                                    </h1>

                                    <p className="xl:text-xl sm:text-lg text-sm space-x-2 font-light">
                                        Get started - it's free. No credit card
                                        needed.
                                    </p>
                                </div>

                                <form className="">
                                    <Button
                                        type="button"
                                        className="w-full h-fit border border-slate-500 rounded transition-all hover:bg-slate-600 hover:bg-opacity-10"
                                    >
                                        <div className="flex justify-center align-middle md:p-3 p-1">
                                            <img
                                                src={googleIcon}
                                                alt="Google Icon"
                                                width={25}
                                                height={25}
                                                className="inline-block"
                                            />
                                            <p className="md:text-lg text-base font-light text-black ps-2">
                                                Continue with Google
                                            </p>
                                        </div>
                                    </Button>

                                    <Divider>Or</Divider>

                                    <InputBtn
                                        id="email"
                                        name="email"
                                        type="text"
                                        placeholder="name@company.com"
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        status={
                                            formik.errors.email ? "error" : ""
                                        }
                                    />
                                    {formik.errors.email && (
                                        <InputErrorText text={formik.errors.email}/>
                                    )}

                                    <Button
                                        className="w-full h-fit md:p-3 mb-5 bg-blue-600 sm:text-lg text-base text-white border border-slate-500 rounded transition-all hover:bg-blue-800"
                                        type="button"
                                        onClick={formik.handleSubmit}
                                    >
                                        <p className="text-white">Continue</p>
                                    </Button>
                                </form>

                                <p className="sm:text-lg text-base font-normal">
                                    By proceeding, you agree to the <br></br>{" "}
                                    <Link
                                        to={""}
                                        className="text-blue-600 hover:underline hover:text-blue-800"
                                    >
                                        Terms of Service
                                    </Link>{" "}
                                    and{" "}
                                    <Link
                                        to={""}
                                        className="text-blue-600 hover:underline hover:text-blue-800"
                                    >
                                        Privacy Policy
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="mb-12">
                            <p className="sm:text-lg text-base font-normal">
                                Already have an account?{" "}
                                <Link
                                    to=""
                                    className="text-blue-600 hover:underline hover:text-blue-800"
                                >
                                    Log in
                                </Link>{" "}
                            </p>
                        </div>
                    </div>
                </Col>
                <Col md={10} span={0}>
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${welcomeImg})`,
                        }}
                    ></div>
                    {/* <img className="block overflow-clip object-contain" src={welcomeImg}></img> */}
                </Col>
            </Row>
        </div>
    );
};

export default RegisterFirst;
