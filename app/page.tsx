"use client"

import styled from 'styled-components'
import styles from './page.module.css'
import Header from '@/components/Header';
import HowToUse from '@/components/HowToUse';
import Footer from '@/components/Footer';
import AccessHistory from '@/components/AccessHistory';
import ReadSection from '@/components/ReadSection';
import useHome from '@/hooks/useHome';

const Home = () => {
  const { history, setHistory } = useHome();

  return (
    <main className={styles.main}>
      <Header />
      <BodyContentAreaWrapper>
        <SideContentsArea>
          <AccessHistory
            history = {history}
          />
        </SideContentsArea>
        <BodyContentArea>
          <ReadSection
            history = {history}
            setHistory = {setHistory}
          />
          <HowToUse/>
        </BodyContentArea>
      </BodyContentAreaWrapper>
      <Footer/>
    </main>
  )
}

export default Home;

const BodyContentAreaWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  gap: 1em;
  width: 100%;
  max-width: 1250px;
`

const BodyContentArea = styled.div`
  text-align: center;
  grid-column: col-start 5 / span 6;
  grid-row: 1 / 2;
  `
const SideContentsArea = styled.div`
  grid-column: 1 / 4;
  grid-column: col-start / span 3;
  grid-row: 1 / 2;
`