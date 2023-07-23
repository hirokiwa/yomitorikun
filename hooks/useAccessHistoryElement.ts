import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface Props {
  copiedMessageToken: copiedMessageTokenType;
  setCopiedMessageToken: Dispatch<SetStateAction<copiedMessageTokenType>>;
}

const useAccessHistoryElement = ({ copiedMessageToken, setCopiedMessageToken }: Props): {
  copiedTimer: copiedTimerType;
  copyToClipboard: (text: string) => void;
} => {
  const [copiedTimer, setCopiedTimer] = useState<copiedTimerType>({
    copied: false,
    timerId: undefined,
  });

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
      setCopiedTimer({
        copied: false,
        timerId: undefined
      })
      setCopiedMessageToken({timerId: 0})
    }
    
    navigator.clipboard.writeText(text)
      .then(() => {
        const newTimer = window.setTimeout(copyTimerReset, 2000)
        setCopiedTimer({
          copied: true,
          timerId: newTimer
        })
        setCopiedMessageToken({timerId: newTimer})
      })
      .catch((error) => {
        alert("クリップボードにコピーできませんでした。");
      })
  };
  return { copiedTimer, copyToClipboard };
}

export default useAccessHistoryElement;