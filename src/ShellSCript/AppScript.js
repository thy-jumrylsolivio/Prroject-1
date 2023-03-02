import { Command } from "@tauri-apps/api/shell";

function AppScript() {

    const shellPath = "../src-shell/ubuntu/logActive.sh";
    const command = new Command("log-active-ubuntu", [shellPath]);

    command.execute().then(result => {
        console.log(`Screenshot saved: ${result.stdout}`);
    }).catch(error => {
        console.error(`exec error: ${error}`);
    });
}

export default AppScript;

//Successfully running in Reactjs-tauri

// tauri.conf.json


// "tauri": {
//     "allowlist": {
//       "all": true,
//       "shell": {
//         "scope": [
//           {
//             "name": "log-active-ubuntu",
//             "cmd": "osascript",
//             "args": [{ "validator": "\\S+" }]
//           },






// import { Command } from "@tauri-apps/api/shell";
// import { useState } from "react";

// import T09ScreenShot from "./components/T09ScreenShot";

// function AppScript() {

//     const shellPath = "../src-shell/ubuntu/logActive.sh";
//     const command = new Command("log-active-ubuntu", [shellPath]);

   // // to destructure

//     const [screenshot,setScreenshot] = useState("");

//     command.execute().then(result => {

//         setScreenshot(result.stdout)

//     }).catch(error => {
//         console.error(`exec error: ${error}`);
//     });

        // //to pass the props too the T09Screenshot component
        
//     return (
//         <T09ScreenShot screenshot={screenshot} />
//     )
// }

// export default AppScript;