import React from "react";
import NotRegisteredYet from "../../components/not-registered-yet/not-registered-yet";
import SignInForm from "../../components/sign-in-form/sign-in-form";
import StyledHeading2 from "../../styled-components/styled-heading-2/styled-heading-2";
import StyledBigFormsWrapper from "../../styled-components/styled-big-forms-wrapper/styled-big-form-wrapper";
import StyledWrapper from "../../styled-components/styled-wrapper/styled-wrapper";

const SignIn = () => {
    return (
        <React.Fragment>
            <StyledBigFormsWrapper>
                <StyledWrapper
                    isFlex
                    flexDirection={"column"}
                    alignItems={"center"}
                >
                    <StyledHeading2
                        color = {"rgba(255, 255, 255)"}
                    >
                        Войдите в Tips
                    </StyledHeading2>
                    <SignInForm/>
                    <NotRegisteredYet/>     
                </StyledWrapper>                         
            </StyledBigFormsWrapper>            
        </React.Fragment>
    );
}

export default SignIn;