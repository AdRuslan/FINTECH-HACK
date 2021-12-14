import React from "react";
import StyledWrapper from "../../styled-components/styled-wrapper/styled-wrapper";
import EditProfileForm from "../../components/edit-profile-form/edit-profile-form";


const ProfileEdit = () => {
    return (
        <React.Fragment>
            <StyledWrapper
                paddingTop={20}
                isTextCenter
                paddingRight={5}
                paddingLeft={5}
                hasBottomBar>
                <EditProfileForm/>
            </StyledWrapper>
        </React.Fragment>
    );
};

export default ProfileEdit;