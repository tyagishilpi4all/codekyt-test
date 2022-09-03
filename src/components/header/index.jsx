import { Link } from "react-router-dom"
import NavItem from "./navItems"
const Header = () => {

    return (<nav className="navbar navbar-default">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed"> 
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to="/">Codekyt</Link>
            </div>

            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <NavItem path="/">Home</NavItem>
                    <NavItem path="/comments">Comments</NavItem>
                    <NavItem path="/layout">Layout</NavItem>
                    <NavItem path="/coding">Coding</NavItem>

                </ul>
            </div>
        </div>
    </nav>)
}
export default Header