import styled from "styled-components";

const StyledTextWithImage = styled.p`
    position: relative;
    margin-left: 50px;
    &:before {
      content: url("https://img.icons8.com/ios-filled/50/000000/pixel-star.png");
      display: block;
      width: 50px;
      height: 50px;
      position: absolute;
      top: -100%;
      left: -60%;
    }  
`;

export default StyledTextWithImage;

