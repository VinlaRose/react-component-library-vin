import AvatarBadge from "../components/Badges/AvatarBadge/AvatarBadge"
import IconBadge from "../components/Badges/IconBadge/IconBadge"
import Box from "./Box/Box"
import CodeBox from "./CodeBox/CodeBox"
import Divider from "./Divider/Divider"
import MessageIcon from '@mui/icons-material/Message';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Badges = () => { 
    const code1 = `
    <AvatarBadge src="Image-url"  username="name" online={true} />
    <AvatarBadge src="Image-url"  username="name" online={false} />
    `
    
    const code2 = `
    <IconBadge icon={<MessageIcon/>} count={55}/>
    <IconBadge icon={<ShoppingCartIcon/>} count={8}/>
    `
    return (
        <div className="app">
        <div className="doc-page">
        <h1>Badges </h1>
        <p className="doc-paras">Badges are versatile UI components employed to highlight and visually represent various types of information or status indicators within web and app interfaces. Typically displayed as small, circular or rectangular elements with text or icons, badges serve a wide range of purposes. They can showcase notification counts, display achievements, signify membership levels, or denote important updates. Badges are an effective means of drawing attention to specific content or actions, enhancing user engagement, and providing visual cues that contribute to a more informative and interactive user experience.</p>
        <Divider/>
        <h3 className="doc-secondry-headings">Badge on Avatars</h3>
        <Box>
        <AvatarBadge src="https://media.istockphoto.com/id/1326417862/photo/young-woman-laughing-while-relaxing-at-home.jpg?s=612x612&w=0&k=20&c=cd8e6RBGOe4b8a8vTcKW0Jo9JONv1bKSMTKcxaCra8c="  username="John" online={true} />
      <AvatarBadge src="https://media.istockphoto.com/id/1326417862/photo/young-woman-laughing-while-relaxing-at-home.jpg?s=612x612&w=0&k=20&c=cd8e6RBGOe4b8a8vTcKW0Jo9JONv1bKSMTKcxaCra8c="  username="Alice" online={false} />
        </Box>
        <CodeBox code={code1}/>
        <Divider/>
        <h3 className="doc-secondry-headings">Badge on icons</h3>
        <Box>
        <IconBadge icon={<MessageIcon/>} count={55}/>
      <IconBadge icon={<ShoppingCartIcon/>} count={8}/>
        </Box>
        <CodeBox code={code2}/>
        </div>
        
        
    </div>
    )
}