import { styled } from "styled-components";
import SccessHistoryElement from "./AccessHistoryElement";
import HistoryIcon from "./SvgHandler";

interface Props {
  history: urlHistory[];
}

const AccessHistory = ({ history }: Props) => {

  return (
    <AccessHistoryTop>
      <SubTitle>
        <HistoryIcon width="28" height="28" fill="#858585"/>
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
  @media(max-width: 900px){
    max-width: 35em;
  }
`

const SubTitle = styled.h2`
  border-bottom: solid 1px #acacac;
  color: #858585;
  padding-left: 0.5em;
  display: flex;
  align-items: center;
  @media(max-width: 900px){
    justify-content: center;
    padding: 0;
    margin: 0 0.5em;
  }
`
const AccessHistoryLists = styled.ul`
  text-align: left;
  padding: 1em;
  height: 80vh;
  overflow-y: scroll;
  @media(max-width: 900px){
    height: auto;
  }
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
