import { useState } from "react";
import { styled } from "styled-components"

interface Props {
  url: string;
}

const SccessHistoryElement = ({ url }: Props) => {
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
  
  return (
    <SccessHistoryElementTop>
      <AccessHistoryLink href={url} target="_blank">{ url }</AccessHistoryLink>
      <CopyIconWrapper onClick={() => { copyToClipboard(url) }}>
        <span className="material-symbols-outlined">{
          copiedTimer.copied
            ? "library_add_check"
            : "content_copy"
        }</span>
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
