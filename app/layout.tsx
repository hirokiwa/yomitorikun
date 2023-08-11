import './globals.css'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from './registry';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'コピペでQR読み取りくん',
  description: 'クリップボードにコピーされたQRコード画像を瞬時に読み取ります。',
}

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