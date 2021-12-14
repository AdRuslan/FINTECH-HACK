import styled from "styled-components";

const StyledBankCardForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: ${props => props.marginTop ? `${props.marginTop}px` : ""};
`;

export default StyledBankCardForm;