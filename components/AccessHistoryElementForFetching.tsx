import { styled } from "styled-components"
import { ContentCopyIcon, LanguageIcon, LibraryAddCheckIcon } from "./SvgHandler";
import useAccessHistoryElement from "@/hooks/useAccessHistoryElement";

interface Props {
  url: string;
}

const AccessHistoryElementForFetch = ({ url }: Props) => {33

  const { copiedTimer, copyToClipboard, siteData }: {
    copiedTimer: copiedTimerType;
    copyToClipboard: (text: string) => void;
    siteData: historyClient;
  } = useAccessHistoryElement({ url });
  
  return (
    <SccessHistoryElementTop>
      <IconWrapper>{
        siteData.favicon
          ? <FaviconImage src={siteData.favicon} />
          : <LanguageIcon width="28" height="28" fill="#858585"/>
      }</IconWrapper>
      <AccessHistoryLink href={url} target="_blank">{
        siteData.title
          ? siteData.title
          : url
      }</AccessHistoryLink>
      <CopyIconWrapper
        onClick={() => { copyToClipboard(url) }}
        tabIndex={2}
      >
        {
          copiedTimer.copied
          ? <LibraryAddCheckIcon width="28" height="28" fill="#858585" />
          : <ContentCopyIcon width="28" height="28" fill="#858585" />
        }
        <CopiedMessage
          copied={ +copiedTimer.copied as 0 | 1 }
        >Copied!!</CopiedMessage>
      </CopyIconWrapper>
    </SccessHistoryElementTop>
  )
}

export default AccessHistoryElementForFetch;

const SccessHistoryElementTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const AccessHistoryLink = styled.a`
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  &:hover{
    color: #bee8d9;
  }
`
const CopyIconWrapper = styled.button`
  margin-left: auto;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  appearance: none;
  color: #858585;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &:hover{
    background-color: #e6e6e6;
  }
  `

const CopiedMessage = styled.div<{
  copied: 0 | 1;
}>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  left: 110%;
  font-size: medium;
  display: ${({ copied }) => copied ? "block" : "none" };
`

const FaviconImage = styled.img`
  height: 1.5em;
  width: 1.5em;
`

const IconWrapper = styled.div`
  padding-right: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
`