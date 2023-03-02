import { useState } from "react"

function AppSwitch() {

    const [item, setItem] = useState("Input");

    const renderItem = () => {

        switch (item) {
            case "Input"      :    return <input type="text"/>
            case "Date"       :    return <input type="Date"/>
            case "TextArea"   :    return <textarea rows={10}/> 
        }
    }

    return (
        <div className="Input">
            <select value={item} onChange={ (e) => setItem(e.target.value)}>
            <option>Input</option>
            <option>Date</option>
            <option>TextArea</option>
            </select>
            <div className="inputs">
                {renderItem()}
            </div>
        </div>
        
    )

}
export default AppSwitch