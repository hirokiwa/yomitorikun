import jsQR, { QRCode } from "jsqr";
import { Dispatch, SetStateAction } from "react";

const initQrCode = ( QRImage: HTMLImageElement ): QRCode | null => {
  const canvas = document.createElement('canvas');
  canvas.width = QRImage.width;
  canvas.height = QRImage.height;
  const context = canvas.getContext('2d') as CanvasRenderingContext2D;
  context.drawImage(QRImage, 0, 0);
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  return jsQR(imageData.data, imageData.width, imageData.height);
}

const useReadSection = ({ history, setHistory }: {
  history: urlHistory[];
  setHistory: Dispatch<SetStateAction<urlHistory[]>>;
}) => {
  const getURLFromQRCodeBlob = (blob: Blob): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const QRImage = new Image();
        QRImage.onload = () => {
          try {
            const qrCode = initQrCode( QRImage );
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
    })
  }

  const updateHistory = (url: string) => {
    if (history.length < 50) {
      setHistory([{ url: url }, ...history]);
    } else {
      const newHistory = history.slice(0, 49);
      newHistory.unshift({ url: url });
      setHistory( newHistory );
    }
  }
  
  const solveQrCode = (blob: Blob) => {
    getURLFromQRCodeBlob(blob)
    .then((url) => {
      if (history.length === 0) {
        updateHistory( url );
      } else {
        if (history[0].url !== url) {
          updateHistory( url );
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

  const getClipboardContents = async () => {
    const clipboardItems = await navigator.clipboard.read();
    for (const clipboardItem of clipboardItems) {
      for (const type of clipboardItem.types) {
        const blob = await clipboardItem.getType(type);
        const isImage = blob.type.startsWith('image/');
        if (!isImage) {
          continue;
        }
        solveQrCode(blob);
        return;
      }
    }
    alert("クリップボードにQRコード画像をコピーしてください。");
  }
  return { getClipboardContents };
}

export default useReadSection;