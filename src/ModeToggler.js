function ModeToggler() {
    let darkModeOn = false;
    const darkMode = <h1>Dark Mode is On</h1>
    const lightMode = <h1>Light Mode is On</h1>

    function handleClick() {
        darkModeOn = !darkModeOn;
        if (darkModeOn === true) {
            console.log('dark mode is ON')
        } else {
            console.log('Light mode  is OFF')
        }
    }
return (
    <div>
        {darkModeOn ? darkMode : lightMode}
        <button onClick={handleClick}>Click Me
        </button>
    </div>

)
}
export default ModeToggler;