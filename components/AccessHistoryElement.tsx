import useAccessHistoryElement from "@/hooks/useAccessHistoryElement";
import { styled } from "styled-components"
import { ContentCopyIcon, LibraryAddCheckIcon } from "./SvgHandler";
import { Dispatch, SetStateAction } from "react";

interface Props {
  url: string;
  copiedMessageToken: copiedMessageTokenType;
  setCopiedMessageToken: Dispatch<SetStateAction<copiedMessageTokenType>>;
}

const SccessHistoryElement = ({ url, copiedMessageToken, setCopiedMessageToken }: Props) => {
  const { copiedTimer, copyToClipboard }: {
    copiedTimer: copiedTimerType;
    copyToClipboard: (text: string) => void;
  } = useAccessHistoryElement({ copiedMessageToken, setCopiedMessageToken });

  return (
    <SccessHistoryElementTop>
      <AccessHistoryLink
        href={url}
        target="_blank"
        tabIndex={2}
      >{url}</AccessHistoryLink>
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

export default SccessHistoryElement;

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
