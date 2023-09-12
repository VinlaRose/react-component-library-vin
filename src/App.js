
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
function App() {
  return (
    <div className="App">
      
      <TopBar/>
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

</div>
  );
}

export default App;
