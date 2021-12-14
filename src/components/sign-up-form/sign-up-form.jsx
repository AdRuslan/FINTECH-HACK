import React from "react";
import StyledSignInForm from "../../styled-components/styled-sign-in-form/styled-sign-in-form";
import StyledText from "../../styled-components/styled-text/styled-text";
import StyledTextInput from "../../styled-components/styled-text-input/styled-text-input";
import StyledButton from "../../styled-components/styled-button/stylde-button";

const SignUpForm = () => {
    return (
        <StyledSignInForm onSubmit={(evt) => evt.preventDefault()}>
            <label>
                <StyledText
                    color={"rgb(255, 255, 255)"}
                    marginTop={20}
                >
                    Введите ваше имя
                </StyledText>
                <StyledTextInput
                    hasBorder
                    placeholder="Имя" 
                    type="text"
                    marginTop={5}
                />
            </label>

            <label>
                <StyledText
                    color={"rgb(255, 255, 255)"}
                    marginTop={20}
                >
                    Введите вашу фамилию
                </StyledText>
                <StyledTextInput
                    hasBorder
                    placeholder="Фамилия" 
                    type="text"
                    marginTop={5}
                />
            </label>

            <label>
                <StyledText
                    color={"rgb(255, 255, 255)"}
                    marginTop={20}
                >
                    Введите ваш email
                </StyledText>
                <StyledTextInput
                    hasBorder
                    placeholder="tips@tips.com" 
                    type="email"
                    marginTop={5}
                />
            </label>

            <label>
                <StyledText
                    color={"rgb(255, 255, 255)"}
                    marginTop={20}
                >
                    Введите телефон
                </StyledText>
                <StyledTextInput
                    hasBorder
                    placeholder="+7 999 999-99-99" 
                    type="tel"
                    marginTop={5}
                />
            </label>

            <StyledButton type="submit" isDark style={{backgroundColor: "rgb(12, 120, 228)"}}>
                Зарегистрироваться
            </StyledButton>
        </StyledSignInForm>
    );
};

export default SignUpForm;