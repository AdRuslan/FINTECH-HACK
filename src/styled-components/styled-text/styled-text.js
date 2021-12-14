import styled from "styled-components";

const StyledText = styled.p`
  color: ${props => props.color || `rgb(0, 0, 0)`};
  margin-top: ${props => `${props.marginTop}px` || `0px`};
  font-size: ${props => props.fontSize ? `${props.fontSize}px` : ""};
`;

export default StyledText;