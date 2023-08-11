import useAccessHistoryElement from "@/hooks/useAccessHistoryElement";
import { styled } from "styled-components"
import { ContentCopyIcon, LibraryAddCheckIcon } from "./SvgHandler";
import { Dispatch, RefObject, SetStateAction, useRef } from "react";
import { useGetElementProperty } from "@/hooks/useGerElementProperty";

interface Props {
  url: string;
  copiedMessageToken: copiedMessageTokenType;
  setCopiedMessageToken: Dispatch<SetStateAction<copiedMessageTokenType>>;
  getStartAtTop: () => number;
  copiedMessageRef: RefObject<HTMLDivElement>;
}

const SccessHistoryElement = ({ url, copiedMessageToken, setCopiedMessageToken, getStartAtTop, copiedMessageRef }: Props) => {
  const accessHistoryElementRef = useRef<HTMLDivElement>(null);
  const { copiedTimer, copyToClipboard }: {
    copiedTimer: copiedTimerType;
    copyToClipboard: (text: string) => void;
  } = useAccessHistoryElement({ copiedMessageToken, setCopiedMessageToken, accessHistoryElementRef, getStartAtTop, copiedMessageRef });
  const { getElementProperty } = useGetElementProperty<HTMLDivElement>(accessHistoryElementRef);

  if (copiedMessageRef.current) {
    copiedMessageRef.current.style.left = `${getElementProperty("right")}px`
  }

  const CopyIconClickHandler = () => {
    copyToClipboard(url); 
  }

  return (
    <SccessHistoryElementTop
      ref = {accessHistoryElementRef}
    >
      <AccessHistoryLink
        href={url}
        target="_blank"
        tabIndex={2}
      >{url}</AccessHistoryLink>
      <CopyIconWrapper
        onClick={() => { CopyIconClickHandler() }}
        tabIndex={2}
      >
        {
          copiedTimer.copied
          ? <LibraryAddCheckIcon width="28" height="28" fill="#858585" />
          : <ContentCopyIcon width="28" height="28" fill="#858585" />
        }
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
  &:hover{
    background-color: #e6e6e6;
  }
  `
