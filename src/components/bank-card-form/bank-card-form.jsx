import React from "react";
import StyledTextInput from "../../styled-components/styled-text-input/styled-text-input";
import StyledHiddenText from "../../styled-components/styled-hidden-text/styled-hidden-text";
import StyledButton from "../../styled-components/styled-button/stylde-button";
import StyledHeading2 from "../../styled-components/styled-heading-2/styled-heading-2";
import StyledBankCardForm from "../../styled-components/styled-bank-card-form/styled-bank-card-form";

const BankCardForm = (props) => {
    const {handleCancelClick} = props;

    return (
        <>
            <StyledHeading2
                color={"rgb(255, 255, 255)"}
                style={{marginTop: "30px"}}>
                Добавить новую карту:
            </StyledHeading2>
        <StyledBankCardForm
            marginTop={15}
            onSubmit={(evt) => evt.preventDefault()}>
            <label style={{display: "block", width: "100%"}}>
                <StyledHiddenText>Номер карты</StyledHiddenText>
                <StyledTextInput
                    marginTop={3}
                    hasBorder
                    placeholder="Номер карты"
                    type="text"
                />
            </label>
            <label style={{width: "68%", marginRight: "2%"}}>
                <StyledHiddenText>Срок действия</StyledHiddenText>
                <StyledTextInput
                    marginTop={10}
                    hasBorder
                    placeholder="Срок действия"
                    type="text"
                />
            </label>

            <label style={{width: "30%"}}>
                <StyledHiddenText>CVV</StyledHiddenText>
                <StyledTextInput
                    
                    marginTop={10}
                    hasBorder
                    placeholder="CVV"
                    type="text"
                />
            </label>

            <StyledButton 
                isDark style={{backgroundColor: "rgb(227, 65, 64)", marginRight: `20px`}}
                onClick={() => {
                    handleCancelClick()
                }}
            >
                Отменить
            </StyledButton>

            <StyledButton type="submit" isDark style={{backgroundColor: "rgb(12, 120, 228)"}}>
                Добавить карту
            </StyledButton>
        </StyledBankCardForm>
        </>
    );
};

export default BankCardForm;