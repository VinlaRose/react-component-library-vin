import BadgeCard from "../components/Cards/BadgeCard/BadgeCard"
import DismissCard from "../components/Cards/DismissCard/DismissCard"
import HorizontalCard from "../components/Cards/HorizontalCard/HorizontalCard"
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
imageUrl={"https://c4.wallpaperflare.com/wallpaper/41/681/303/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg"}
/>
<BadgeCard
title="Card Title"
content="This is the content of the card."
badges={ ['Badge 1', 'Badge 2']}

/>`

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
< HorizontalCard    title="Card Title" content="This is the content of the card." imageUrl={"image-url"}/>
`

const code5 = 
`
< VerticalCard    title="Card Title" content="This is the content of the card." imageUrl={"image-url"}/>
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
            
            
      <CodeBox code={code1}/>
            <Divider/>
            <h3 className="doc-secondry-headings">Cards with dismiss</h3>
            <DismissCard  title="Card Title" content="This is the content of the card."/>
            <CodeBox code={code2}/>
            <Divider/>
            <h3 className="doc-secondry-headings">Cards with Text Overlay</h3>
            <TextOverlayCard
                title="Card Title"
                content="This is the content of the card."
                imageUrl={"https://c4.wallpaperflare.com/wallpaper/41/681/303/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg"}/>
                <CodeBox code={code3}/>
            <Divider/>
            <h3 className="doc-secondry-headings">Text only cards</h3>
            <Divider/>
            <h3 className="doc-secondry-headings">Horizontal Card</h3>
            < HorizontalCard    title="Card Title" content="This is the content of the card." imageUrl={"https://c4.wallpaperflare.com/wallpaper/41/681/303/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg"}/>
            <CodeBox code={code4}/>
            <Divider/>
            <h3 className="doc-secondry-headings">VerticalCard Card</h3>
            <VerticalCard
        name="Product Name"
        price="29.99"
        description="Product description goes here."
        imageUrl={"https://files.myglamm.com/site-images/800x800/PSB1_1.jpg"}
      />
      <CodeBox code={code5}/>
            <Divider/>
            <h3 className="doc-secondry-headings">Card with Shadow</h3>
            </div>
            
            
        </div>
    )
}