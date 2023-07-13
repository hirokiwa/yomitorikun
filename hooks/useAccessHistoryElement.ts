import { useState } from "react";

const useAccessHistoryElement = (): {
  copiedTimer: copiedTimerType;
  copyToClipboard: (text: string) => void;
} => {
  const [copiedTimer, setCopiedTimer] = useState<copiedTimerType>({
    copied: false,
    timerId: undefined,
  });

  const copyToClipboard = (text: string): void => {
    if (copiedTimer.timerId) {
      window.clearTimeout(copiedTimer.timerId);
    }

    const copyTimerReset = () => {
      setCopiedTimer({
        copied: false,
        timerId: undefined
      })
    }
    
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopiedTimer({
          copied: true,
          timerId: window.setTimeout(copyTimerReset, 2000)
      })})
      .catch((error) => {
        alert("クリップボードにコピーできませんでした。");
      })
  };
  return { copiedTimer, copyToClipboard };
}

export default useAccessHistoryElement;