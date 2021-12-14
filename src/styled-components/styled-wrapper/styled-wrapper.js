import styled from "styled-components";

const StyledWrapper = styled.div`
    width: 100%;
    max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : "375px"};
    margin: ${props => props.isNotCentered ? "0" : "0 auto"};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : `0px`};

    text-align: ${props => props.isTextCenter ? "center" : ""};
  
    display: ${props => props.isFlex ? "flex" : "block"};
    justify-content: ${props => props.justifyContent || ""};
    flex-direction: ${props => props.flexDirection || "row"};
    align-items: ${props => props.alignItems || "flex-start"};
    padding: ${props => props.paddingTop ? `${props.paddingTop}px` : `0px`} 
             ${props => props.paddingRight ? `${props.paddingRight}px` : `0px`} 
             ${props => props.paddingBottom ? `${props.paddingBottom}px` : `0px`} 
             ${props => props.paddingLeft ? `${props.paddingLeft}px` : `0px`};
  
    padding-bottom: ${props => props.hasBottomBar ? "108px" : ""};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : ""};
    border-radius: ${props => props.borderRadius ? `${props.borderRadius}px` : ""};
`;

export default StyledWrapper;