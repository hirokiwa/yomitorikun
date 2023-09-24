import './globals.css'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from './registry';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'コピペでQR読み取りくん~PCフレンドリーなQRコードリーダー~',
  description: 'カメラ・スマホ不要！！クリップボードにコピーされたQRコード画像を瞬時に読み取ります。PCの画面に表示されたQRコードを読み取るために渋々スマートフォンを手に取っているあなたを救います。',
  openGraph: {
    title: 'コピペでQR読み取りくん~PCフレンドリーなQRコードリーダー~',
    description: 'カメラ・スマホ不要！！クリップボードにコピーされたQRコード画像を瞬時に読み取ります。PCの画面に表示されたQRコードを読み取るために渋々スマートフォンを手に取っているあなたを救います。',
    url: "https://github.com/hirokiwa/qr-code-reader/assets/89170014/11b6a8d9-6bae-4edb-94af-a5f18fa585b9",
    siteName: 'コピペでQR読み取りくん~PCフレンドリーなQRコードリーダー~',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'コピペでQR読み取りくん~PCフレンドリーなQRコードリーダー~',
    description: 'カメラ・スマホ不要！！クリップボードにコピーされたQRコード画像を瞬時に読み取ります。PCの画面に表示されたQRコードを読み取るために渋々スマートフォンを手に取っているあなたを救います。',
    creator: 'hiroki_int',
  },
  other: {
    "google-site-verification": "OQR6sBzaqw-kt3cOSRfScDpTtjhc_-iigbyDlecvKJc",
  }
}
export const dynamic = 'force-dynamic'

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
      </body>
    </html>
  )
}

export default RootLayout;