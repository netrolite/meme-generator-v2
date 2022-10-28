import React from "react";

export default function CustomizationWrapper(props) {
    console.log(props)
    return (
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

                <label> 
                    <input
                        type="checkbox"
                        name="isLegal"
                        checked={props.isChecked}
                        onChange={props.handleChange}
                        />                
                        Is it legal? 
                </label>
            </div>    
    )
}