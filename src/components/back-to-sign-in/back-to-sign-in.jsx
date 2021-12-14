import StyledLink from "../../styled-components/styled-link/styled-link";

const BackToSignIn = () => {
    return (
        <StyledLink
            href="/sign-in"
            color="rgb(255, 255, 255)"
            marginTop="20"
        >
            Вернуться обратно
        </StyledLink>
    );
};

export default BackToSignIn;