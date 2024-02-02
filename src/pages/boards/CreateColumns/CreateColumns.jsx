import { Button, Checkbox, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../../paths";
import Board from "../../../components/Board";
import { useEffect, useState } from "react";
import IconLabel from "../../../components/IconLabel/IconLabel";

const columns = [
    {
        title: "Item",
        dataIndex: "item",
        key: "item",
    },
    {
        title: "Owner",
        dataIndex: "owner",
        key: "owner",
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "status",
    },
    {
        title: "Due date",
        dataIndex: "dueDate",
        key: "dueDate",
    },
    {
        title: "Budget",
        dataIndex: "budget",
        key: "budget",
    },
    {
        title: "Priority",
        dataIndex: "priority",
        key: "priority",
    },
    {
        title: "Files",
        dataIndex: "files",
        key: "files",
    },
    {
        title: "Timeline",
        dataIndex: "timeline",
        key: "timeline",
    },
    {
        title: "Last updated",
        dataIndex: "lastUpdated",
        key: "lastUpdated",
    },
];

const sampleData = [
    {
        key: "1",
        owner: "A",
        status: "Working on it",
        dueDate: "! 31 Jan",
        lastUpdated: "10 hours ago",
        priority: "Low",
        timeline: "31 Jan - 2 Feb",
        budget: "$100",
        notes: "Action items",
        files: "",
    },
    {
        key: "2",
        owner: "B",
        status: "Working on it",
        dueDate: "! 31 Jan",
        lastUpdated: "10 hours ago",
        priority: "Low",
        timeline: "31 Jan - 2 Feb",
        budget: "$100",
        notes: "Action items",
        files: "",
    },
    {
        key: "3",
        owner: "C",
        status: "Working on it",
        dueDate: "! 31 Jan",
        lastUpdated: "10 hours ago",
        priority: "Low",
        timeline: "31 Jan - 2 Feb",
        budget: "$100",
        notes: "Action items",
        files: "",
    },
];

const CreateColumns = () => {
    const options = [
        {
            label: (
                <IconLabel
                    icon={"fa-solid fa-user"}
                    iconBgColor={"bg-sky-400"}
                    text={"Owner"}
                />
            ),
            value: "owner",
            description:
                "Assign accountability to any team member or guest so everyone is aligned on what they need to complete.",
        },
        {
            label: (
                <IconLabel
                    icon={"fa-solid fa-bars-progress"}
                    iconBgColor={"bg-green-400"}
                    text={"Status"}
                />
            ),
            value: "status",
            description:
                "Stay up-to-date on the progress and performance of all your tasks so you can optimize quickly.",
        },
        {
            label: (
                <IconLabel
                    icon={"fa-solid fa-calendar"}
                    iconBgColor={"bg-violet-400"}
                    text={"Due date"}
                />
            ),
            value: "dueDate",
            description:
                "Visualize deadlines, with your team so nothing falls through the cracks.",
        },
        {
            label: (
                <IconLabel
                    icon={"fa-solid fa-clock-rotate-left -scale-x-100"}
                    iconBgColor={"bg-green-400"}
                    text={"Last updated"}
                />
            ),
            value: "lastUpdated",
            description:
                "Easily see in one glance when and by who your work was last updated.",
        },
        {
            label: (
                <IconLabel
                    icon={"fa-solid fa-cubes"}
                    iconBgColor={"bg-violet-500"}
                    text={"Priority"}
                />
            ),
            value: "priority",
            description:
                "Keep track of your progress by focusing on what matters so you can reach your milestones.",
        },
        {
            label: (
                <IconLabel
                    icon={"fa-solid fa-bars-staggered"}
                    iconBgColor={"bg-purple-500 opacity-60"}
                    text={"Timeline"}
                />
            ),
            value: "timeline",
            description:
                "Visualize how long you and your team have to complete an item or project so everyone is aligned on start and due dates.",
        },
        {
            label: (
                <IconLabel
                    icon={"fa-solid fa-sack-dollar"}
                    iconBgColor={"bg-yellow-400"}
                    text={"Budget"}
                />
            ),
            value: "budget",
            description:
                "Set a budget to easily track all spending and expenses as your project progresses.",
        },
        {
            label: (
                <IconLabel
                    icon={"fa-solid fa-t"}
                    iconBgColor={"bg-yellow-500"}
                    text={"Notes"}
                />
            ),
            value: "notes",
            description:
                "Keep track of your progress by focusing on what matters so you can reach your milestones.",
        },
        {
            label: (
                <IconLabel
                    icon={"fa-solid fa-copy"}
                    iconBgColor={"bg-red-400"}
                    text={"Files"}
                />
            ),
            value: "files",
            description:
                "Instantly add your files to your board. Edit, comment, and tag any file to keep your team in the loop.",
        },
    ];

    const optionsChecked = options.map((option) => ({
        value: option.value,
        selected: false,
    }));

    const defaultCheckedList = ["owner", "status", "dueDate"];

    const [checkedList, setCheckedList] = useState(defaultCheckedList);

    const [optionDesc, setOptionDesc] = useState("");

    const navigate = useNavigate();

    const setCheckedOptions = () => {
        for (let option of optionsChecked) {
            let checkbox = document.getElementById(option.value);

            if (option.selected == true) {
                // if (!checkbox.classList.contains("box-checked")) {
                //     checkbox.classList.add("box-checked")
                // }
                checkbox.classList.add("box-checked");
            } else {
                // if (checkbox.classList.contains("box-checked")) {
                //     checkbox.classList.remove("box-checked")
                // }
                checkbox.classList.remove("box-checked");
            }
        }
    };

    const handleOnChange = (e) => {
        console.log("checked value: ", e.target.value);

        let addedValue = e.target.value;
        let newCheckedList = checkedList.map((item) => item);

        let index = newCheckedList.findIndex((value) => value === addedValue);

        console.log(index);

        if (index !== -1) {
            newCheckedList.splice(index, 1);
        } else {
            newCheckedList.push(addedValue);
        }

        setCheckedList(newCheckedList);

        let optionIndex = options.findIndex(
            (option) => option.value === addedValue
        );

        setOptionDesc(options[optionIndex].description);
    };

    const handleContinueClicked = () => {
        // console.log("Submit Actions!");

        //* Update redux store here
        // .....

        //* Navigate to next register page
        navigate(`${PATH.BOARD}/create-columns`);
    };

    const handleBackClicked = (e) => {
        e.preventDefault();

        navigate(`${PATH.REGISTER}/welcome`);
    };

    useEffect(() => {
        console.log(checkedList);

        for (let value of checkedList) {
            let index = optionsChecked.findIndex(
                (option) => option.value === value
            );

            optionsChecked[index].selected = !optionsChecked[index].selected;
        }

        setCheckedOptions();
    }, [checkedList]);

    return (
        <div className="w-full h-full">
            <Row justify={"center"} className="min-h-screen">
                <Col md={12} span={24}>
                    <form className="flex flex-col lg:w-3/4 w-4/5 h-full justify-center items-center lg:px-8 md:px-12 mx-auto">
                        <div className="flex flex-col justify-center gap-2">
                            <img
                                className="md:mb-16 sm:mb-10 mb-8"
                                src="https://cdn.monday.com/images/logos/logo-full-big.png"
                                width={140}
                                alt="monday logo"
                            ></img>

                            <h1
                                className="text-3xl pe-12"
                                style={{ letterSpacing: -0.5 }}
                            >
                                Let’s select the relevant columns for your board
                            </h1>

                            <p className="text-base font-light mb-5">
                                Choose from the most popular column types for
                                your work
                            </p>

                            {/* <Checkbox.Group
                                value={checkedList}
                                options={options}
                                onChange={handleChange}
                                className="optionList flex flex-wrap justify-start gap-y-4 mb-10"
                            /> */}

                            <div className="optionList flex flex-wrap justify-start gap-3 gap-y-4 mb-10">
                                {options.map((item) => (
                                    <Checkbox
                                        id={item.value}
                                        defaultChecked={() => {
                                            if (
                                                defaultCheckedList.includes(
                                                    item.value
                                                )
                                            ) {
                                                return true;
                                            }

                                            return false;
                                        }}
                                        onChange={handleOnChange}
                                        value={item.value}
                                        className={`w-fit h-fit py-1 px-2 rounded transition-all ${
                                            checkedList.includes(item.value)
                                                ? "border-2 border-blue-500"
                                                : "border border-slate-500"
                                        }`}
                                    >
                                        {item.label}
                                    </Checkbox>
                                ))}
                            </div>

                            {optionDesc && (
                                <div className="bg-slate-100 py-2 px-4 rounded-md -mt-7 mb-10">
                                    <p className="text-black text-base font-light ">
                                        {optionDesc}
                                    </p>
                                </div>
                            )}

                            <div className="flex md:gap-3 justify-between md:mb-20 mb-0 w-full mx-auto">
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
                                    <p className="ps-1 font-medium text-4xl text-slate-500">
                                        My Board Demo
                                    </p>
                                </div>

                                <div className="mb-10">
                                    <div className="h-2 w-52 bg-blue-400 rounded-full mb-5"></div>

                                    <Board type={"project"} rowCount={3} />
                                </div>

                                <div className="mb-10">
                                    <div className="h-2 w-52 bg-green-400 rounded-full mb-5"></div>

                                    <Board type={"task"} rowCount={1} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <img className="block overflow-clip object-contain" src={welcomeImg}></img> */}
                </Col>
            </Row>
        </div>
    );
};

export default CreateColumns;
