import styled from "styled-components";

const StyledTextInput = styled.input`
  border-radius: 12px;
  border: ${props => props.hasBorder ? "1px solid #6b6b6b" : "none"} ;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);

  padding: 10px 10px 10px 10px;
  width: 100%;
  
  margin-top: ${props => props.marginTop ? `${props.marginTop}px` : `20px`};

  &:active, &:focus {
    outline: none;
  }
`;

export default StyledTextInput;