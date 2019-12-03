import React from 'react'
import { MdStar } from 'react-icons/md'

function ProfileMenu() {
    return (
        <div className="profile-area">
            <img className="profile-pic" src="https://avatars0.githubusercontent.com/u/53584487?s=400&v=4" />
            <div className="texts">
                <h4>Musthaq Ahamad</h4>
                <span><MdStar fontSize="15" style={{ marginRight: `5px` }} /> 0</span>
        </div>
        <style jsx>{`
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
    )
}

export default ProfileMenu
