import styled from "styled-components";

const StyledSignInForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${props => props.marginTop ? `${props.marginTop}px` : ""};
`;

export default StyledSignInForm;