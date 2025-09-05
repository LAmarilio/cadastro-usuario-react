import './NavItem.css' 
import React from "react"

export default props =>
    <a className="item-navegacao" href={`${props.ref}`}>
        <i className={`${props.style}`}></i> {props.title}
    </a>