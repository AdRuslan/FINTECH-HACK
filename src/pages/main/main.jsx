import React from "react";
import StyledWrapper from "../../styled-components/styled-wrapper/styled-wrapper";
import UserAvatar from "../../components/user-avatar/user-avatar";
import StyledHeading2 from "../../styled-components/styled-heading-1/styled-heading-1";
import StyledHeading3 from "../../styled-components/styled-heading-3/styled-heading-3";
import StyledText from "../../styled-components/styled-text/styled-text";
import StyledLinkButton from "../../styled-components/styled-link-button/styled-link-button";
import BankCardWrapper from "../../components/bank-card-wrapper/bank-card-wrapper";
import {AppRoute} from "../../utils/const";
import Avatar from "../../img/avatar/avatar.jpg";

const Main = () => {
    return (
        <React.Fragment>
            <StyledWrapper paddingTop={20} isTextCenter paddingRight={5} paddingLeft={5} hasBottomBar>
                <UserAvatar isCentered src={Avatar}/>
                <StyledHeading2 style={{marginTop: "10px"}}>Енилеев Ислам Русланович</StyledHeading2>
                <StyledHeading3 style={{margin: "10px 0"}}>ID: #2281337</StyledHeading3>

                <StyledWrapper>
                    <span style={{marginTop: `10px`, display: `block`}}>
                        <StyledText>Деньги на удержании:</StyledText>
                        <StyledText style={{fontWeight: "500"}}>1500 рублей</StyledText>
                    </span>
                    <span style={{marginTop: `10px`, display: `block`}}>
                        <StyledText>Деньги доступные к выводу:</StyledText>
                        <StyledText style={{fontWeight: "500"}}>15000 рублей</StyledText>
                    </span>
                </StyledWrapper>

                <BankCardWrapper/>

                <StyledLinkButton href={AppRoute.WITHDRAW} isDark>Вывод средств</StyledLinkButton>
            </StyledWrapper>
        </React.Fragment>
    );
};

export default Main;