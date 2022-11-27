import React, { useEffect } from "react";
import arrow from "../media/arrow.svg"

export default function CustomizationWrapper(props) {
    // if showAdvanced is true, removes "active class". Otherwise, adds "active" class
    function showHideComponent() {
        if(props.showAdvanced) {
            document.querySelector(".customization-wrapper").classList.remove("active");
            document.querySelector(".arrow-icon").classList.remove("inverted");
            document.querySelector(".customization-wrapper").classList.remove("pointer-events")
        }
        else {
            document.querySelector(".customization-wrapper").classList.add("active");
            document.querySelector(".arrow-icon").classList.add("inverted");
            setTimeout(() => {
                document.querySelector(".customization-wrapper").classList.add("pointer-events")
            }, 200)
        } 
    }    

    // a function to call 2 other functions
    function callOtherFunctions() {
        props.toggleAdvanced();
        showHideComponent();
    }
    
    return (
        <>
            <button 
                className="show-advanced-btn"
                onClick={callOtherFunctions}
                >
                    { props.showAdvanced ? "Hide" : "Show"} advanced settings
                    <img 
                        src={arrow} 
                        className="arrow-icon" 
                    />
            </button>
            <div className="customization-wrapper-wrapper">
                <div className="customization-wrapper">
                    <form className="cust-option-wrapper">
                        <input 
                            className="cust-input"
                            id="font-size-input"
                            placeholder="Font size (default 32px)"
                        />
                        <button 
                            className="apply-button"
                            onClick={props.applyFontSize}
                        >
                            Apply
                        </button>
                    </form>

                    <form className="cust-option-wrapper">
                        <input 
                            className="cust-input"
                            id="stroke-input"
                            placeholder="Font stroke (default 2px)"
                        />
                        <button 
                            className="apply-button"
                            onClick={props.applyStroke}
                        >
                            Apply
                        </button>
                    </form>
                </div>    
            </div>
        </>
    )
}