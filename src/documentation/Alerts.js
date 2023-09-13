import { Divider } from "@mui/material"
import Alert from "../components/Alerts/Alerts"
import Box from "./Box/Box"
import CodeBox from "./CodeBox/CodeBox"

export const Alerts = () => { 
    const code = 
    `
    <Alert type="success" message="Success! Your action was completed." />
    <Alert type="error" message="Error! Something went wrong." />
    <Alert type="warning" message="Warning! Please be cautious." />
    <Alert type="info" message="Information: Here's some important info." />
    `
    return (
        <div className="app">
            <div className="doc-page">
            <h1>Alerts </h1>
            <p className="doc-paras">
Alert components are essential UI elements used to convey important messages or notifications in web and app interfaces. These dynamic elements are often displayed as pop-up boxes, banners, or modal dialogs and are crucial for alerting users to critical information, such as errors, warnings, success messages, or updates. Alert components are versatile tools for enhancing user experience, ensuring that users are promptly informed about system status changes, data validation issues, or other relevant updates, contributing to a smoother and more informative user interaction.</p>
<Divider/>
<Box>
<Alert type="success" message="Success! Your action was completed." />
<Alert type="error" message="Error! Something went wrong." />
<Alert type="warning" message="Warning! Please be cautious." />
<Alert type="info" message="Information: Here's some important info." />

</Box>
<p className="how-to-use">How to use :</p>

<CodeBox code={code}/>

            </div>
            
            
        </div>
    )
}