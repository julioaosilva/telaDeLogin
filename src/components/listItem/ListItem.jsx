import React from "react";
import './ListItem.css';

const ListItem = (props) => {
    return (
        <>
            <div>{props.item}</div>
        </>
    )
}
export default ListItem