import { useRef, useState } from "react"

function AppCalc() {
    const inputRef = useRef(null);
    const resultRef = useRef(null);
    const [result, setResult ] = useState(0);

    const plus = (e) => {
        e.preventDefault();
        setResult((result) => result + Number
        (inputRef.current.value));
    };
    const minus = (e) => {
        e.preventDefault();
        setResult((result) => result - Number
        (inputRef.current.value));
    };
    const divide = (e) => {
        e.preventDefault();
        setResult((result) => result / Number
        (inputRef.current.value));
    };
    const multiply = (e) => {
        e.preventDefault();
        setResult((result) => result * Number
        (inputRef.current.value));
    };
    const resetInput = (e) => {
        e.preventDefault();
        inputRef.current.value = 0;
    };
    const resetResult = (e) => {
        e.preventDefault();
        setResult((preVal) => preVal * 0);
    };
    return (
        <div className="App">
            <div>
                <h1>Simplest Working Calculator</h1>
            </div>
            <form>
                <p ref={resultRef}>{result}</p>
                <input 
                    pattern="[0-9]"
                    ref={inputRef}
                    type="number"
                    placeholder="Type a Number"
                />
                <button onClick={plus}>Add</button>
                <button onClick={minus}>Subtruct</button>
                <button onClick={divide}>Divide</button>
                <button onClick={multiply}>Multiply</button>
                <button onClick={resetInput}>Clear Input</button>
                <button onClick={resetResult}>Clear Result</button>
            </form>
        </div>
    )


}
export default AppCalc