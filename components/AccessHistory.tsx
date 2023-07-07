import { styled } from "styled-components";
import SccessHistoryElement from "./AccessHistoryElement";

interface Props {
    history: urlHistory[];
}

const AccessHistory = ({ history }: Props) => {

    return (
        <AccessHistoryTop>
            <SubTitle>
            <span className="material-symbols-outlined">history</span>
                履歴
            </SubTitle>
            <AccessHistoryLists>
                {
                    history.length !== 0
                    ? history.map((data, index) => {
                        return(
                            <AccessHistoryElementWraper key = { `history${history.length - index}` }>
                                <SccessHistoryElement
                                    url = {data.url}
                                />
                            </AccessHistoryElementWraper>
                    )})
                    : <AccessHistoryElement>履歴はありません。</AccessHistoryElement>
                }
            </AccessHistoryLists>
        </AccessHistoryTop>
    );
}

export default AccessHistory;

const AccessHistoryTop = styled.div`
    margin-top: 2em;
    margin: 3em auto;
    padding: 0 auto;
`

const SubTitle = styled.h2`
    border-bottom: solid 1px #acacac;
    color: #858585;
    padding-left: 0.5em;
    display: flex;
    align-items: center;
`
const AccessHistoryLists = styled.ul`
    text-align: left;
    padding: 1em;
`

const AccessHistoryElement = styled.li`
    color: #858585;
    margin: 1em;
    list-style: none;
`

const AccessHistoryElementWraper = styled.li`
    color: #858585;
    margin: 1em;
    list-style: none;
    text-align: center;
`
