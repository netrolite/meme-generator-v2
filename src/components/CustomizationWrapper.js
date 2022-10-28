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

                    <div>
                        <input 
                            type="radio"
                            name="employment"
                            id="employmentChoice1"
                            value="unemployed"
                            onChange={props.handleChange}
                        />
                        <label htmlFor="employmentChoice1">Employed full-time</label>
                    </div>

                    <div>
                        <input 
                            type="radio"
                            name="employment"
                            id="employmentChoice2"
                            value="part-time"
                            onChange={props.handleChange}
                        />
                        <label htmlFor="employmentChoice2">Employed part-time</label>
                    </div>

                    <div>
                        <input 
                            type="radio"
                            name="employment"
                            id="employmentChoice3"
                            value="full-time"
                            onChange={props.handleChange}
                        />
                        <label htmlFor="employmentChoice3">Employed full-time</label>
                    </div>
                        
                    <div>
                        <input 
                            type="radio"
                            name="employment"
                            id="employmentChoice4"
                            value="business"
                            onChange={props.handleChange}
                        />
                        <label htmlFor="employmentChoice4">Running a business</label>
                    </div>

                </fieldset>
            </div>    
    )
}