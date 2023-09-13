import HeadingsTypes from "../components/Headings/HeadingsTypes"
import CodeBox from "./CodeBox/CodeBox"
import Divider from "./Divider/Divider"

export const Headings = () => { 
    const code = 
    `
    <h1 className="heading">Heading 1</h1>
    <h2 className="heading">Heading 2</h2>
    <h3 className="heading">Heading 3</h3>
    <h4 className="heading">Heading 4</h4>
    <h5 className="heading">Heading 5</h5>
    <h6 className="heading">Heading 6</h6>
    `
    return (
        <div className="app">
            <div className="doc-page">
            <h1>Headers</h1>
            <p className="doc-paras">A header component is a vital element in web and app interfaces that occupies the topmost portion of a page or application. Typically containing branding elements, navigation menus, and essential user interface elements, headers provide users with easy access to key functionality and information. They serve as the entry point for users, offering clear and consistent navigation options, search features, and often display a logo or title to reinforce brand identity. Header components play a crucial role in user experience by ensuring intuitive navigation, enhancing brand recognition, and maintaining a cohesive and professional look and feel across a digital platform.</p>
            <Divider/>
            <HeadingsTypes/>
            <p className="how-to-use">How to use :</p>
            <CodeBox code={code}/>
            </div>
            
            
        </div>
    )
}