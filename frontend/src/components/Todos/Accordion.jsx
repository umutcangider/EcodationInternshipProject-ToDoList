import React, { useState } from 'react'

function Accordion({title, description, updateShow, deleteShow, handleCheckBoxChange, isChecked}) {

    const [isActive, setActive] = useState(false);
    const [isCompleted, setCompleted] = useState(isChecked);
    

    return (
        <>
            {/* LIST */}
            <div className="accordion">
                <div className={`accordionHeading rounded-top ${isActive === false ? "rounded-bottom" : ""}`}>
                    <div className="container">
                        <div className="title">
                            <span>
                                <input onClick={() => setCompleted(!isCompleted)} onChange={handleCheckBoxChange} type="checkbox"  defaultChecked={isChecked}/>
                            </span>
                            <h5 className={`${(isCompleted === true)  ? "completed" : ""}`}>{title}</h5>
                        </div>
                        <div className="button-group">
                            <span>
                                <i onClick={() => setActive(!isActive)} className={(isActive) ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"}></i>
                            </span>
                            <span>
                                <i className="fa-solid fa-pen-to-square" onClick={updateShow}></i>
                            </span>
                            <span>
                                <i className="fa-solid fa-trash" onClick={deleteShow}></i> 
                            </span>
                        </div>
                    </div>
                </div>

                <div className={`accordionContent ${isActive === true ? "show-content" : ""}`}>
                    <div className={` container ${(isCompleted === true) ? "completed" : ""}`} >
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Accordion