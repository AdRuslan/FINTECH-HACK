import React from "react";
import NavigationItem from "../navigation-item/navigation-item";
import StyledNavigationList from "../../styled-components/styled-navigation-list/styled-navigation-list";
import {navigationItems} from "../../utils/const";

const NavigationList = () => {
    const currentPath = window.location.pathname;

    return (
        <StyledNavigationList>
            {navigationItems.map((item, index) => {
                return (
                        <NavigationItem
                            name = {item.name}
                            link = {item.link}
                            key = {`navigation-${item.name}-${index}`}
                            isActive = {currentPath === item.link ? true : false}
                        />
                    );
                })                
            }
        </StyledNavigationList>
    );
}

export default NavigationList;