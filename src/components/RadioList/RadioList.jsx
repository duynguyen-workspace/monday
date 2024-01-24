import { Radio } from 'antd'
import RadioBtn from '../RadioBtn'

const RadioList = ({onChange, option, name, content}) => {
    return (
        <Radio.Group name={name} className="flex flex-wrap justify-start align-middle gap-x-2 gap-y-5" onChange={onChange} value={option}>
            {content.map((radio) => (<RadioBtn key={content.indexOf(radio) + 1} text={radio} value={content.indexOf(radio) + 1} />))}
        </Radio.Group>
    )
}

export default RadioList
