import React from "react"
import Carousel from 'react-bootstrap/Carousel' 

const VideoProjects = () => {
    return (
        <div style={{ backgroundColor: '#61497B' }}>
            <br /><br />
            <h2 style={{ fontWeight: 'bold', textAlign: 'center', color: 'white' }}>Video Projects</h2>
            <br/>
            <div className="video-responsive">
                <Carousel>
                    <Carousel.Item style={{alignContent:'center'}}>
                    <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/rokGy0huYEA`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
                    </Carousel.Item>
                    <Carousel.Item>
                    <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/cnXapYkboRQ`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
                    </Carousel.Item>
                    <Carousel.Item>
                    <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/aOq49euWnIo`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
                    </Carousel.Item>
                </Carousel>
            </div>
            <br />
        </div>
    )
}
export default VideoProjects;