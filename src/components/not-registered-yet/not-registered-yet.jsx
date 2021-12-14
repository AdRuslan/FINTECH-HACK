import React from "react";
import StyledLink from "../../styled-components/styled-link/styled-link";
import StyledText from "../../styled-components/styled-text/styled-text";

const NotRegisteredYet = () => {
    return (
        <React.Fragment>
            <StyledText
                color={`rgb(255, 255, 255)`}
                marginTop={40}
            >
                Еще не зарегистрированы?
            </StyledText>

            <StyledLink
                href="/sign-up"
                color={`rgb(255, 255, 255)`}
                marginTop={10}
            >
                Зарегистрироваться
            </StyledLink>
    </React.Fragment>
    );
}

export default NotRegisteredYet;