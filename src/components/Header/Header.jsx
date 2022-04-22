import React from "react";
import { StyledHeader } from "../styles/StyledHeader";
import { Flex } from "../styles/Flex";
import Logo from "./Logo";
import User from "./User";

const Header = () => {
  return (
    <StyledHeader>
      <Flex jc="space-between">
        <Logo />
        <User />
      </Flex>
    </StyledHeader>
  );
};

export default Header;
