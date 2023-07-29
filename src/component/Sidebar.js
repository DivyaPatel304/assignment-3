import { FaHome, FaTachometerAlt, FaNewspaper, FaUtensils, FaGlobe, FaTools } from 'react-icons/fa';
import UserDropdown from './UserDropdown';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="bg-dark">
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <Link className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-5 d-none d-sm-inline">Menu</span>
            </Link>
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li>
                    <Link to="/dashboard" data-bs-toggle="collapse" className="nav-link px-0 align-middle text-white">
                        <FaTachometerAlt className="fs-4" /> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/News" className="nav-link align-middle px-0 text-white">
                        <FaNewspaper className="fs-4" /> <span className="ms-1 d-none d-sm-inline">News</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Meal" className="nav-link align-middle px-0 text-white">
                        <FaUtensils className="fs-4" /> <span className="ms-1 d-none d-sm-inline">Meal</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/country" className="nav-link align-middle px-0 text-white">
                        <FaGlobe className="fs-4" /> <span className="ms-1 d-none d-sm-inline">Country</span>
                    </Link>
                </li>
                {/* Additional Links */}
                <li className="nav-item">
                    <Link to="/tool/password-generator" className="nav-link align-middle px-0 text-white">
                        <FaTools className="fs-4" /> <span className="ms-1 d-none d-sm-inline">Password Generator</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/tool/unit-converter" className="nav-link align-middle px-0 text-white">
                        <FaTools className="fs-4" /> <span className="ms-1 d-none d-sm-inline">Unit Converter</span>
                    </Link>
                </li>
            </ul>
            <hr />
            <UserDropdown />
        </div>
    </div>
    );
};

export default Sidebar;
