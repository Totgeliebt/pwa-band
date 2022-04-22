import React from "react";
import { Flex } from "../styles/Flex";
import user from "../../assets/images/user.svg";
import { StyledUser } from "../styles/StyledHeader";

const User = () => {
  return (
    <StyledUser>
      <Flex jc="center">
        <img src={user} alt="user" />
        <h2>User name</h2>
      </Flex>
    </StyledUser>
  );
};

export default User;
