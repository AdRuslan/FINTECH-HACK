import styled from "styled-components";

const StyledUserAvatar = styled.img`
  height: ${props => props.isSmall ? "35px" : "100px"};
  width: ${props => props.isSmall ? "35px" : "100px"};
  border-radius: 50%;
  object-fit: cover;
  display: block;
  margin: ${props => props.isCentered ? "0 auto" : ""};
`;

export default StyledUserAvatar;