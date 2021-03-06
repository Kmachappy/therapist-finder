import { Link } from "react-router-dom"
import Nav from '../components/Nav'

export default function Header ({user,handleSignOut}) {

    return (
        <div className="header">
            <div className="header-bar">
        {/* <Link className="logo" to="/therapists"><h1>Therapist Finder Today</h1></Link> */}
            </div>
        <Nav user={user}
             handleSignOut={handleSignOut}/>
        </div>
    )
}