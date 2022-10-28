import React from "react";

export default function CustomizationWrapper(props) {
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

                <fieldset>
                    <legend>Your employment status</legend>

                    <label style={{ display: "block" }}>
                        <input 
                            type="radio"
                            name="employment"
                            value="unemployed"
                            onChange={props.handleChange}
                        />
                        Unemployed
                    </label>
                    

                    <label style={{ display: "block" }}>
                        <input 
                            type="radio"
                            name="employment"
                            value="part-time"
                            onChange={props.handleChange}
                        />
                        Employed part-time
                    </label>

                    <label style={{ display: "block" }}>
                        <input 
                            type="radio"
                            name="employment"
                            value="full-time"
                            onChange={props.handleChange}
                        />
                        Employed full-time
                    </label>

                    <label style={{ display: "block" }}>
                        <input 
                            type="radio"
                            name="employment"
                            value="business"
                            onChange={props.handleChange}
                        />
                        Running a business
                    </label>

                    
                </fieldset>
            </div>    
    )
}