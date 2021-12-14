import React from "react";
import StyledNavigationBackground from "../../styled-components/styled-navigation-background/styled-navigation-background";
import StyledNavigation from "../../styled-components/styled-navigation/style-navigation";
import NavigationList from "../navigation-list/navigation-list";

const Navigation = () => {
    return (
        <StyledNavigationBackground>
            <StyledNavigation>
                <NavigationList/>
            </StyledNavigation>
        </StyledNavigationBackground>
    );
}

export default Navigation;