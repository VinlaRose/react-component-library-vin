import IconButton from "../components/Button/IconButton/IconButton"
import LinkButton from "../components/Button/LinkButton/LinkButton"
import Button from "../components/Button/PrimaryButton/Button"
import CodeBox from "./CodeBox/CodeBox"
import Divider from "./Divider/Divider"
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AddIcon from '@mui/icons-material/Add';
import FloatingActionButton from "../components/Button/FloatingActionButton/FloatingActionButton"
import Box from "./Box/Box"




export const Buttons = () => { 
    const code1 = `<Button text={"Click"}/>`
    
    const code2 =   `<LinkButton href={"https://vinla.netlify.app/"} text={"LINK"}/>`
    
    const code3 =   `<IconButton text={"Follow"} icon={<PersonAddAltIcon/>}/>`
    
    const code4 =  `<FloatingActionButton icon= {<AddIcon/>}/>`
    return (
        <div className="app">
            <div className="doc-page">
            <h1>Buttons</h1>
            <p className="doc-paras">Buttons are fundamental interactive elements in web and app design, facilitating user actions and interactions. These clickable components are used to trigger a wide array of actions, from submitting forms and navigating between pages to performing specific tasks or confirming selections. Buttons come in various shapes, sizes, and styles, often featuring text or icons. They play a pivotal role in guiding users through an interface, providing clear calls to action, and enhancing overall usability. With their versatility and ability to drive user engagement, buttons are a cornerstone of effective user interface design.</p>
            <Divider/>
            
            
            <h3 className="doc-secondry-headings">Primary Buttons</h3>
            <Box>
            <Button text={"Click"}/>
            </Box>
            <p className="how-to-use">How to use :</p>
            <CodeBox code={code1}/>
            <Divider/>
            
            
            <h3 className="doc-secondry-headings">Link Buttons</h3>
            <Box>
          <LinkButton href={"https://vinla.netlify.app/"} text={"LINK"}/>
            </Box>
            <p className="how-to-use">How to use :</p>
            <CodeBox code={code2}/>
            <Divider/>
            
            
            <h3 className="doc-secondry-headings">Icon Buttons</h3>
            <Box>
            <IconButton text={"Follow"} icon={<PersonAddAltIcon/>}/>
            </Box>
            
            <p className="how-to-use">How to use :</p>
            <CodeBox code={code3}/>
            <Divider/>
            
            
            
            <h3 className="doc-secondry-headings">Floating Action Buttons</h3>
            <Box>
               
            <FloatingActionButton icon= {<AddIcon/>}/> 
            </Box>
            
            <CodeBox code={code4}/>
            <Divider/>
            </div>
            
            
        </div>
    )
}