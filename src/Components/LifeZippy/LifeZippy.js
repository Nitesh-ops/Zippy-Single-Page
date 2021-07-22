import React, { useState } from "react"
import Images from "./images"
import "./LifeZippy.css"
const LifeZippy = () => {
    const [selectedImg, setSelectedImg] = useState(Images[0]);
    return (
        <div style={{ backgroundColor: '#EFEFEF',paddingBottom:'40px'}} >
            <br /><br />
            <h2 style={{ fontWeight: 'bold', textAlign: 'center' }}>Life in Zippy</h2>
            <br />
            <div className="container">
                <img src={selectedImg} alt="Selected" className="selected" />
                <div className="imgContainer">
                    {Images.map((img, index) => (
                        <img
                            style={{ border: selectedImg === img ? "4px solid black" : "" }}
                            key={index}
                            src={img}
                            alt="dog"
                            onClick={() => setSelectedImg(img)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LifeZippy;