import React from "react"
import downloadImage from "./downloadImg"

export default function Generator({ data }) {

    var [meme, setMeme] = React.useState({
        upperText: "Add",
        lowerText: "Text",
        imgIndex: Math.floor(Math.random() * data.length),
        randomImg: data[65].url
    })

    function handleChange(event) {
        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                [event.target.name]: event.target.value

            }
        })
    }

    function generateImgUrl() {
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImg: data[Math.floor(Math.random() * data.length)].url
            }
        })
    }
    function handleChangeOfImg(event) {
        var value
        if (event.target.value == '') {
            value = data[65].url
        }
        else {
            value = data[event.target.value - 1].url
        }
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImg: value
            }
        })
    }
    return (
        <div className="main-generator">
            <div className="header-bar">
                <div></div>
                <h3>Meme Generator</h3>
                <p><a target="_blank" href="https://reactjs.org/"><i class="fab fa-react"></i></a><a target="_blank" href="https://github.com/AeGON83/meme-generator-app"><i class="fab fa-github-square"></i></a><a target="_blank" href="https://aegon83.github.io/RajanMakwana/"><i class="fas fa-user"></i></a></p>
            </div>
            <div className="input-form">
                <div className="inputs">
                    <input type="text" name="upperText" onChange={handleChange} placeholder="Upper Text" id="upper-text" />
                    <input type="text" name="lowerText" onChange={handleChange} placeholder="Lower Text" id="lower-text" />
                </div>
                <div className="button-container">
                    <input type="number" name="imgIndex" id="imgInput" min={1} max={100} onChange={handleChangeOfImg} placeholder="Image Index" />
                    <div className="main-button-container">
                        <button className="get-img" onClick={generateImgUrl}>Random Image</button>
                        <button className="download-img" onClick={downloadImage}><i class="fas fa-arrow-circle-down"></i></button>
                    </div>
                </div>
            </div>
            <div className="img-container">
                <p id="top-text">{meme.upperText}</p>
                <p id="bottom-text">{meme.lowerText}</p>
                <img src={meme.randomImg} alt="image-not-found" className="meme-img" />
            </div>
            <div id="spare-div"></div>
        </div >
    )
}