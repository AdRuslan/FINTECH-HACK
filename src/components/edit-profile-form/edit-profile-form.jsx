import React from "react";
import StyledSignInForm from "../../styled-components/styled-sign-in-form/styled-sign-in-form";
import StyledTextInput from "../../styled-components/styled-text-input/styled-text-input";
import StyledButton from "../../styled-components/styled-button/stylde-button";
import UserAvatar from "../user-avatar/user-avatar";
import StyledWrapper from "../../styled-components/styled-wrapper/styled-wrapper";
import StyledHiddenText from "../../styled-components/styled-hidden-text/styled-hidden-text";
import StyledLabel from "../../styled-components/styled-label/styled-label";
import Avatar from "../../img/avatar/avatar.jpg";

const EditProfileForm = () => {
    return (
        <StyledSignInForm onSubmit={(evt) => evt.preventDefault()}>
            <StyledWrapper isFlex justifyContent={"space-between"} alignItems={"Center"}>
                <UserAvatar src={Avatar}/>
                <StyledLabel>
                    <StyledHiddenText>Изображение профиля</StyledHiddenText>
                    <StyledTextInput
                        placeholder="Изображение профиля"
                        type="file"
                        accept="image/png, image/jpeg"
                        marginTop={0}
                    />
                </StyledLabel>
            </StyledWrapper>


            <StyledLabel>
                <StyledHiddenText>Имя</StyledHiddenText>
                <StyledTextInput
                    hasBorder
                    placeholder="Имя"
                    type="text"
                    marginTop={10}
                />
            </StyledLabel>

            <StyledLabel>
                <StyledHiddenText>Фамилия</StyledHiddenText>
                <StyledTextInput
                    hasBorder
                    placeholder="Фамилия"
                    type="text"
                    marginTop={10}
                />
            </StyledLabel>

            <StyledLabel>
                <StyledHiddenText>Email</StyledHiddenText>
                <StyledTextInput
                    hasBorder
                    placeholder="tips@tips.com"
                    type="email"
                    marginTop={10}
                />
            </StyledLabel>

            <StyledLabel>
                <StyledHiddenText>Номер телефона</StyledHiddenText>
                <StyledTextInput
                    marginTop={10}
                    hasBorder
                    placeholder="+7 999 999-99-99"
                    type="tel"
                />
            </StyledLabel>

            <StyledButton type="submit" isDark style={{backgroundColor: "rgb(12, 120, 228)"}}>
                Сохранить данные
            </StyledButton>
        </StyledSignInForm>
    );
};

export default EditProfileForm;