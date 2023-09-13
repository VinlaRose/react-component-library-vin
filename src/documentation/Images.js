import Box from "./Box/Box"
import Divider from "./Divider/Divider"
import "../components/Images/ImageTypes.css"
import CodeBox from "./CodeBox/CodeBox"
import CircularImage from "../components/Images/CircularImage"
import ResponsiveImage from "../components/Images/ResponsiveImage"

export const Images = () => { 
    const code1 = `
    <img src="image-url" alt="normal-image" className="normal-image" />`
    
    const code2 = `
    
    <CircularImage src="image-url"  className={"small"}/>
    <CircularImage src="image-url"  className={"large"}/>
    `
    
    return (
        <div className="app">
            <div className="doc-page">
            <h1>Images</h1>
            <p className="doc-paras">Images are visual assets that enrich web and app interfaces by conveying information, enhancing aesthetics, and facilitating engagement. They can include photographs, illustrations, icons, and graphics. Images are utilized to illustrate content, convey emotions, or provide visual cues. In web design, responsive images adapt to various screen sizes, optimizing the user experience across devices. Images are a cornerstone of effective communication, enabling the presentation of ideas and information in a visually compelling and memorable manner.</p>
            <Divider/>
            <h3 className="doc-secondry-headings">Normal Image</h3>
            <Box>
            <img src="https://c4.wallpaperflare.com/wallpaper/41/681/303/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg" alt="normal-image" className="normal-image" />
            <img src="https://rare-gallery.com/thumbs/543565-nature-landscape.jpg" alt="normal-image2" className="normal-image" />
            
            
            </Box>
            <CodeBox code={code1}/>
            <Divider/>
            <h3 className="doc-secondry-headings">Circular Image</h3>
            
            <Box>
            <CircularImage src="https://c4.wallpaperflare.com/wallpaper/41/681/303/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg" alt="normal-image"  className={"small"}/>
            <CircularImage src="https://c4.wallpaperflare.com/wallpaper/41/681/303/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg" alt="normal-image"  className={"large"}/>
            
            </Box>
            <CodeBox code={code2} />
            <Divider/>
            <h3 className="doc-secondry-headings">Responsive Image</h3>
            <Box>
                <ResponsiveImage 
                src="https://c4.wallpaperflare.com/wallpaper/41/681/303/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg" alt="responsive-image"/>
            </Box>
            
            </div>
            
            
        </div>
    )
}