import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import HomeIcon from '@material-ui/icons/Home';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import WorkIcon from '@material-ui/icons/Work';
import MessageRoundedIcon from '@material-ui/icons/MessageRounded';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BorderClearIcon from '@material-ui/icons/BorderClear';
import ControlPointDuplicateIcon from '@material-ui/icons/ControlPointDuplicate';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <nav className="header">
            <div className="header__container">
                <div className="header__row">
                    <div className="header__logoSection">
                        <LinkedInIcon className="header__logoSection__icon"></LinkedInIcon>
                        <div className="header__logoSection__searchbox">
                            <SearchIcon className="header__logoSection__searchbox__icon"></SearchIcon>
                            <input type="text" placeholder="Search"/>
                        </div>
                    </div>
                    <div className="header__navItems">
                        <Link to="/login" className="header__link active">
                            <div className="header__navItems__item">
                                <HomeIcon className="activeIcon"></HomeIcon>
                                <div>Home</div>
                            </div>
                        </Link>
                        <Link to="/" className="header__link">
                            <div className="header__navItems__item">
                                <PeopleAltIcon></PeopleAltIcon>
                                <div>My Network</div>
                            </div>
                        </Link>
                        <Link to="/" className="header__link">
                            <div className="header__navItems__item">
                                <WorkIcon></WorkIcon>
                                <div>Jobs</div>
                            </div>
                        </Link>
                        <Link to="/" className="header__link">
                            <div className="header__navItems__item">
                                <MessageRoundedIcon></MessageRoundedIcon>
                                <div>Messaging</div>
                            </div>
                        </Link>
                        <Link to="/" className="header__link">
                            <div className="header__navItems__item">
                                <NotificationsIcon></NotificationsIcon>
                                <div>Notifications</div>
                            </div>
                        </Link>
                        <Link to="/" className="header__link header__link__me lastThree">
                            <div className="header__navItems__item">
                                <AccountCircleIcon></AccountCircleIcon>
                                <div>Me</div>
                            </div>
                        </Link>
                        <Link to="/" className="header__link lastThree">
                            <div className="header__navItems__item">
                                <BorderClearIcon></BorderClearIcon>
                                <div>Work</div>
                            </div>
                        </Link>
                        <Link to="/" className="header__link lastThree">
                            <div className="header__navItems__item premium">
                                <ControlPointDuplicateIcon></ControlPointDuplicateIcon>
                                <div>Premium</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
