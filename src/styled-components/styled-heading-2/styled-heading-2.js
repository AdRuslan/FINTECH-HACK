import styled from "styled-components";

const StyledHeading2 = styled.h2`
    font-size: 20px;
    line-height: 30px;
    color: ${props => props.color || "rgb(0, 0, 0)"}
`;

export default StyledHeading2;