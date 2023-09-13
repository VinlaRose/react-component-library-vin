import TextTypes from "../components/TextTypes/TextTypes"
import CodeBox from "./CodeBox/CodeBox"
import Divider from "./Divider/Divider"

export const Texts = () => { 
    const code = 
    `
    <p class="primary"> primary text </p>
    <p class="primary bold"> primary bold text </p>
    <p class="secondary"> secondary text </p>
    <p class="underline"> underline </p>
    <p class="strike"> Line through </p>
    `
    return (
        <div className="app">
            <div className="doc-page">
            <h1>Texts</h1>
            <p className="doc-paras">Text is the foundation of digital communication, serving as the primary means of conveying information within web and app interfaces. It encompasses written content, including headings, paragraphs, labels, and user-generated input. Text is a versatile tool used for presenting data, providing context, guiding users, and conveying messages. Effective typography and text styling are essential for readability and visual appeal. In user interface design, well-crafted text elements play a crucial role in ensuring clarity, accessibility, and a seamless user experience.</p>
            <Divider/>
            <TextTypes/>
            <CodeBox code={code}/>
            </div>
            
            
        </div>
    )
}