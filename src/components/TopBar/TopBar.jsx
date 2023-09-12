
import SearchBar from '../SearchBar/Search'
import './TopBar.css'


export const TopBar = () => {
    return(
        <nav class="navigation container">
        
        {/* <h3 style="font-size: 1.5rem; font-weight: bolder;" class="nav-brand animate-charcter"><a href="/">VinlaRose</a></h3> */}
        <ul class="list-non-bullet nav-pills">
          <li class="list-item-inline">
            <a class="link link-active" href="/">Home</a>
          </li>
          <li class="list-item-inline">
            <a class="link" href="/projects.html">Components</a>
          </li>
          
        </ul>
    </nav>
    )
}