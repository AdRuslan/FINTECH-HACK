import styled from "styled-components";

const StyledLink = styled.a`
    text-decoration: none;
    color: ${props => props.color || `rgb(0, 0, 0)`};
    margin-top: ${props => `${props.marginTop}px` || `0px`};
    font-weight: 600;
    transition: color 0.5s, opacity 0.5s;

    &:hover {
        color: rgb(12, 120, 228);
    }

    &:active {
        opacity: 0.7;
    }
`;

export default StyledLink;