import React from "react";
import StyledHiddenTextSmall from "../../styled-components/styled-hidden-text-small/styled-hidden-text-small";
import {SvgNavigation} from "../../img/svg-sprite";
import StyledLinkWrapper from "../../styled-components/styled-link-wrapper/styled-link-wrapper";

const NavigationItem = (props) => {
    const {name, link, isActive} = props;

    return (
        <li>
            <StyledLinkWrapper href={isActive ? "#" : link}>
                <StyledHiddenTextSmall>
                    {name}
                </StyledHiddenTextSmall>
                <SvgNavigation
                    name={name}
                    color={isActive ? "rgb(128, 128, 128)" : "rgba(255, 255, 255)"}
                    width={50}
                    height={50}
                />
            </StyledLinkWrapper>
        </li>
    );
}

export default NavigationItem;