import React from "react";
import StyledHeading1 from "../../styled-components/styled-heading-1/styled-heading-1";
import StyledHeading2 from "../../styled-components/styled-heading-2/styled-heading-2";
import StyledBigFormsWrapper from "../../styled-components/styled-big-forms-wrapper/styled-big-form-wrapper";
import StyledWrapper from "../../styled-components/styled-wrapper/styled-wrapper";
import StyledLink from "../../styled-components/styled-link/styled-link";

const NotFound = () => {
    return (
        <React.Fragment>
            <StyledBigFormsWrapper>
                <StyledWrapper
                    isFlex
                    flexDirection={"column"}
                    alignItems={"center"}
                >
                    <StyledHeading1
                        color = {"rgba(255, 255, 255)"}
                    >
                        Ошибка 404
                    </StyledHeading1>
                    <StyledHeading2
                        color = {"rgba(255, 255, 255)"}
                    >
                        Страница не существует
                    </StyledHeading2>
                    <StyledLink
                        href="/"
                        color="rgb(255, 255, 255)"
                        marginTop="20"
                    >
                        Вернуться обратно
                    </StyledLink>
                </StyledWrapper>         
            </StyledBigFormsWrapper>    
        </React.Fragment>
    );
}

export default NotFound;