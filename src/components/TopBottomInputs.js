import React from "react";

export default function TopBottomInputs(props) {
    return (
        <form className="top-bottom-inputs">
                <input 
                    name="topText"
                    placeholder="Top text"
                    onChange={props.handleInputChange}
                />
                <input 
                    name="bottomText"
                    placeholder="Bottom text"
                    onChange={props.handleInputChange}
                />
            </form>
    )
}