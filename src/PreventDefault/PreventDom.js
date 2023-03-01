import { useState } from "react"

function PreventDom() {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        console.log("Form Submmited");
    };

    return (
        <div classname="PreventDom">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="Field">
                        <label>Name:</label>
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <button disabled={!name} type="submit">Submit</button>
                </fieldset>
            </form>

        </div>
    )

}
export default PreventDom