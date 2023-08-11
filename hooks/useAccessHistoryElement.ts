import { Dispatch, RefObject, SetStateAction, useEffect, useState } from "react";
import { useGetElementProperty } from "./useGerElementProperty";

interface Props {
  copiedMessageToken: copiedMessageTokenType;
  setCopiedMessageToken: Dispatch<SetStateAction<copiedMessageTokenType>>;
  accessHistoryElementRef: RefObject<HTMLDivElement>;
  getStartAtTop: () => number;
  copiedMessageRef: RefObject<HTMLDivElement>;
}

const useAccessHistoryElement = ({ copiedMessageToken, setCopiedMessageToken, accessHistoryElementRef, getStartAtTop, copiedMessageRef }: Props): {
  copiedTimer: copiedTimerType;
  copyToClipboard: (text: string) => void;
} => {
  const [copiedTimer, setCopiedTimer] = useState<copiedTimerType>({
    copied: false,
    timerId: undefined,
  });
  const { getElementProperty } = useGetElementProperty<HTMLDivElement>(accessHistoryElementRef);
  
  useEffect(() => {
    if (copiedMessageToken.timerId !== copiedTimer.timerId && copiedMessageToken.timerId !== 0) {
      setCopiedTimer({
        copied: false,
        timerId: undefined
      })
    }
  }, [copiedMessageToken.timerId])
  
  const copyToClipboard = (text: string): void => {
    if (copiedMessageToken.timerId) {
      window.clearTimeout(copiedMessageToken.timerId);
    }
    
    const copyTimerReset = () => {
      // scrollParentRef.current.addEventListener("scroll", updateMessagePosition);
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
    
    navigator.clipboard.writeText(text)
    .then(() => {

      if (copiedMessageRef.current) {
        copiedMessageRef.current.style.top = `${getElementProperty("top") + window.scrollY}px`
      }
      const newTimer = window.setTimeout(copyTimerReset, 2000);
      setCopiedTimer({
        copied: true,
        timerId: newTimer
      })
      setCopiedMessageToken({
        timerId: newTimer,
        topAtStart: getStartAtTop(),
        firstMessagePositionTop: getElementProperty("top")
      })
    })
    .catch((error) => {
      alert("クリップボードにコピーできませんでした。");
    })
  };
  return { copiedTimer, copyToClipboard };
}

export default useAccessHistoryElement;