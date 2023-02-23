import React from "react";

function Sidebar (props) {

const asideStyle = {
    background: "azure",
    width: "calc(30% - 10px)",
    marginLeft: "20px",
}
    return (
        <aside
            style={asideStyle}
            className = "sidebar-component">
            <h1>{props.taste}</h1>
        </aside>
        
    )
    
}
export default Sidebar;