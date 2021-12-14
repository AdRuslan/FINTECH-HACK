import React from "react";
import StyledWrapper from "../../styled-components/styled-wrapper/styled-wrapper";
import StyledHeading1 from "../../styled-components/styled-heading-1/styled-heading-1";
import QRCode from "react-qr-code";

const styleForQRCode = {
    marginTop: `30px`,
};

const Receive = () => {
    return (
        <React.Fragment>
            <main>
                <StyledWrapper isFlex flexDirection="column" alignItems="center">
                    <StyledHeading1>
                        Ваш QR код:
                    </StyledHeading1>

                    <QRCode value="QR code" size={300} style={styleForQRCode}/>
                </StyledWrapper>
            </main>
        </React.Fragment>
    );
}

export default Receive;