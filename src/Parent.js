import AboutMe from "./Nav/AboutMe";
import Homepage from "./Nav/Homepage";

function Parent() {
    return(
        <div>
            <AboutMe message ="Im from About Me" />
            <Homepage message ="Hello im Homepage" />
        </div>
    )
}
export default Parent