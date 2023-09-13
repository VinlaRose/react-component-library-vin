import BadgeCard from "../components/Cards/BadgeCard/BadgeCard"
import DismissCard from "../components/Cards/DismissCard/DismissCard"
import HorizontalCard from "../components/Cards/HorizontalCard/HorizontalCard"
import ShadowCard from "../components/Cards/ShadowCard/ShadowCard"
import TextCard from "../components/Cards/TextOnlyCard/TextOnluCard"
import TextOverlayCard from "../components/Cards/TextOverlayCard/TextOverlayCard"
import VerticalCard from "../components/Cards/VerticalCard/VerticalCard"
import Box from "./Box/Box"
import CodeBox from "./CodeBox/CodeBox"

import Divider from "./Divider/Divider"

const code1 = 
` 
<BadgeCard
title="Card Title"
content="This is the content of the card."
badges={ ['Badge 1', 'Badge 2', 'Badge 3']}
imageUrl={"https://c4.wallpaperflare.com/wallpaper/41/681/303/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg"}/>

<BadgeCard
title="Card Title"
content="This is the content of the card."
badges={ ['Badge 1', 'Badge 2']}/>`

const code2 = 
`
<DismissCard  title="Card Title" content="This is the content of the card."/>
`

const code3 = 
`
<TextOverlayCard title="Card Title" content="This is the content of the card." imageUrl={"image-url"}/>
`

const code4 = 
`
<HorizontalCard    title="Card Title" content="This is the content of the card." imageUrl={"image-url"}/>
`

const code5 = 
`
<VerticalCard    title="Card Title" content="This is the content of the card." imageUrl={"image-url"}/>
`

export const Cards = () => { 
    return (
        <div className="app">
            <div className="doc-page">
            <h1>Cards </h1>
            <p className="doc-paras">Card components are versatile and visually appealing UI elements commonly employed in web and app interfaces. They serve as containers for organizing and presenting various types of content, such as images, text, and interactive elements, in a structured and visually cohesive manner. Cards are characterized by their bordered, rectangular shapes and can display information in a digestible format, making them ideal for showcasing products, articles, user profiles, or other data. These components enhance user engagement, improve content readability, and contribute to a modern and user-friendly interface design by providing an organized and visually appealing way to present information.</p>
            <Divider/>
            <h3 className="doc-secondry-headings">Cards with badges</h3>
            <Box>
            <BadgeCard
        title="Card Title"
        content="This is the content of the card."
        badges={ ['Badge 1', 'Badge 2', 'Badge 3']}
        imageUrl={"https://c4.wallpaperflare.com/wallpaper/41/681/303/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg"}
      />
<BadgeCard
        title="Card Title"
        content="This is the content of the card."
        badges={ ['Badge 1', 'Badge 2']}
      />
            </Box>
            
            
      <p className="how-to-use">How to use :</p>
      <CodeBox code={code1}/>
            <Divider/>
            <h3 className="doc-secondry-headings">Cards with dismiss</h3>
            <Box>
            <DismissCard  title="Card Title" content="This is the content of the card."/>
            </Box>
            
            <p className="how-to-use">How to use :</p>
            <CodeBox code={code2}/>
            <Divider/>
            <h3 className="doc-secondry-headings">Cards with Text Overlay</h3>
            <Box>
            <TextOverlayCard
                title="Card Title"
                content="This is the content of the card."
                imageUrl={"https://c4.wallpaperflare.com/wallpaper/41/681/303/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg"}/>
            </Box>
            
                <p className="how-to-use">How to use :</p>
                <CodeBox code={code3}/>
            <Divider/>
            
            
            <h3 className="doc-secondry-headings">Text only cards</h3>
            <Box>
                
            <TextCard
        title="Card Title"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
            </Box>
            <p className="how-to-use">How to use :</p>
            <CodeBox code={` <TextCard title="your-title" text="your text." />`}/>
            
            
            <Divider/>
            
            
            
            <h3 className="doc-secondry-headings">Horizontal Card</h3>
            <Box>
            < HorizontalCard    title="Card Title" content="This is the content of the card." imageUrl={"https://c4.wallpaperflare.com/wallpaper/41/681/303/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg"}/>
            </Box>
            <p className="how-to-use">How to use :</p>
            <CodeBox code={code4}/>
            <Divider/>
            
            
            <h3 className="doc-secondry-headings">VerticalCard Card</h3>
            <Box>
            <VerticalCard
        name="Product Name"
        price="29.99"
        description="Product description goes here."
        imageUrl={"https://files.myglamm.com/site-images/800x800/PSB1_1.jpg"}
      /></Box>
      <p className="how-to-use">How to use :</p>
      <CodeBox code={code5}/>
            <Divider/>
    
    
    
            <h3 className="doc-secondry-headings">Card with Shadow</h3>
            <Box>
                <ShadowCard/>
            </Box>
            <p className="how-to-use">How to use :</p>
            <CodeBox code={`<ShadowCard/>`}/>
            </div>
            
            
        </div>
    )
}