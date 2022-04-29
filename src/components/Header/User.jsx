import React from "react";
import { Flex } from "../styles/Flex";
import user from "../../assets/images/user.svg";
import { StyledUser } from "../styles/StyledHeader";

const User = () => {
  return (
    // <Flex jc="center" fd="column">
    <StyledUser>
        <img src={user} alt="user" />
      <div>
        <h2>NicknameOfUser</h2>
        <p>@NicknameOfUser</p>
      </div>
    </StyledUser>
  // </Flex>
  );
};

export default User;
