import Avatar from "../components/Avatar/Avatar"
import Box from "./Box/Box"
import CodeBox from "./CodeBox/CodeBox"
import Divider from "./Divider/Divider"


export const Avatars = () => { 
    
    const code1 =
    `
    <Avatar src="url-image" alt="User Avatar" size="small" />
    <Avatar src="url-image" alt="User Avatar" size="medium" />
    <Avatar src="url-image" alt="User Avatar" size="large" />
    `;
    
    return (
        <div className="app">
            <div className="doc-page">
            <h1>Avatars</h1>
            <p className="doc-paras">Avatars, typically circular or square, serve as visual identifiers for user profiles, commonly seen in navigation bars, social media platforms, and blogs. They offer a personalized touch to online interactions and enhance user recognition. These small, image-based representations provide a sense of individuality and brand presence in various digital contexts.</p>
            <Divider/>
            <h3 className="doc-secondry-headings">Normal Avatar</h3>
            <Box>
            <Avatar src="https://media.istockphoto.com/id/1326417862/photo/young-woman-laughing-while-relaxing-at-home.jpg?s=612x612&w=0&k=20&c=cd8e6RBGOe4b8a8vTcKW0Jo9JONv1bKSMTKcxaCra8c=" alt="User Avatar" size="small" />
<Avatar src="https://media.istockphoto.com/id/1326417862/photo/young-woman-laughing-while-relaxing-at-home.jpg?s=612x612&w=0&k=20&c=cd8e6RBGOe4b8a8vTcKW0Jo9JONv1bKSMTKcxaCra8c=" alt="User Avatar" size="medium" />
<Avatar src="https://media.istockphoto.com/id/1326417862/photo/young-woman-laughing-while-relaxing-at-home.jpg?s=612x612&w=0&k=20&c=cd8e6RBGOe4b8a8vTcKW0Jo9JONv1bKSMTKcxaCra8c=" alt="User Avatar" size="large" />
            </Box>
            
            <CodeBox  code={code1}/>
              
            
            
            
            
            
            
            
            </div>
            
            
            
        </div>
    )
}