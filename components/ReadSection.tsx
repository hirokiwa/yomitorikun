import jsQR from "jsqr";
import { Dispatch, SetStateAction } from "react";
import { styled } from "styled-components";

interface Props {
    history: urlHistory[];
    setHistory: Dispatch<SetStateAction<urlHistory[]>>;
}

const ReadSection = ({history, setHistory}: Props) => {
    const getURLFromQRCodeBlob = (blob: Blob): Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (event) => {
                const QRImage = new Image();
                QRImage.onload = () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = QRImage.width;
                    canvas.height = QRImage.height;
                    const context = canvas.getContext('2d') as CanvasRenderingContext2D;
                    context.drawImage(QRImage, 0, 0);
                    try {
                        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                        const qrCode = jsQR(imageData.data, imageData.width, imageData.height);
                        if (qrCode) {
                            resolve(qrCode.data);
                        } else {
                            reject(new Error('No QR code found in the image.'));
                        }
                    } catch (error) {
                        reject(error);
                    }
                }
                QRImage.src = event.target?.result as string;
            }
            reader.onerror = (error) => {
                reject(error);
            }
            reader.readAsDataURL(blob);
    })}
    
    const isImageData = (data: Blob): boolean => {
        return data.type.startsWith('image/');
    }
    
    async function getClipboardContents() {
        try {
            const clipboardItems = await navigator.clipboard.read();
            for (const clipboardItem of clipboardItems) {
                for (const type of clipboardItem.types) {
                    const blob = await clipboardItem.getType(type);
                    const isImage = isImageData(blob);
                    if (!isImage) {
                        alert("クリップボードにQRコード画像をコピーしてください。");
                        return
                    }
                    getURLFromQRCodeBlob(blob)
                    .then((url) => {
                        if (history.length === 0) {
                            setHistory([{ url: url }, ...history])
                        } else {
                            if (history[0].url !== url) {
                                setHistory([{ url: url }, ...history])
                            }
                        }
                        if (!window.open(url)) {
                            location.href = url;
                        }
                    })
                    .catch((error) => {
                        alert("QRコードを検出できませんでした。");
                    });
                }
            }
        } catch (err) {
            alert("クリップボードにQRコード画像をコピーしてください。");
        }
    }
    return (
        <ReadButton onClick={() => { getClipboardContents() }}>ひらく</ReadButton>
    )
}

export default ReadSection;

const ReadButton = styled.button`
    width: 15em;
    height: 3em;
    font-size: medium;
    color: #858585;
    background-color: #8bdfc1;
    border: none;
    outline: none;
    padding: 0;
    appearance: none;
    margin: 6em 0;
    &:hover{
        color: #858585;
        background-color: #c9feec;
        cursor: pointer;
    }
`