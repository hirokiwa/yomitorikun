import { styled } from "styled-components";

interface Props {
    history: urlHistory[];
}

const AccessHistory = ({history}:Props) => {
    const copyToClipboard = (text: string): void => {
        navigator.clipboard.writeText(text)
        .then(() => {
            return;
        })
        .catch((error) => {
            alert("クリップボードにコピーできませんでした。");
        });
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
          console.log(data);
        } catch (error) {
          console.error(error);
        }
    }

    history.map((data) => {
        getSiteData(data.url);
    })

    return (
        <AccessHistoryTop>
            <SubTitle>
            <span className="material-symbols-outlined">history</span>
                履歴
            </SubTitle>
            <AccessHistoryLists>
                {
                    history.length !== 0
                    ? history.map((data, index) => {
                        return(
                            <AccessHistoryElement key = { index }>
                                <AccessHistoryLink href={data.url} target="_blank">{data.url}</AccessHistoryLink>
                                <CoppyIconWrapper onClick={() => { copyToClipboard(data.url) }}>
                                    <span className="material-symbols-outlined">content_copy</span>
                                </CoppyIconWrapper>
                            </AccessHistoryElement>
                    )})
                    : <AccessHistoryElement>履歴はありません。</AccessHistoryElement>
                }
            </AccessHistoryLists>
        </AccessHistoryTop>
    );
}

export default AccessHistory;

const AccessHistoryTop = styled.div`
    margin-top: 2em;
    margin: 3em auto;
    padding: 0 auto;
`

const SubTitle = styled.h2`
    border-bottom: solid 1px #acacac;
    color: #858585;
    padding-left: 0.5em;
    display: flex;
    align-items: center;
`
const AccessHistoryLists = styled.ul`
    text-align: left;
    padding: 1em;
`

const AccessHistoryElement = styled.li`
    color: #858585;
    margin: 1em;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
`

const NoHistoryElement = styled.li`
    color: #858585;
    margin: 1em;
    list-style: none;
    text-align: center;
`

const AccessHistoryLink = styled.a`
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: small;
    &:hover{
        color: #bee8d9;
}
`
const CoppyIconWrapper = styled.button`
    margin-left: auto;
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    appearance: none;
    color: #858585;
    &:hover{
        background-color: #e6e6e6;
}
`