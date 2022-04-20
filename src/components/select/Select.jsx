import React from "react";
import "./Select.css";

const Select = (props) => {
    const options = props.options;
    const createLabel = props.label;
    const selectOptions = options.map((opt) => {
        return (
            <option className="select-option" key={opt.id}>{opt.name}</option>
        )
    });

    return (
        <div className="select-container shadow-default">
            <p>{createLabel}</p>
            <select className="select-style" defaultValue={props?.defaultValue} onChange={props.onChange} >
                {selectOptions}
            </select>
        </div>
    )
};
export default Select;