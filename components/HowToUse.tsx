import { styled } from "styled-components";
import { HelpIcon } from "./SvgHandler";

const HowToUse = () => {
    return (
        <HowToUseTop>
            <SubTitle>
                <HelpIcon width="28" height="28" fill="#858585"/>
                使い方
            </SubTitle>
            <HowToUseLists>
                <HotToUseElement>クリップボードにQRコード画像をコピー</HotToUseElement>
                <HotToUseElement>「読み取り」ボタンを押して開く</HotToUseElement>
            </HowToUseLists>
        </HowToUseTop>
    );
}

export default HowToUse;

const HowToUseTop = styled.div`
    margin-top: 2em;
    width: 80%;
    margin: 0 auto;
    width: 35em;
    padding: 0 auto;
    @media(max-width: 35em){
        width: 100%
    }
`

const SubTitle = styled.h2`
    border-bottom: solid 1px #acacac;
    color: #858585;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width:900px){
        margin: 0 0.5em;
    }
`
const HowToUseLists = styled.ol`
    text-align: left;
    padding: 1em 3em;
    @media(max-width:900px){
        padding: 1em 1em 1em 2em;
    }
`

const HotToUseElement = styled.li`
    color: #858585;
    margin: 1em;
`