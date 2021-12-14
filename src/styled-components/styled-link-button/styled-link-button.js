import styled from "styled-components";

const StyledLinkButton = styled.a`
  border: none;
  display: block;
  width: 70%;

  background-color: ${props => props.isDark ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)"};
  color: ${props => props.isDark ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)"};
  transition: opacity 1s;

  padding: 10px 10px 10px 10px;
  margin: 0 auto;
  margin-top: 70px;
  min-width: 100px;
  border-radius: 7px;
  text-decoration: none;

  &:hover {
    opacity: 0.5;
  }

  &:active {
    opacity: 0.7;
  }
`;

export default StyledLinkButton;