import React from "react";
import "./LabelDefault.css";

const LabelDefault = (props) => {
    const titleLabel = props.title;
    return (
        <>
            <label className="label-default-style" htmlFor={props.for} >
                {titleLabel}
            </label>
        </>
    )
}

export default LabelDefault