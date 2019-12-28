import {
  MdStar,
  MdPerson,
  MdSettings,
  MdHelp,
  MdArrowBack
} from "react-icons/md";

function ProfileMenu() {
  return (
    <div className="menu-wrapper">
      <div className="profile-area">
        <img
          className="profile-pic"
          src="https://avatars0.githubusercontent.com/u/53584487?s=400&v=4"
        />
        <div className="texts">
          <h4>Musthaq Ahamad</h4>
          <span>
            <MdStar fontSize="15" style={{ marginRight: `5px` }} /> 0
          </span>
        </div>
      </div>
      <div className="options-wrapper">
        <div className="menu-options">
          <ul>
            <li>
              <MdPerson fontSize="18" style={{ marginRight: `10px` }} />
              Profile
            </li>
            <li>
              <MdSettings fontSize="18" style={{ marginRight: `10px` }} />
              Settings
            </li>
            <li>
              <MdHelp fontSize="18" style={{ marginRight: `10px` }} />
              Help &amp; Support
            </li>
            <li>
              <MdArrowBack fontSize="18" style={{ marginRight: `10px` }} />
              Logout
            </li>
          </ul>
          <p className="version-text">Hummble v1.0.1 Beta</p>
        </div>
      </div>
      <style jsx>{`

            .menu-wrapper {
                position: relative;
            }

            .options-wrapper {
                position: absolute;
                display: none;
                top: 40px;
                padding-top: 20px;
            }

            .menu-wrapper .menu-options {
                z-index: 99;
                border-radius: 5px;
                width: 100%;
                display: flex;
                background: var(--color-secondary);
                box-shadow: 0 8px 20px rgba(50, 50, 50, 0.1);
                flex-direction: column;
            }

            .menu-wrapper:hover > .options-wrapper {
                display: flex;
                transition: 0.3s all ease;
            }

            .menu-options ul {
                display: flex;
                flex-direction: column;
                margin: 0;
                padding: 0;
                list-style-type: none;
            }

            .menu-options li {
                padding: 15px;
                color: var(--color-secondary-text-light);
                margin: 0;
                display: flex;
                flex-direction: row;
                align-items: center;
            }

            .menu-options li:first-child {
                border-radius: 5px 5px 0 0;
            }
            .menu-options li:last-child {
                border-radius: 0px 0px 5px 5px;
            }
            .menu-options li:hover{
                cursor: pointer;
                color: var(--color-secondary-text);
                background: var(--color-hover-background);
            }

            .menu-options p {
                padding: 10px 15px;
                margin: 0;
                text-align-center;
                font-size: 0.8em;
                justify-self: center;
                color: var(--color-secondary-text-light);
                opacity: 0.6;
                border-top: 1px solid var(--color-border);
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
    </div>
  );
}

export default ProfileMenu;
