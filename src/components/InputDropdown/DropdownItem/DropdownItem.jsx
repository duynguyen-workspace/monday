import React from 'react'

const DropdownItem = ({name, description}) => {
    return (
        <div className="">
            <h3 className="md:text-lg text-base font-medium">{name}</h3>
            <span className="md:text-base text-sm font-light">
                {description}
            </span>
        </div>
    )
}

export default DropdownItem
