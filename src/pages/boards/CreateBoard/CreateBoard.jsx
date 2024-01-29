import { Button, Col, Divider, Progress, Row } from "antd";
import welcomeImg from "../../../assets/img/welcome-img.avif";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../../components/InputField";
import { PATH } from "../../../paths";
import { useFormik } from "formik";

const CreateBoard = () => {
    const navigate = useNavigate();

    const validate = (values) => {
        const errors = {};

        if (!values.boardName) {
            errors.boardName = "Please enter a board name!";
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            boardName: "",
        },
        validate,
        onSubmit: (values) => {
            console.log("values: ", values);

            formik.setSubmitting(false);
            handleSubmit();
        },
    });

    const handleSubmit = () => {
        // console.log("Submit Actions!");

        //* Update redux store here
        // .....

        //* Navigate to next register page
        navigate(`${PATH.REGISTER}/board/create-columns`);
    };

    return (
        <div className="w-full h-full">
            <Row justify={"center"} className="min-h-screen">
                <Col md={12} span={24}>
                    <form className="flex flex-col h-full mx-auto">
                        <div className="flex flex-col flex-grow md:justify-start justify-center lg:p-24 md:p-12 md:mx-0 mx-auto gap-2">
                            <img
                                className="md:mb-16 sm:mb-10 mb-8"
                                src="https://cdn.monday.com/images/logos/logo-full-big.png"
                                width={140}
                                alt="monday logo"
                            ></img>
                            <h1
                                className="text-3xl mb-6"
                                style={{ letterSpacing: -0.5 }}
                            >
                                Let's start working together
                            </h1>

                            <div className="flex flex-col justify-start w-full mb-10">
                                <InputField
                                    id="boardName"
                                    name="boardName"
                                    type="text"
                                    placeholder="My first board"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.boardName}
                                    status={
                                        formik.touched.boardName &&
                                        formik.errors.boardName
                                            ? "error"
                                            : ""
                                    }
                                    label="Give your board a name, e.g. marketing plan, sales pipeline, quarterly roadmap..."
                                    error={{
                                        condition:
                                            formik.touched.boardName &&
                                            formik.errors.boardName,
                                        text: formik.errors.boardName,
                                    }}
                                />

                                <p className="bg-slate-100 text-black text-base font-light p-5">
                                    In monday.com, "boards" are the place where
                                    all your content lives.
                                </p>
                            </div>

                            <div className="flex md:gap-3 md:justify-end justify-center md:mb-20 sm:mb-32 mb-48 w-full mx-auto">
                                <Button
                                    className="w-fit h-fit px-5 py-2 bg-blue-600 sm:text-lg text-base border border-slate-500 rounded transition-all hover:bg-blue-800"
                                    onClick={formik.handleSubmit}
                                >
                                    <p className="text-white">
                                        Next
                                        <i className="fa-solid fa-chevron-right text-base ps-4"></i>
                                    </p>
                                </Button>
                            </div>
                        </div>
                    </form>
                </Col>
                <Col md={12} span={0}>
                    <div className="flex w-full h-full justify-end items-center bg-slate-100">
                        <div className="bg-white w-11/12 shadow-2xl shadow-blue-200 ps-8 py-14">
                            <div className="flex flex-col">
                                <div className="h-2 w-52 bg-slate-300 rounded-full mb-20"></div>
                                <div className="">
                                    <div className="h-2 w-52 bg-blue-400 rounded-full mb-5"></div>

                                    <table className="w-full border border-slate-400 border-l-8 border-l-blue-400 rounded-l-xl">
                                        <thead>
                                            <tr>
                                                <th className="p-5">
                                                    <div className="h-2 w-24 bg-slate-300 rounded-full"></div>
                                                </th>
                                                <th className="p-5">
                                                    <div className="h-2 w-24 bg-slate-300 rounded-full"></div>
                                                </th>
                                                <th className="p-5">
                                                    <div className="h-2 w-24 bg-slate-300 rounded-full"></div>
                                                </th>
                                                <th className="p-5">
                                                    <div className="h-2 w-24 bg-slate-300 rounded-full"></div>
                                                </th>
                                                <th className="p-5">
                                                    <i class="fa-solid fa-plus"></i>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="p-5">
                                                    <div className="h-2 w-24 bg-slate-300 rounded-full"></div>
                                                </td>
                                                <td className="p-5">
                                                    <div className="h-2 w-24 bg-slate-300 rounded-full"></div>
                                                </td>
                                                <td className="p-5">
                                                    <div className="h-2 w-24 bg-slate-300 rounded-full"></div>
                                                </td>
                                                <td className="p-5">
                                                    <div className="h-2 w-24 bg-slate-300 rounded-full"></div>
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td className="p-5">
                                                    <div className="h-2 w-24 bg-slate-300 rounded-full"></div>
                                                </td>
                                                <td className="p-5">
                                                    <div className="h-2 w-24 bg-slate-300 rounded-full"></div>
                                                </td>
                                                <td className="p-5">
                                                    <div className="h-2 w-24 bg-slate-300 rounded-full"></div>
                                                </td>
                                                <td className="p-5">
                                                    <div className="h-2 w-24 bg-slate-300 rounded-full"></div>
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td className="p-5">
                                                    <div className="h-2 w-24 bg-slate-300 rounded-full"></div>
                                                </td>
                                                <td className="p-5">
                                                    <div className="h-2 w-24 bg-slate-300 rounded-full"></div>
                                                </td>
                                                <td className="p-5">
                                                    <div className="h-2 w-24 bg-slate-300 rounded-full"></div>
                                                </td>
                                                <td className="p-5">
                                                    <div className="h-2 w-24 bg-slate-300 rounded-full"></div>
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td className="p-5">
                                                    <div className="h-2 w-24 bg-slate-300 rounded-full"></div>
                                                </td>
                                                <td className="p-5">
                                                    <div className="h-2 w-24 bg-slate-300 rounded-full"></div>
                                                </td>
                                                <td className="p-5">
                                                    <div className="h-2 w-24 bg-slate-300 rounded-full"></div>
                                                </td>
                                                <td className="p-5">
                                                    <div className="h-2 w-24 bg-slate-300 rounded-full"></div>
                                                </td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="h-2 w-52 bg-green-400 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    {/* <img className="block overflow-clip object-contain" src={welcomeImg}></img> */}
                </Col>
            </Row>
        </div>
    );
};

export default CreateBoard;
