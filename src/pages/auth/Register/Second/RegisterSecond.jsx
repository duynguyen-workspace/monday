import { Button, Col, Row } from "antd";
import createImg from "../../../../assets/img/create-img.avif";
import { useNavigate } from "react-router-dom";
import InputField from "../../../../components/InputField";
import { PATH } from "../../../../paths";
import { useFormik } from "formik";

const RegisterSecond = () => {
    const navigate = useNavigate();

    const validate = (values) => {
        const errors = {};

        if (!values.fullName) {
            errors.fullName = "Please enter your full name!";
        }

        if (!values.password) {
            errors.password = "Please enter your password!";
        } else if (values.password.length < 8) {
            errors.password = "Please enter a minimum of 8 characters";
        } else if (
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&-]/i.test(values.password)
        ) {
            errors.password = "Your password must contain at least 1 number, 1 uppercase, 1 lowercase, and 1 special characters";
        }

        if (!values.accountName) {
            errors.accountName = "Please enter your account name!";
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            fullName: "",
            password: "",
            accountName: "",
        },
        validate,
        onSubmit: (values) => {
            console.log("values: ", values);
            
            formik.setSubmitting(false)
            handleSubmit();
        },
    });

    const handleSubmit = () => {
        // console.log("Submit Actions!");

        //* Update redux store here
        // .....

        //* Navigate to next register page
        navigate(`${PATH.REGISTER}/ask`);
    };

    const handleBackClicked = (e) => {
        e.preventDefault();

        navigate(`${PATH.REGISTER}/welcome`);
    };

    return (
        <div className="w-full h-full">
            <Row justify={"center"} className="min-h-screen">
                <Col md={14} span={24}>
                    <form className="flex flex-col h-full mx-auto">
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
                                <InputField
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    placeholder="Enter your full name"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.fullName}
                                    status={
                                        (formik.touched.fullName && formik.errors.fullName) ? "error" : ""
                                    }
                                    label="Full name"
                                    error={{
                                        condition: formik.touched.fullName && formik.errors.fullName,
                                        text: formik.errors.fullName
                                    }}
                                />
                            </div>

                            <div className="flex flex-col justify-start lg:w-4/5 sm:w-96 w-72">
                                <InputField
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Enter at least 8 characters"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                    status={
                                        (formik.touched.password && formik.errors.password) ? "error" : ""
                                    }
                                    label="Password"
                                    error={{
                                        condition: formik.touched.password && formik.errors.password,
                                        text: formik.errors.password
                                    }}
                                />
                            </div>

                            <div className="flex flex-col justify-start lg:w-4/5 sm:w-96 w-72">
                                <InputField
                                    id="accountName"
                                    name="accountName"
                                    type="text"
                                    placeholder="For example, company's or department's name"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.accountName}
                                    status={
                                        (formik.touched.accountName && formik.errors.accountName) ? "error" : ""
                                    }
                                    label="Account name"
                                    error={{
                                        condition: formik.touched.accountName && formik.errors.accountName,
                                        text: formik.errors.accountName
                                    }}
                                />
                            </div>
                        </div>
                        <div className="flex md:gap-3 justify-between md:mb-20 sm:mb-32 mb-48 md:w-full sm:w-96 w-72 lg:px-24 md:px-12 mx-auto">
                            <Button
                                className="w-fit h-fit px-5 py-2 sm:text-lg text-base bg-white border border-slate-600 rounded transition-all hover:!border-slate-800 hover:bg-slate-50"
                                onClick={handleBackClicked}
                            >
                                <i className="fa-solid fa-chevron-left text-base text-black me-4"></i>
                                <span className="text-black">Back</span>
                            </Button>
                            <Button
                                className="w-fit h-fit px-5 py-2 bg-blue-600 sm:text-lg text-base border border-slate-500 rounded transition-all hover:bg-blue-800"
                                onClick={formik.handleSubmit}
                            >
                                <p className="text-white">
                                    Continue
                                    <i className="fa-solid fa-chevron-right text-base ps-4"></i>
                                </p>
                            </Button>
                        </div>
                    </form>
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
