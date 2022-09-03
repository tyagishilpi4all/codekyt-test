import { Link, useLocation } from "react-router-dom"


const NavItem = ({ children, path }) => {
    const location = useLocation()
    const { pathname } = location
    return (<li className={pathname === path ? "active" : ""}><Link to={path}>{children}</Link></li>
    )
}
export default NavItem