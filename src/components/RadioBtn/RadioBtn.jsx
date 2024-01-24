import { Radio } from 'antd'
import React from 'react'

const RadioBtn = ({value, text}) => {
    return (
        <Radio className="w-fit sm:px-5 sm:py-2 px-4 py-1 m-0 border border-slate-400 rounded-full hover:border-blue-400 hover:text-blue-600" value={value}>
            <p className='font-light sm:text-sm text-xs'>{text}</p>
        </Radio>
    )
}

export default RadioBtn
