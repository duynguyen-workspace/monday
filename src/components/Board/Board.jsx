import { Table } from 'antd';
import React from 'react'

const Board = ({type, rowCount}) => {

    const sharedOnCell = (_, index) => {
        if (index === rowCount - 1) {
            return {
                colSpan: 0,
            };
        }
        return {};
    };

    const columnTemplate = [
        {
            title: (<div className="h-1 w-4/5 bg-slate-300 rounded-full"></div>),
            dataIndex: "head",
            key: "head",
            className: `lg:w-44 w-40 border-l-8 ${type === "project" ? 'border-l-blue-400' : 'border-l-green-400'} !bg-white`,
            onCell: (_, index) => ({
                colSpan: index === rowCount - 1 ? 5 : 1,
            }),
        },
        {
            title: (<div className="h-1 w-4/5 bg-slate-300 rounded-full mx-auto"></div>),
            dataIndex: "2",
            key: "2",
            className: `!bg-white`,
            onCell: sharedOnCell
        },
        {
            title: (<div className="h-1 w-4/5 bg-slate-300 rounded-full mx-auto"></div>),
            dataIndex: "3",
            key: "3",
            className: `!bg-white`,
            onCell: sharedOnCell
        },
        {
            title: (<div className="h-1 w-4/5 bg-slate-300 rounded-full mx-auto"></div>),
            dataIndex: "4",
            key: "4",
            className: `!bg-white`,
            onCell: sharedOnCell
        },
        {
            title: (<i className="fa-solid fa-plus"></i>),
            dataIndex: "addCol",
            key: "addCol",
            className: `w-10 !bg-white`,
            onCell: sharedOnCell
        },
    ];

    const renderRows = () => {
        let rows = []

        for (let i = 0; i < rowCount - 1; i++) {
            rows.push({
                key: `${i}`,
                head: (<div className="h-1 w-4/5 bg-slate-300 rounded-full"></div>),
                2: (<div className="h-1 w-4/5 bg-slate-300 rounded-full mx-auto"></div>),
                3: (<div className="h-1 w-4/5 bg-slate-300 rounded-full mx-auto"></div>),
                4: (<div className="h-1 w-4/5 bg-slate-300 rounded-full mx-auto"></div>),
                addCol: "",
            })
        }

        rows.push({
            key: `${rowCount - 1}`,
            head: (<div className="h-1 w-1/6 bg-slate-300 rounded-full"></div>)
        })

        return rows
    }

    return (
        <Table className='board' columns={columnTemplate} dataSource={renderRows()} pagination={false}/>
    )
}

export default Board
