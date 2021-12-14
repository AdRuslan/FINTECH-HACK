import styled from "styled-components";

const StyledHeading1 = styled.h1`
  font-size: 26px;
  line-height: 36px;
  color: ${props => props.color || "rgb(0, 0, 0)"}
`;

export default StyledHeading1;