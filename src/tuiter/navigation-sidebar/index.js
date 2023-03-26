import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <a className="list-group-item">
                <i className="bi bi-twitter wd-twitter-blue"/>
                <span> Tuiter</span>
            </a>
            <Link to="/tuiter/home"
                  className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                <i className="bi bi-house-fill "/>
                <span> Home</span>
            </Link>
            <Link to="/tuiter/explore"
                  className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                <i className="bi bi-hash"/>
                <span> Explore</span>
            </Link>
            <Link to="/" className="list-group-item">
                <i className="bi bi-asterisk"/>
                <span> Labs</span>
            </Link>
            <Link to="/tuiter/notification" className="list-group-item">
                <i className="bi bi-bell"/>
                <span> Notifications</span>

            </Link>
            <Link to="/tuiter/messages" className="list-group-item">
                <i className="bi bi-chat-dots"/>
                <span> Messages</span>

            </Link>
            <Link to="/tuiter/bookmarks" className="list-group-item">
                <i className="bi bi-bookmark"/>
                <span> Bookmarks</span>
            </Link>
            <Link to="/tuiter/Lists" className="list-group-item">
                <i className="bi bi-card-list"/>
                <span> Lists</span>
            </Link>
            <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile' ? 'active' : ''}`}>
                <i className="bi bi-person"/>
                <span> Profile</span>
            </Link>

            <Link to="/tuiter/more" className={`list-group-item ${active === 'more' ? 'active' : ''}`}>
                <i className="bi bi-three-dots"/>
                <span> More</span>
            </Link>
        </div>
    );
};
export default NavigationSidebar;