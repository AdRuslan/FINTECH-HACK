import styled from "styled-components";

const StyledButton = styled.button`
    border: none;

    background-color: ${props => props.isDark ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)"};
    color: ${props => props.isDark ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)"};
    transition: opacity 1s;

    padding: 10px 10px 10px 10px;
    margin-top: 30px;
    min-width: 100px;
    border-radius: 12px;

    &:hover {
        opacity: 0.5;
    }

    &:active {
        opacity: 0.7;
    }
`;

export default StyledButton;