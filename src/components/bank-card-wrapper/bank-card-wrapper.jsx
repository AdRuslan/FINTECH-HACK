import React, {useState} from "react";
import BankCardForm from "../bank-card-form/bank-card-form";
import StyledWrapper from "../../styled-components/styled-wrapper/styled-wrapper";
import StyledHeading2 from "../../styled-components/styled-heading-2/styled-heading-2";
import StyledText from "../../styled-components/styled-text/styled-text";
import BankCard from "../bank-card/bank-card";
import StyledButton from "../../styled-components/styled-button/stylde-button";
import {mockCards} from "../../mocks/mocks";

const BankCardWrapper = () => {
    const [isFormOpen, setOpen] = useState(false)

    const handleFormControlClick = () => {
        setOpen(!isFormOpen);
    }

    return (
        <StyledWrapper
            backgroundColor={"rgb(58,58,58)"}
            borderRadius={10}
            paddingTop={10}
            paddingBottom={20}
            paddingRight={6}
            paddingLeft={6}
            style={{marginTop: "40px"}}>

            <StyledHeading2 color={"rgb(255, 255, 255)"}>
                Привязанные карты:</StyledHeading2>

            {
                mockCards.length === 0 ? 
                <StyledText
                    marginTop={10}
                    color={"rgb(210,210,210)"}>
                    У вас еще нет привязанных карт. Для полного функционирования приложения введите данные карты
                </StyledText>
                : ``
            }
            

            {
                mockCards.map((item, index) => {
                    return (
                        <BankCard 
                            name={item.name}
                            number={item.number}
                            expirationDate={item.expirationDate}
                            key={`bank-card-${item.name.split(` `).join("")}-${index}}`}
                        />
                    )                    
                })
            }

            {
                isFormOpen ?
                <BankCardForm  
                    handleCancelClick={() => {
                        setOpen(!isFormOpen);
                    }}       
                />
                : ``
            }

            {
                !isFormOpen ?
                    <StyledButton onClick={(evt) => {
                        evt.preventDefault();
                        handleFormControlClick();
                    }}>
                        Добавить карту
                    </StyledButton>
                : ``
            }
            
        </StyledWrapper>

    );
};

export default BankCardWrapper;