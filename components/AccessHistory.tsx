import { styled } from "styled-components";

interface Props {
    history: urlHistory[];
}

const AccessHistory = ({history}:Props) => {

    return (
        <AccessHistoryTop>
            <SubTitle>履歴</SubTitle>
            <AccessHistoryLists>
                {
                    history.length !== 0
                    ? history.map((data, index) => {
                        return(
                            <AccessHistoryElement key = { index }>
                                <AccessHistoryLink href={data.url} target="_blank">{data.url}</AccessHistoryLink>
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
const AccessHistoryLink = styled.a`
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    &:hover{
        color: #60c7a3;
    }
`