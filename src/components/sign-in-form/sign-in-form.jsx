import React from "react";
import StyledSignInForm from "../../styled-components/styled-sign-in-form/styled-sign-in-form";
import StyledText from "../../styled-components/styled-text/styled-text";
import StyledTextInput from "../../styled-components/styled-text-input/styled-text-input";
import StyledButton from "../../styled-components/styled-button/stylde-button";

const SignInForm = () => {
    return (
        <StyledSignInForm onSubmit={(evt) => evt.preventDefault()}>
            <label>
                <StyledText
                    color={`rgb(255, 255, 255)`}
                    marginTop={20}
                >
                    Введите ваш логин
                </StyledText>
                <StyledTextInput 
                    placeholder="Логин" 
                    type="text"
                    marginTop={5}
                />
            </label>
            <label>
                <StyledText
                    color={`rgb(255, 255, 255)`}
                    marginTop={20}
                >
                    Введите ваш пароль
                </StyledText>
                <StyledTextInput 
                    placeholder="Пароль" 
                    type="password"
                    marginTop={5}
                />
            </label>

            <StyledButton 
                type="submit"
                style={{backgroundColor: "rgb(12, 120, 228)"}}
            >
                Войти
            </StyledButton>
        </StyledSignInForm>
    );
};

export default SignInForm;