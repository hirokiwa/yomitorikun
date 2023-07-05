import { styled } from "styled-components";

interface Props {
    history: urlHistory[];
}

const AccessHistory = ({history}:Props) => {

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
                            <AccessHistoryElement key = { index }>
                                <AccessHistoryLink href={data.url} target="_blank">{data.url}</AccessHistoryLink>
                                    <span className="material-symbols-outlined">content_copy</span>
                            </AccessHistoryElement>
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
    display: flex;
    justify-content: center;
    align-items: center;
`

const NoHistoryElement = styled.li`
    color: #858585;
    margin: 1em;
    list-style: none;
    text-align: center;
`

const AccessHistoryLink = styled.a`
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: small;
    &:hover{
        color: #bee8d9;
}
`
const CoppyIconWrapper = styled.button`
    margin-left: auto;
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    appearance: none;
    color: #858585;
    &:hover{
        background-color: #e6e6e6;
}
`