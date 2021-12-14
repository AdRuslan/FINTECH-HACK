import React from "react";
import StyledHeading2 from "../../styled-components/styled-heading-2/styled-heading-2";
import StyledBigFormsWrapper from "../../styled-components/styled-big-forms-wrapper/styled-big-form-wrapper";
import StyledWrapper from "../../styled-components/styled-wrapper/styled-wrapper";
import SignUpForm from "../../components/sign-up-form/sign-up-form";
import BackToSignIn from "../../components/back-to-sign-in/back-to-sign-in";

const SignUp = () => {
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
                        Создайте новый аккаунт
                    </StyledHeading2>
                    <SignUpForm/>
                    <BackToSignIn/>
                </StyledWrapper>         
            </StyledBigFormsWrapper>    
        </React.Fragment>
    );
}

export default SignUp;