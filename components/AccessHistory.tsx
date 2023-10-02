import { styled } from "styled-components";
import AccessHistoryElement from "./AccessHistoryElement";
import HistoryIcon from "./SvgHandler";
import { RefObject, useRef, useState } from "react";
import { useGetElementProperty } from "@/hooks/useGerElementProperty";

interface Props {
  history: urlHistory[];
  bodyContentRef: RefObject<HTMLDivElement>;
}

const AccessHistory = ({ history, bodyContentRef }: Props) => {
  const [copiedMessageToken, setCopiedMessageToken] = useState<copiedMessageTokenType>({
    timerId: 0,
    topAtStart: 0,
    firstMessagePositionTop: 0
  });
  const scrollParentRef = useRef<HTMLUListElement>(null);
  const scrollChildRef = useRef<HTMLDivElement>(null);
  const historyTitleRef = useRef<HTMLHeadingElement>(null);
  const { getElementProperty } = useGetElementProperty<HTMLDivElement>(scrollChildRef);
  const copiedMessageRef = useRef<HTMLDivElement>(null);

  const getStartAtTop = () => {
    return getElementProperty("top");
  }

  return (
    <AccessHistoryTop
      ref={bodyContentRef}
    >
      <SubTitle
        ref = { historyTitleRef }
      >
        <HistoryIcon width="28" height="28" fill="#858585"/>
        履歴
      </SubTitle>
      <AccessHistoryLists
        ref = { scrollParentRef }
      >
        <AccessHistoryListChildren
          ref = { scrollChildRef }
        >
        {
          history.length !== 0
          ? history.map((data, index) => {
            return(
              <AccessHistoryElementWraper key = { `history${history.length - index}` }>
                <AccessHistoryElement
                  url = {data.url}
                  copiedMessageToken = {copiedMessageToken}
                  setCopiedMessageToken = {setCopiedMessageToken}
                  getStartAtTop = {getStartAtTop}
                  copiedMessageRef = {copiedMessageRef}
                  />
              </AccessHistoryElementWraper>
          )})
          : <NoHistoryElement>履歴はありません。</NoHistoryElement>
        }
        </AccessHistoryListChildren>
      </AccessHistoryLists>
      {/* <CopiedMessage
          copied={ +copiedMessageToken.timerId as 0 | 1 }
          ref = {copiedMessageRef}
        >Copied!!</CopiedMessage> */}
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

const NoHistoryElement = styled.li`
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
const CopiedMessage = styled.div<{
  copied: 0 | 1;
}>`
  position: absolute;
  font-size: medium;
  display: "none";
  /* display: ${({ copied }) => copied ? "block" : "none" }; */
`

const AccessHistoryListChildren = styled.div`
`