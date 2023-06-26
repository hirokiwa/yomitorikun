import { styled } from "styled-components";

const HowToUse = () => {
    return (
        <HowToUseTop>
            <SubTitle>使い方</SubTitle>
            <HowToUseLists>
                <HotToUseElement>クリップボードにQRコード画像をコピー</HotToUseElement>
                <HotToUseElement>「ひらく」ボタンを押してサイトオープン！！</HotToUseElement>
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
`

const SubTitle = styled.h2`
    border-bottom: solid 1px #acacac;
    color: #858585;
`
const HowToUseLists = styled.ol`
    text-align: left;
    padding: 1em 3em;
`

const HotToUseElement = styled.li`
    color: #858585;
    margin: 1em;
`