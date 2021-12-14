import React from "react";
import StyledWrapper from "../../styled-components/styled-wrapper/styled-wrapper";
import Logo from "../logo/logo";
import Settings from "../settings/settings";
import StyledHeader from "../../styled-components/styled-header/styled-header";
import StyledLinkWrapper from "../../styled-components/styled-link-wrapper/styled-link-wrapper";
import {AppRoute} from "../../utils/const";

const Header = (props) => {
    const {isMain} = props;
    return (
        <StyledHeader>
            <StyledWrapper
                isFlex
                justifyContent={"space-between"}
                paddingTop = {12}
                paddingBottom = {12}
                paddingLeft = {12}
                paddingRight = {12}
            >
                <StyledLinkWrapper href="/">
                    <Logo/>                    
                </StyledLinkWrapper>

                {
                    isMain ?
                        <StyledLinkWrapper href={AppRoute.PROFILE_EDIT}>
                            <Settings/> 
                        </StyledLinkWrapper>
                        : ``
                }
            </StyledWrapper>
        </StyledHeader>
    );
};

export default Header;