import React from "react";
import Link from "./Link";
import Container from "../container";
import SearchBar from "./searchBar";
import ProfileMenu from "./profileMenu";
import { MdHome, MdGroup, MdExplore } from "react-icons/md";

const iconStyle = {
  marginRight: `7px`
};

const Nav = () => (
  <nav>
    <Container>
      <div className="nav-contents">
        <div className="nav-menu">
          <Link href="/" activeClassName="active">
            <a>
              <MdHome fontSize="18" style={iconStyle} />
              Home
            </a>
          </Link>
          <Link href="/communities" activeClassName="active">
            <a>
              <MdGroup fontSize="18" style={iconStyle} />
              Communities
            </a>
          </Link>
          <Link href="/explore" activeClassName="active">
            <a>
              <MdExplore fontSize="18" style={iconStyle} />
              Explore
            </a>
          </Link>
        </div>
        <div className="profile-menu">
          <SearchBar />
          <ProfileMenu />
        </div>
      </div>
    </Container>
    <style jsx>
      {`
        nav {
          background: var(--color-secondary);
          box-shadow: 0 6px 15px rgba(62, 84, 100, 0.15);
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
      `}
    </style>
  </nav>
);

export default Nav;
