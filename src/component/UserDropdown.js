import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../config/Firebase";

const UserDropdown = () => {


    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
            
            }
        

        });
        
    }, []);

    return (
        <div className="dropdown pb-4 mb-5">
            
            <a
                href="#"
                className="d-flex align-items-center text-white text-decoration-none "
            >
                <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/007/522/853/small_2x/business-man-icon-for-your-web-profile-free-vector.jpg"
                    alt="hugenerd"
                    width={30}
                    height={30}
                    className="rounded-circle" />
                    
                {currentUser ? (
                    <span className="d-none d-sm-inline mx-1">
                        {currentUser.displayName ? currentUser.displayName : 'Guest'}
                    </span>
                ) : null}
            </a>
        </div>
    );
};

export default UserDropdown;
