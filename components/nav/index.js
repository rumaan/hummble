import React from 'react'
import Link from './Link'
import Container from '../container'
import SearchBar from './searchBar'
import { MdHome, MdGroup, MdExplore, MdStar } from "react-icons/md";

const iconStyle = {
  marginRight: `7px`
}

const Nav = () => (
  <nav>
    <Container>
      <div className="nav-contents">
        {/* <h1 className="brand-title">hummble</h1> */}
        <div className="nav-menu">
          <Link href="/" activeClassName="active"><a><MdHome fontSize="18" style={iconStyle}/>Home</a></Link>
          <Link href="/communities" activeClassName="active"><a><MdGroup fontSize="18" style={iconStyle}/>Communities</a></Link>
          <Link href="/explore" activeClassName="active"><a><MdExplore fontSize="18" style={iconStyle}/>Explore</a></Link>
        </div>
        <div className="profile-menu">
          <SearchBar/>
          <div className="profile-area">
            <img className="profile-pic" src="https://avatars0.githubusercontent.com/u/53584487?s=400&v=4"/>
            <div className="texts">
              <h4>Musthaq Ahamad</h4>
              <span><MdStar fontSize="15" style={{ marginRight: `5px`}}/> 0</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
    <style jsx>{`
     nav {
        background:  var(--color-secondary);
        box-shadow:  0 6px 15px rgba(62, 84, 100, 0.15);
      }

      .nav-contents {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        color: var(--color-secondary-text);
      }

      .brand-title {
        font-size: 1em;
        color: var(--color-secondary-text);
      }

      .nav-menu {
        margin: 0;
        padding: 0px;
        display: flex;
        flex-direction: row;
      }
  
      .nav-menu a {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 17px;
        color: var(--color-secondary-text-light);
        border-bottom: 2px solid transparent;
        transition: 0.3s all ease-in-out;
      }

      .nav-menu .icon {
        margin-right: 10px;
      }

      .nav-menu a:hover {
        color: var(--color-secondary-text);
      }

      .nav-menu a.active {
        color: var(--color-secondary-text);
        border-bottom: 2px solid var(--color-secondary-text);
      }

      .profile-menu {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .profile-area {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .profile-area .texts {
        display: flex;
        flex-direction: column;
        color: var(--color-text);
      }

      .profile-area .profile-pic {
        width: 40px;
        height: 40px;
        margin-right: 10px;
        border-radius: 5px;
        background-color: var(--color-secondary-light);
        border: 0;
        outline: none;
      }

      .profile-area .texts span {
        color: var(--color-secondary-text-light);
        font-size: 0.8em;
        display: flex;
        align-items: center;
      }

      .profile-area:hover {
        cursor: pointer;
      }
      .profile-area:hover .texts h4 {
        color: var(--color-secondary-text);
      }
    `}</style>
  </nav>
)

export default Nav
