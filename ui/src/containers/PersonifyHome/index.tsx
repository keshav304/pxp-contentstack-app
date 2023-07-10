import React, {useState} from 'react';
import  './styles.scss'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import PersonifyLogo from './logo/personify.svg';
import PersonifyXPLogo from './logo/personifyxp.svg';
import { Icon } from '@contentstack/venus-components';
import { Search } from '@contentstack/venus-components';
import { Link, useLocation, Outlet } from 'react-router-dom';

const PersonifyHome:React.FC<any> = () => {
    const [showNav, setShowNav] = useState(true)
    const [missionSeachText, setMissionSeachText] = useState('')
    const location = useLocation()
    console.log({location})
        return (
            <div className={`body-area${showNav ? ' body-pd' : ''}`}>
                <header className={`header${showNav ? ' body-pd' : ''} ${!(location.pathname==="/home" || (location.pathname.indexOf('/home/referrers')<0 && location.pathname.indexOf('/home/overview')<0))? "noSearchBarHeader":null}` }>
                {location.pathname==="/home" || (location.pathname.indexOf('/home/referrers')<0 && location.pathname.indexOf('/home/overview')<0)?
                        <div className="search-wrapper">
                            <Search
                            onChange={(e: { target: { value: React.SetStateAction<string>; }; })=>{setMissionSeachText(e.target.value)}}
                            onClear
                            value={missionSeachText}
                            placeholder="Search for widget"
                            />
                      </div>
                      :null}
                <div className="header_img">
                    <h1>K</h1>
                </div>
                </header>
                <div className={`l-navbar${showNav ? ' show' : ''}`}>
                <nav className="nav">
                    <div>
                        {!showNav?
                            <div className="nav_link personify_logo_small">
                                <img src={PersonifyLogo} alt="Personify Logo" />
                            </div>
                        :   <div className="nav_link personify_logo_large">
                                <img src={PersonifyXPLogo} alt="Personify Logo" />
                            </div>
                        }
                    <div className="nav_list">
                        <Link to="overview"
                        className={`${showNav?"nav_link_large overview_nav_link_large":"nav_link_small overview_nav_link_small"}`}>
                        <Icon icon="DashboardModuleLarge" active={location.pathname==="/home/overview"||location.pathname.indexOf('overview')>-1}  size="medium"/>
                        <span className={`${location.pathname==="overview"?"nav_name_active":null} nav_name`}>Overview</span>
                        </Link>
                        <Link to="/" 
                        className={`${showNav?"nav_link_large":"nav_link_small"}`}>
                        <Icon icon="Publish" active={location.pathname==="/home" || (location.pathname.indexOf('/home/referrers')<0 && location.pathname.indexOf('/home/overview')<0)} size="small"/>
                        <span className={`${location.pathname==="/home"?"nav_name_active":null} nav_name`}>Mission</span>
                        </Link>
                        <Link to="referrers"
                        className={`${showNav?"nav_link_large":"nav_link_small"}`}>
                        <Icon icon="Webhooks" active={location.pathname==="/home/referrers"} size="small"/>
                        <span className={`${location.pathname==="/home/referrers"?"nav_name_active":null} nav_name`}>Referrers</span>
                        </Link>
                    </div>
                    </div>
                    <div className="header_toggle" onClick={() => setShowNav(!showNav)}>
                    <Icon icon={`${showNav ? 'Compress' : 'Expand'}`} size="medium"/>
                    {showNav?<span className="nav_name">Toggle Sidebar</span>:null}
                   </div>
                </nav>
                </div>
                <div className="pt-4 pb-4 outlet-container">
                <Outlet />
                </div>
            </div>
        )
}
export default PersonifyHome