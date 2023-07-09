// import { useEffect, useState } from "react";
// import { styled } from "styled-components"

// interface Props {
//   url: string;
// }

// const SccessHistoryElementForFetch = ({ url }: Props) => {
//   const [siteData, setSiteData] = useState<historyClient>({
//     url: undefined,
//     title: undefined,
//     favicon: undefined,
//   });
//   const [copiedTimer, setCopiedTimer] = useState<copiedTimerType>({
//     copied: false,
//     timerId: undefined,
//   });

//   const copyToClipboard = (text: string): void => {
//     if (copiedTimer.timerId) {
//       window.clearTimeout(copiedTimer.timerId);
//     }

//     const copyTimerReset = () => {
//       setCopiedTimer({
//         copied: false,
//         timerId: undefined
//       })
//     }
    
//     navigator.clipboard.writeText(text)
//       .then(() => {
//         setCopiedTimer({
//           copied: true,
//           timerId: window.setTimeout(copyTimerReset, 2000)
//       })})
//       .catch((error) => {
//         alert("クリップボードにコピーできませんでした。");
//       })
//   };

//   const encodeSymbols = (input: string): string => {
//     const symbolsToEncode = [';', '/', '?', ':', '@', '&', '=', '+', '$', ',', '%', '#'];
//     let encodedString = '';
  
//     for (let i = 0; i < input.length; i++) {
//       const char = input[i];
//       if (symbolsToEncode.includes(char)) {
//         encodedString += encodeURIComponent(char);
//       } else {
//         encodedString += char;
//       }
//     }
//     return encodedString;
//   }

//   const getSiteData = async (url: string) => {
//     try {
//       const response = await fetch(`/api/site/${encodeSymbols(url)}/`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//       });
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       setSiteData({
//         url: url,
//         title: data.title,
//         favicon: data.favicon
//       })
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   if (!siteData.url) {
//     getSiteData(url);
//   }
  
//   return (
//     <SccessHistoryElementTop>
//       <IconWrapper>{
//         siteData.favicon
//           ? <FaviconImage src={siteData.favicon} />
//           : <span className="material-symbols-outlined">language</span>
//       }</IconWrapper>
//       <AccessHistoryLink href={url} target="_blank">{
//         siteData.title
//           ? siteData.title
//           : url
//       }</AccessHistoryLink>
//       <CopyIconWrapper onClick={() => { copyToClipboard(url) }}>
//         <span className="material-symbols-outlined">{
//           copiedTimer.copied
//             ? "library_add_check"
//             : "content_copy"
//         }</span>
//         <CopiedMessage
//           copied={ +copiedTimer.copied as 0 | 1 }
//         >Copied!!</CopiedMessage>
//       </CopyIconWrapper>
//     </SccessHistoryElementTop>
//   )
// }

// // export default SccessHistoryElement;

// const SccessHistoryElementTop = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `

// const AccessHistoryLink = styled.a`
//   display: block;
//   overflow: hidden;
//   white-space: nowrap;
//   text-overflow: ellipsis;
//   &:hover{
//     color: #bee8d9;
//   }
// `
// const CopyIconWrapper = styled.button`
//   margin-left: auto;
//   background-color: transparent;
//   border: none;
//   cursor: pointer;
//   padding: 0;
//   appearance: none;
//   color: #858585;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   &:hover{
//     background-color: #e6e6e6;
//   }
//   `

// const CopiedMessage = styled.div<{
//   copied: 0 | 1;
// }>`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   -webkit-transform: translateY(-50%);
//   -ms-transform: translateY(-50%);
//   left: 110%;
//   font-size: medium;
//   display: ${({ copied }) => copied ? "block" : "none" };
// `

// const FaviconImage = styled.img`
//   height: 1.5em;
//   width: 1.5em;
// `

// const IconWrapper = styled.div`
//   padding-right: 1em;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `