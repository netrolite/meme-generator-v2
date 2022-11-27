import React, { useEffect, useState } from "react";
import TopBottomInputs from "./TopBottomInputs";
import CustomizationWrapper from "./CustomizationWrapper";
import GetMemeButton from "./GetMemeButton";
import ImageTextWrapper from "./ImageTextWrapper";

export default function Meme() {
    function getRandomIndex() { return Math.floor(Math.random() * allURL.length) }

    const [allURL, setAllURL] = useState([]);
    const [url, setUrl] = useState(null);
    const [text, setText] = useState(
        { topText: "", bottomText: "" }
    )
    const [fontSize, setFontSize] = useState("32px");
    const [textStroke, setTextStroke] = useState("2px black");
    const [showAdvanced, setShowAdvanced] = useState(false);
    

    // gets 1 random image URL out of 100
    function getRandomUrl() {
        let newUrl = allURL[getRandomIndex()].url

        // makes sure images don't repeat
        if(newUrl === url) {
            newUrl = allURL[getRandomIndex()].url
            if(newUrl === url) {
                newUrl = allURL[getRandomIndex()].url
                if(newUrl === url) {
                    newUrl = allURL[getRandomIndex()].url
                }
            }
        }
        setUrl(newUrl);
    }

    function fetchMemes() {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => {
                if(!res.ok) throw new Error("Response not ok");
                console.log("fetched");
                return res.json();
            })
            .then(data => {
                setAllURL(data.data.memes);
            })
            .catch(err => console.log("Fetch error:", err))
    }

    useEffect(() => {
        if (allURL.length > 0) {
            getRandomUrl();
        }
        else fetchMemes();
    }, [allURL])

    // fired when either "top text" or "bottom text" input fields are changed
    // and checks which one of them was changed to render text accordingly
    function handleInputChange(event) {
        const { type, name, value, checked } = event.target
        setText(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    function toggleAdvanced() {
        setShowAdvanced(prevState => !prevState);
    }

    // removes all whitespace and replaces commas with periods
    function formatInput(string) {
        string = string.replace(/\s/g, "");
        return string.replace(/,/g, ".");
    }

    function applyFontSize(event) {
        event.preventDefault();

        const input = document.querySelector("#font-size-input").value
        // regex to check if the unit (px, rem, em...) is specified
        const regexUnitSpecified = /^\s*\d+\s*([.,]\s*\d+)?\s*(px|rem|em|cm|mm|in|pt|pc|ex|ch|vw|vh|vmin|vmax|%)\s*$/i

        // regex to check if the unit (px, rem, em...) is NOT specified
        const regexUnitUnspecified = /^\s*\d+\s*([.,]\s*\d+)?\s*$/

        // if user has specified the unit ("33px" or "2.5em")
        if(regexUnitSpecified.test(input)) {
            // removes all whitespaces
            setFontSize(formatInput(input))
        }  
        // if user left the unit unspecified ("55" instead of "55px"),
        // defaults to using px
        else if(regexUnitUnspecified.test(input)) {
            setFontSize(formatInput(input) + "px")
        } 
        else console.error("Invalid input!")
   }

   function applyStroke(event) {
        event.preventDefault();

        const input = document.querySelector("#stroke-input").value
        // checks if the user typed "px" after numeric value of text-stroke
        const regexUnitSpecified = /^\s*\d+\s*([.,]\s*\d+)?\s*px\s*$/i
        // checks if the user did NOT type "px" after numeric value of text-stroke
        const regexUnitUnspecified = /^\s*\d+\s*([.,]\s*\d+)?\s*$/

        if(regexUnitSpecified.test(input)) {
            setTextStroke(formatInput(input) + " black")
        }
        else if(regexUnitUnspecified.test(input)) {
            setTextStroke(formatInput(input) + "px black");
        }
        else console.error("Text stroke can only use 'px' values")
   }
    return (
        <main className="meme">
            <TopBottomInputs 
                handleInputChange={handleInputChange} 
                topBottomText={text}
            />

            <CustomizationWrapper 
                applyFontSize={applyFontSize}
                applyStroke={applyStroke}
                handleChange={handleInputChange}
                toggleAdvanced={toggleAdvanced}
                showAdvanced={showAdvanced}
            />            

            <GetMemeButton 
                getRandomUrl={getRandomUrl}
            />

            {
                url
                ?
                <ImageTextWrapper 
                    topText={text.topText}
                    bottomText={text.bottomText}
                    fontSize={fontSize}
                    textStroke={textStroke}
                    url={url}
                />
                :
                "Loading..."
            }
            

        </main> 
    )
}
