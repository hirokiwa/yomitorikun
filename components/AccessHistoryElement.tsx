import { styled } from "styled-components"
import { ContentCopyIcon, LibraryAddCheckIcon } from "./SvgHandler";
import { Dispatch, RefObject, SetStateAction, useEffect, useRef, useState } from "react";
import { useGetElementProperty } from "@/hooks/useGerElementProperty";
import { wrightTextToClipboard } from "@/utils/clipboard";

interface Props {
  url: string;
  copiedMessageToken: copiedMessageTokenType;
  setCopiedMessageToken: Dispatch<SetStateAction<copiedMessageTokenType>>;
  getStartAtTop: () => number;
  copiedMessageRef: RefObject<HTMLDivElement>;
}

const AccessHistoryElement = ({ url, copiedMessageToken, setCopiedMessageToken, getStartAtTop, copiedMessageRef }: Props) => {
  const accessHistoryElementRef = useRef<HTMLDivElement>(null);
  const [copiedTimer, setCopiedTimer] = useState<copiedTimerType>({
    copied: false,
    timerId: undefined,
  });

  const clearCopiedTimer = () => {
    setCopiedTimer({
      copied: false,
      timerId: undefined
    })
    setCopiedMessageToken({
      timerId: 0,
      topAtStart: 0,
      firstMessagePositionTop: 0
    })
  }

  useEffect(() => {
    if (copiedMessageToken.timerId !== copiedTimer.timerId && copiedMessageToken.timerId !== 0) {
      setCopiedTimer({
        copied: false,
        timerId: undefined
      })
    }
  }, [copiedMessageToken.timerId])

  const { getElementProperty } = useGetElementProperty<HTMLDivElement>(accessHistoryElementRef);

  if (copiedMessageRef.current) {
    copiedMessageRef.current.style.left = `${getElementProperty("right")}px`
  }

  const copyIconClickHandler = () => {
    if (wrightTextToClipboard(url) === "failed") {
      alert("クリップボードにコピーできませんでした。");
      return;
    }

    if (copiedMessageToken.timerId) {
      window.clearTimeout(copiedMessageToken.timerId);
    }
      
    if (copiedMessageRef.current) {
      copiedMessageRef.current.style.top = `${getElementProperty("top") + window.scrollY}px`
    }

    const newTimer = window.setTimeout(clearCopiedTimer, 2000);
    setCopiedTimer({
      copied: true,
      timerId: newTimer
    })
    setCopiedMessageToken({
      timerId: newTimer,
      topAtStart: getStartAtTop(),
      firstMessagePositionTop: getElementProperty("top")
    })
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
        onClick={ copyIconClickHandler }
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

export default AccessHistoryElement;

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
