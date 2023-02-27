import ReactPlayer from "react-player";

function VideoContent() {
const vidUrl = "https://www.facebook.com/yourblindlove/videos/lil-dicky-earth-official-music-video/445206456226520/";

return(
    <div className='VideoCont'>
        <h1>React Player</h1>
        <ReactPlayer 
        url={vidUrl}
        playing={false}
        volume={1}
        />

    </div>
)
}
export default VideoContent