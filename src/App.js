import {useState} from "react";
import Header from "./components/Header";


function App() {
    const [ word , setword ] =  useState('Eat')

function handleClick () {
    setword('Drink')
}

    return(
        <div>
            <Header message={word + " is so delicious"}/>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default App;