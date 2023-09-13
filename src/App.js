
import './App.css';
import { TopBar } from './components/TopBar/TopBar';
import { Route, Router, Routes } from 'react-router-dom';
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
import SearchBar from './components/SearchBar/Search';

function App() {
  return (
    <div className="App">
      
      <TopBar/>
     <SearchBar/>
      
      
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
      
      
      
      
      

</div>
  );
}

export default App;
