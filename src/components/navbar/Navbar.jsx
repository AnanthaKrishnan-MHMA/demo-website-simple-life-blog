import React from 'react';
import { Link } from 'react-router-dom';
import Hamberger from '../icons/hamberger/Hamberger';
import './Navbar.css'
function Navbar(props) {
    return (

        <div className="navbar">
            <div className="nav__brand">
                <h1 className="nav__brand_head">Living the simple life</h1>
                <span className="nav__brand_tag">A BLOG EXPLORING MINIMALISM IN LIFE</span>
            </div>
          <Hamberger />
            <ul className="nav__list">
                <li className="nav__list_links"><Link to={"/"}>HOME</Link></li>
                <li className="nav__list_links"><Link to={"/aboutme"}>ABOUT ME</Link></li>
                <li className="nav__list_links"><Link to={"/recentposts"}>RECENT POSTS</Link></li>
            </ul>
        </div>

    );
}

export default Navbar;

