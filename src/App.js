
import './App.css';
import Avatar from './components/Avatar/Avatar';
import Alert from './components/Alerts/Alerts';
import { TopBar } from './components/TopBar/TopBar';
import AvatarBadge from './components/Badges/AvatarBadge/AvatarBadge';
import IconBadge from './components/Badges/IconBadge/IconBadge';
import MessageIcon from '@mui/icons-material/Message';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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
      
      <IconBadge icon={<MessageIcon/>} count={55}/>
      <IconBadge icon={<ShoppingCartIcon/>} count={8}/>

</div>
  );
}

export default App;
