import StyledUserAvatar from "../../styled-components/styled-user-avatar/styled-user-avatar";

const UserAvatar = (props) => {
    const {isCentered, src} = props;
    
    return (
        <StyledUserAvatar
            width="100px"
            height="100px"
            isCentered={isCentered}
            src={src}>
        </StyledUserAvatar>
    )
}

export default UserAvatar;