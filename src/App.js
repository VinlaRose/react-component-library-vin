
import './App.css';
import Avatar from './components/Avatar/Avatar';
import Alert from './components/Alerts/Alerts';
import { TopBar } from './components/TopBar/TopBar';
import AvatarBadge from './components/Badges/AvatarBadge/AvatarBadge';
import IconBadge from './components/Badges/IconBadge/IconBadge';
import MessageIcon from '@mui/icons-material/Message';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from './components/Button/PrimaryButton/Button';
import { Link } from '@mui/material';
import LinkButton from './components/Button/LinkButton/LinkButton';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import IconButton from './components/Button/IconButton/IconButton';
import FloatingActionButton from './components/Button/FloatingActionButton/FloatingActionButton';
import AddIcon from '@mui/icons-material/Add';
import BadgeCard from './components/Cards/BadgeCard/BadgeCard';
import DismissCard from './components/Cards/DismissCard/DismissCard';
import TextOverlayCard from './components/Cards/TextOverlayCard/TextOverlayCard';
import VerticalCard from './components/Cards/VerticalCard/VerticalCard';
import HorizontalCard from './components/Cards/HorizontalCard/HorizontalCard';
import { Route, Routes } from 'react-router-dom';
import Home  from './pages/Home/Home';
import { MainPage } from './pages/Main/Main';
import { Alerts } from './documentation/Alerts';
import { Avatars } from './documentation/Avatar';
import { Badges } from './documentation/Badges';
import { Buttons } from './documentation/Buttons';
import { Cards } from './documentation/Cards';
import { Headings } from './documentation/Headings';
import { Images } from './documentation/Images';
import { Modals } from './documentation/Modals';
import { Texts } from './documentation/Texts';
function App() {
  return (
    <div className="App">
      
      <TopBar/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/components" element={<MainPage/>}/>
        
        <Route path="/alerts" element={<Alerts/>}/>
        <Route path="/avatars" element={<Avatars/>}/>
        <Route path="/badges" element={<Badges/>}/>
        <Route path="/buttons" element={<Buttons/>}/>
        <Route path="/cards" element={<Cards/>}/>
        <Route path="/headings" element={<Headings/>}/>
        <Route path="/images" element={<Images/>}/>
        <Route path="/modals" element={<Modals/>}/>
        <Route path="/texts" element={<Texts/>}/>
        
      </Routes>
      
      
      
      
      
      
      {/* <Avatar src="https://1fid.com/wp-content/uploads/2022/09/whatsapp-profile-pic-29-1024x1024.jpg" alt="User Avatar" size="small" />
<Avatar src="https://1fid.com/wp-content/uploads/2022/09/whatsapp-profile-pic-29-1024x1024.jpg" alt="User Avatar" size="medium" />
<Avatar src="https://1fid.com/wp-content/uploads/2022/09/whatsapp-profile-pic-29-1024x1024.jpg" alt="User Avatar" size="large" /> */}
{/* 
<Alert type="success" message="Success! Your action was completed." />
<Alert type="error" message="Error! Something went wrong." />
<Alert type="warning" message="Warning! Please be cautious." />
<Alert type="info" message="Information: Here's some important info." />

<AvatarBadge src="https://1fid.com/wp-content/uploads/2022/09/whatsapp-profile-pic-29-1024x1024.jpg"  username="John" online={true} />
      <AvatarBadge src="https://1fid.com/wp-content/uploads/2022/09/whatsapp-profile-pic-29-1024x1024.jpg"  username="Alice" online={false} /> */}
      
      {/* <IconBadge icon={<MessageIcon/>} count={55}/>
      <IconBadge icon={<ShoppingCartIcon/>} count={8}/> */}


{/* <Button text={"Click"}/> */}
{/* <LinkButton href={"https://vinla.netlify.app/"} text={"LINK"}/> */}

{/* <IconButton text={"Follow"} icon={<PersonAddAltIcon/>}/>

<FloatingActionButton icon= {<AddIcon/>}/> */}
{/* < HorizontalCard    title="Card Title"
        content="This is the content of the card."
        imageUrl={"https://c4.wallpaperflare.com/wallpaper/41/681/303/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg"}
      />

<VerticalCard
        name="Product Name"
        price="29.99"
        description="Product description goes here."
        imageUrl={"https://files.myglamm.com/site-images/800x800/PSB1_1.jpg"}
      />

<TextOverlayCard
 title="Card Title"
 content="This is the content of the card."
 imageUrl={"https://c4.wallpaperflare.com/wallpaper/41/681/303/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg"}
/>
<DismissCard  title="Card Title"
        content="This is the content of the card."/>
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
        
      /> */}

</div>
  );
}

export default App;
