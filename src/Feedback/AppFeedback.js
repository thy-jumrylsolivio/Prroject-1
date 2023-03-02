import { useState } from 'react';
import "../App.css";

function AppFeedback() {
    const [score, setScore] = useState("10");
    const [ comment, setComment ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Number(score) <= 5 && comment.length <=10) {
            alert("Please provide your feedback why  is your rate is too low.");
        
        } else {
            alert("Thank you for response");
             return;
        }
       



        console.log("form submitted");
        setComment("");
        setScore("10");
    }

return (
<div className='AppFeedback'>
    <form onSubmit={handleSubmit}>

        <fieldset>
            <h2>Feedback Form</h2>
            <div className='Field'>
                <label>Score: {score}🌟</label>
                <input 
                    type="range"
                    min="0"
                    max="10"
                    value={score}
                    onChange={e => setScore(e.target.value)}
                />
            </div>
            <div className='Field'>
                <label>Comment:</label>
                <textarea value={comment} onChange={e => setComment(e.target.value)} />
            </div>
            <button type='submit'>Submit</button>
        </fieldset>
    </form>
</div>
)


}
export default AppFeedback