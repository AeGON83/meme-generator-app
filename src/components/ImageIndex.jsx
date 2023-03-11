export default function ImageIndex({ data, handleClick }) {
    const imgArr = data.map((item, index) => {
        return (
            <div className="ref-img-mini-container" id={index} onClick={() => handleClick()}>
                <p className="index-of-img">{index + 1}</p>
                <img className="ref-img" src={item.url} alt="img not found" ></img>
            </div>
        )
    })

    return (
        <div className="main-img-box">

            <h1>Image Reference</h1>
            <div className="ref-container">
                {imgArr}
            </div>

        </div>
    )
}