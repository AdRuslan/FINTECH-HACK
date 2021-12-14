import React from "react";
import StyledWrapper from "../../styled-components/styled-wrapper/styled-wrapper";
import StyledHeading1 from "../../styled-components/styled-heading-1/styled-heading-1";
import HistoryListItem from "../../components/history-list-item/history-list-item";
import {mockHistoryList} from "../../mocks/mocks";

const History = () => {
    const  historyList = mockHistoryList.map((item) => {
        return (
            <HistoryListItem historyItem={item} key={item.id}/>
        )
    })

    return (
        <React.Fragment>
            <StyledWrapper>
                <StyledHeading1 style={{marginTop: "15px"}}>История взаимодействия:</StyledHeading1>
                <ul>
                    {historyList}
                </ul>
            </StyledWrapper>
        </React.Fragment>
    );
}

export default History;