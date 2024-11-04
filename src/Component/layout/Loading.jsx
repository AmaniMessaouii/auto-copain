import React from 'react'
import logo from "../../assets/app-logo.svg"

function Loading() {
    return (
        <div className='loading-container '>
            <img src={logo} alt="Loading..." className='loading-img'/>
        </div>
    )
}

export default Loading