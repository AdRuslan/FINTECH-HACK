import React, {useState} from "react";
import StyledWrapper from "../../styled-components/styled-wrapper/styled-wrapper";
import StyledHeading3 from "../../styled-components/styled-heading-3/styled-heading-3";
import {hideCardNumber} from "../../utils/utils";


const BankCard = (props) => {
    const {name, number, expirationDate} = props;

    const [isNumberShown, setShowNumber] = useState(false);

    const handleNumberClick = () => {
        setShowNumber(!isNumberShown);
    };

    return (
        <StyledWrapper
            isFlex
            flexDirection={"column"}
            justifyContent={"space-around"}
            alignItems={"center"}
            backgroundColor={"rgb(255, 255, 255)"}
            borderRadius={4}
            paddingRight={18}
            paddingLeft={18}
            style={{height: "200px"}}
            marginTop={20}
            >

            <StyledHeading3>
                Основная карта
            </StyledHeading3>

            <p>{name}</p>
            <p>{isNumberShown ? number : hideCardNumber(number)}
            <button 
                onClick={() => {
                    handleNumberClick();
                }} 
                style={{marginLeft:"20px", border: "none", background: "none"}}
            >
                {
                    isNumberShown ? `Скрыть` : `показать`
                }
            </button>
            </p>
            <p>{expirationDate}</p>

        </StyledWrapper>
    )
}

export default BankCard;