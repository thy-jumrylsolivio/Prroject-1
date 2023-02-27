import rooftops from '../dragon.jpg'

function Images() {
    const randomPics = "https://picsum.photos/200/300?grayscale"
return (
    <div>
        <h1>Task: add 3 different images</h1>
        <img
        height={200}
        src={rooftops}
        alt="image of walking dragon"
        />
        <img
        height={200}
        src={require("../dragon.jpg")}
        alt="image of omniponent dragon"
        />
        <img
        src={randomPics}
        height={200}
  
        />




    </div>
    
)

}
export default Images