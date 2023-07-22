import useReadSection from "@/hooks/useReadSection";
import { Dispatch, SetStateAction } from "react";
import { styled } from "styled-components";
import { QrCodeScannerIcon } from "./SvgHandler";

interface Props {
  history: urlHistory[];
  setHistory: Dispatch<SetStateAction<urlHistory[]>>;
}

const ReadSection = ({ history, setHistory }: Props) => {
  const { getClipboardContents } = useReadSection({ history, setHistory })
  
  return (
    <ReadButton
      onClick={() => { getClipboardContents() }}
      tabIndex={1}
    >
      <QrCodeScannerIcon width="24" height="24" fill="#858585" />
      <ButtonText>読み取り</ButtonText>
    </ReadButton>
  )
}

export default ReadSection;

const ReadButton = styled.button`
  width: 15em;
  height: 3em;
  font-size: larger;
  color: #858585;
  background-color: #8bdfc1;
  border: none;
  padding: 0;
  appearance: none;
  margin: 6em auto;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    color: #858585;
    background-color: #c9feec;
    cursor: pointer;
  }
`
const ButtonText = styled.div`
  margin-left: 0.5em;
`