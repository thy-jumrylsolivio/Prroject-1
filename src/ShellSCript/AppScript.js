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
