import { styled } from "styled-components";

const AccessHistory = () => {

    return (
        <AccessHistoryTop>
            <SubTitle>履歴</SubTitle>
            <AccessHistoryLists>
                <AccessHistoryElement>google</AccessHistoryElement>
            </AccessHistoryLists>
        </AccessHistoryTop>  
    );
}

export default AccessHistory;

const AccessHistoryTop = styled.div`
    margin-top: 2em;
    width: 80%;
    margin: 0 auto;
    width: 35em;
    padding: 0 auto;
`

const SubTitle = styled.h2`
    border-bottom: solid 1px #acacac;
    color: #858585;
`
const AccessHistoryLists = styled.ul`
    text-align: left;
    padding: 1em 3em;
`

const AccessHistoryElement = styled.li`
    color: #858585;
    margin: 1em;
    list-style: none;
`