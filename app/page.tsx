"use client"

import styled from 'styled-components'
import styles from './page.module.css'
import jsQR from 'jsqr';

export default function Home() {
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
        };
        QRImage.src = event.target?.result as string;
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(blob);
    });
  }

  async function getClipboardContents() {
    try {
      const clipboardItems = await navigator.clipboard.read();
  
      for (const clipboardItem of clipboardItems) {
        for (const type of clipboardItem.types) {
          const blob = await clipboardItem.getType(type);
          getURLFromQRCodeBlob(blob)
          .then((url) => {
            window.open(url)
          })
          .catch((error) => {
            console.error(error);
          });
        }
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <main className={styles.main}>
      <ReadButton onClick={() => { getClipboardContents() }}>ひらく</ReadButton>
    </main>
  )
}

const ReadButton = styled.button`
  
`
