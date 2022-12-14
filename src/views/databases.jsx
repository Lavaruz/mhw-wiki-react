import { useNavigate } from "react-router-dom"
import Footer from "../components/footer"
import Sidebar from "../components/sidebar"

export default function Databases(){

    const navigate = useNavigate()

    return(
        <div className="main-content">
            <div className="main-left">
                <Sidebar/>
            </div>
            
            <div className="vline"></div>
            
            <div className="main-right">
                <h2>Database</h2>
                <hr />
                <div className="database-main">
                    <div className="database-main-item" onClick={()=> navigate('/database/monsters')}>
                        <img src="/img/monster.webp" alt="" />
                        <h1>Monsters</h1>
                    </div>
                    <div className="database-main-item" onClick={()=> navigate('/database/events')}>
                        <img src="/img/event.webp" alt="" />
                        <h1>Events</h1>
                    </div>
                    <div className="database-main-item" onClick={()=> navigate('/database/charms')}>
                        <img src="/img/charm.webp" alt="" />
                        <h1>Charms</h1>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}