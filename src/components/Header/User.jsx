import React, {useState} from "react";
import user from "../../assets/images/user.svg";
import { StyledUser } from "../styles/StyledHeader";
import arrowDown from '../../assets/images/arrow-down.svg'
import arrowUp from '../../assets/images/arrow-up.svg'
import logout from '../../assets/images/logout.svg'

const User = () => {
  const [isDropdownExitShown,setIsDropdownExitShown] = useState(false)

  return (
    <StyledUser>
        <img src={user} alt="user" />
      <div>
        <h2>NicknameOfUser</h2>
        <p>@NicknameOfUser</p>
      </div>
      <img src={!isDropdownExitShown? arrowDown: arrowUp} alt="arrow"
           onClick={() => setIsDropdownExitShown(!isDropdownExitShown)}/>
      {isDropdownExitShown ? (
        <div className='logout'>
          <img src={logout} alt="logout"/>
        <span>Log out</span>
        </div>
      ) : null}
    </StyledUser>
  );
};

export default User;
