import React from "react"
import downloadImage from "./downloadImg"
import defaultImg from "../assets/default-meme.png"

export default function Generator() {

    const [allMemes, setAllMemes] = React.useState();
    const [isMemesLoaded, setIsMemesLoaded] = React.useState(false);

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then((res) => res.json())
            .then((data) => {
                setAllMemes(data.data.memes);
                setIsMemesLoaded(true);
            });
    }, []);

    const [meme, setMeme] = React.useState({
        upperText: "He said",
        lowerText: "He likes Java",
        randomImg: defaultImg
    });

    // React.useEffect(() => {
    //     if (isMemesLoaded) {
    //         setMeme((prevMeme) => ({
    //             ...prevMeme,
    //             randomImg: allMemes[65].url,
    //         }));
    //     }
    // }, [isMemesLoaded]);

    function handleChange(event) {
        setMeme((prevMeme) => ({
            ...prevMeme,
            [event.target.name]: event.target.value,
        }));
    }

    function generateImgUrl() {
        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImg: allMemes[Math.floor(Math.random() * allMemes.length)].url,
        }));
    }

    function handleChangeOfImg(event) {
        var value;
        if (event.target.value === "") {
            value = defaultImg;
        } else {
            value = allMemes[event.target.value - 1].url;
        }
        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImg: value,
        }));
    }

    function changeImgOnClick(event) {
        var value = allMemes[event.target.alt].url;
        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImg: value,
        }));
    }

    const imgArr = isMemesLoaded
        ? allMemes.map((item, index) => (
            <div className="ref-img-mini-container" key={index}>
                <p className="index-of-img">{index + 1}</p>
                <img
                    className="ref-img"
                    src={item.url}
                    alt={index}
                    onClick={changeImgOnClick}
                />
            </div>
        ))
        : null;
    return (
        <div className="main-generator">
            <div className="header-bar">
                <div></div>
                <h3>Meme Generator</h3>
                <p><a target="_blank" href="https://reactjs.org/"><i className="fab fa-react"></i></a><a target="_blank" href="https://github.com/AeGON83/meme-generator-app"><i className="fab fa-github-square"></i></a><a target="_blank" href="https://aegon83.github.io/RajanMakwana/"><i className="fas fa-user"></i></a></p>
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
                        <button className="download-img" onClick={downloadImage}><i className="fas fa-arrow-circle-down"></i></button>
                    </div>
                </div>
            </div>
            <div className="img-container">
                <p id="top-text">{meme.upperText}</p>
                <p id="bottom-text">{meme.lowerText}</p>
                <img src={meme.randomImg} alt="image-not-found" className="meme-img" />
            </div>
            <div id="spare-div"></div>
            <div className="main-img-box">

                <h1>Select Image</h1>
                <div className="ref-container">
                    {imgArr}
                </div>

            </div>
        </div >
    )
}