import { useState } from "react";

const useAccessHistoryElement = ({ url }:{ url: string}): {
  copiedTimer: copiedTimerType;
  copyToClipboard: (text: string) => void;
  siteData: historyClient;
} => {
  const [siteData, setSiteData] = useState<historyClient>({
    url: undefined,
    title: undefined,
    favicon: undefined,
  });
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

  const encodeSymbols = (input: string): string => {
    const symbolsToEncode = [';', '/', '?', ':', '@', '&', '=', '+', '$', ',', '%', '#'];
    let encodedString = '';
  
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      if (symbolsToEncode.includes(char)) {
        encodedString += encodeURIComponent(char);
      } else {
        encodedString += char;
      }
    }
    return encodedString;
  }

  const getSiteData = async (url: string) => {
    try {
      const response = await fetch(`/api/site/${encodeSymbols(url)}/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setSiteData({
        url: url,
        title: data.title,
        favicon: data.favicon
      })
    } catch (error) {
      console.error(error);
    }
  }

  if (!siteData.url) {
    getSiteData(url);
  }
  return { copiedTimer, copyToClipboard, siteData };
}

export default useAccessHistoryElement;