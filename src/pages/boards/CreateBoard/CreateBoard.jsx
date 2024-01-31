import { Button, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import InputField from "../../../components/InputField";
import { PATH } from "../../../paths";
import { useFormik } from "formik";
import Board from "../../../components/Board";

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
        navigate(`${PATH.BOARD}/create-columns`);
    };

    return (
        <div className="w-full h-full">
            <Row justify={"center"} className="min-h-screen">
                <Col md={12} span={24}>
                    <form className="flex flex-col h-full justify-center items-center lg:px-8 md:px-12 mx-auto">
                        <div className="flex flex-col justify-center gap-2">
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

                                <div className="bg-slate-100 px-5 py-8 rounded-md mt-10">
                                    <p className="text-black text-base font-light ">
                                        <span className="bg-slate-300 py-1">
                                            In
                                        </span>{" "}
                                        monday.com, "boards" are the place where
                                        all your content lives.
                                    </p>
                                </div>
                            </div>

                            <div className="flex md:gap-3 md:justify-end justify-center md:mb-20 mb-0 w-full mx-auto">
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
                            <div className="flex flex-col w-full">
                                <div className="py-2 mb-20">
                                    {formik.values.boardName ? (
                                        <p className="ps-1 font-medium text-4xl text-slate-500">
                                            {formik.values.boardName}
                                        </p>
                                    ) : (
                                        <div className="h-2 w-52 bg-slate-300 rounded-full"></div>
                                    )}
                                </div>

                                <div className="mb-10">
                                    <div className="h-2 w-52 bg-blue-400 rounded-full mb-5"></div>

                                    <Board type={"project"} rowCount={5} />
                                </div>

                                {/* <table className="w-full border border-solid border-l-0 rounded-l-lg border-slate-300 mb-10">
                                    <thead>
                                        <tr className="">
                                            <th className="p-4 border-l-8 border-l-blue-400 rounded-tl-lg">
                                                <div className="h-1 w-4/5 bg-slate-300 rounded-full"></div>
                                            </th>
                                            <th className="p-4">
                                                <div className="h-1 w-4/5 bg-slate-300 rounded-full"></div>
                                            </th>
                                            <th className="p-4">
                                                <div className="h-1 w-4/5 bg-slate-300 rounded-full"></div>
                                            </th>
                                            <th className="p-4">
                                                <div className="h-1 w-4/5 bg-slate-300 rounded-full"></div>
                                            </th>
                                            <th className="">
                                                <i className="fa-solid fa-plus"></i>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="p-4 border-l-8 border-l-blue-400">
                                                <div className="h-1 w-4/5 bg-slate-300 rounded-full"></div>
                                            </td>
                                            <td className="p-4">
                                                <div className="h-1 w-4/5 bg-slate-300 rounded-full"></div>
                                            </td>
                                            <td className="p-4">
                                                <div className="h-1 w-4/5 bg-slate-300 rounded-full"></div>
                                            </td>
                                            <td className="p-4">
                                                <div className="h-1 w-4/5 bg-slate-300 rounded-full"></div>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-l-8 border-l-blue-400">
                                                <div className="h-1 w-4/5 bg-slate-300 rounded-full"></div>
                                            </td>
                                            <td className="p-4">
                                                <div className="h-1 w-4/5 bg-slate-300 rounded-full"></div>
                                            </td>
                                            <td className="p-4">
                                                <div className="h-1 w-4/5 bg-slate-300 rounded-full"></div>
                                            </td>
                                            <td className="p-4">
                                                <div className="h-1 w-4/5 bg-slate-300 rounded-full"></div>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td className="p-5 border-l-8 border-l-blue-400">
                                                <div className="h-1 w-4/5 bg-slate-300 rounded-full"></div>
                                            </td>
                                            <td className="p-5">
                                                <div className="h-1 w-4/5 bg-slate-300 rounded-full"></div>
                                            </td>
                                            <td className="p-5">
                                                <div className="h-1 w-4/5 bg-slate-300 rounded-full"></div>
                                            </td>
                                            <td className="p-4">
                                                <div className="h-1 w-4/5 bg-slate-300 rounded-full"></div>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-l-8 border-l-blue-400">
                                                <div className="h-1 w-4/5 bg-slate-300 rounded-full"></div>
                                            </td>
                                            <td className="p-4">
                                                <div className="h-1 w-4/5 bg-slate-300 rounded-full"></div>
                                            </td>
                                            <td className="p-4">
                                                <div className="h-1 w-4/5 bg-slate-300 rounded-full"></div>
                                            </td>
                                            <td className="p-4">
                                                <div className="h-1 w-4/5 bg-slate-300 rounded-full"></div>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="p-4 border-l-8 border-l-blue-400 opacity-30"
                                                colSpan={5}
                                            >
                                                <div className="h-1 w-1/6 bg-slate-300 rounded-full"></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table> */}

                                <div className="mb-10">
                                    <div className="h-2 w-52 bg-green-400 rounded-full mb-5"></div>

                                    <Board type={"task"} rowCount={1} />
                                </div>

                                {/* <table className="w-full border border-solid border-l-0 rounded-l-lg border-slate-300 mb-10">
                                    <thead>
                                        <tr className="">
                                            <th className="p-4 border-l-8 border-l-green-400 rounded-tl-lg">
                                                <div className="h-1 w-4/5 bg-slate-300 rounded-full"></div>
                                            </th>
                                            <th className="p-4">
                                                <div className="h-1 w-4/5 bg-slate-300 rounded-full"></div>
                                            </th>
                                            <th className="p-4">
                                                <div className="h-1 w-4/5 bg-slate-300 rounded-full"></div>
                                            </th>
                                            <th className="p-4">
                                                <div className="h-1 w-4/5 bg-slate-300 rounded-full"></div>
                                            </th>
                                            <th className="">
                                                <i class="fa-solid fa-plus"></i>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td
                                                className="p-4 border-l-8 border-l-green-400 opacity-30"
                                                colSpan={5}
                                            >
                                                <div className="h-1 w-1/6 bg-slate-300 rounded-full"></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table> */}
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
