import { useNavigate } from "react-router-dom"
import "./Main.css"

export const MainPage = () => {
    
    const navigate = useNavigate()
    
    return(
        <div className="main-page">
            <div className="search-bar"></div>
            <div className="heading-components">All Components</div>
            <div class="columns">
  <div class="column" onClick={() => window.open('/avatars', '_blank')}>
    Avatar
  </div>
  <div class="column"  onClick={() => window.open('/alerts', '_blank')}>
    Alert
  </div>
  <div class="column"  onClick={() => window.open('/badges', '_blank')}>
    Badges
  </div>
  <div class="column"  onClick={() => window.open('/buttons', '_blank')}>
    Button
  </div>
  <div class="column"  onClick={() => window.open('/cards', '_blank')}>
    Card
  </div>
  <div class="column"  onClick={() => window.open('/headings', '_blank')}>
    Heading
  </div>
  <div class="column"  onClick={() => window.open('/texts', '_blank')}>
    Text
  </div>
  <div class="column"  onClick={() => window.open('/images', '_blank')}>
    Image
  </div>
  <div class="column"  onClick={() => window.open('/modals', '_blank')}>
    Modal
  </div>
</div>
        </div>
    )
}