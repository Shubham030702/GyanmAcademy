import React from 'react'
import "./css/logo.css"
function Logo({toggleTheme}) {
    return (
        <>
            <div className="head">
                <div className="sun" title='Day Mode' id='change_Theme' onClick={()=>toggleTheme("day")}></div>
                <div className="logo">
                </div>
                <div className="moon" title='Night Mode' id='change_Theme' onClick={()=>toggleTheme("night")}></div>
            </div>
        </>
    )
}

export default Logo
