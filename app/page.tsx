"use client"

import styled from 'styled-components'
import styles from './page.module.css'
import Header from '@/components/Header';
import HowToUse from '@/components/HowToUse';
import Footer from '@/components/Footer';
import AccessHistory from '@/components/AccessHistory';
import ReadSection from '@/components/ReadSection';
import useHome from '@/hooks/useHome';
import { useRef } from 'react';

const Home = () => {
  const { history, setHistory } = useHome();
  const bodyContentRef = useRef<HTMLDivElement>(null);

  return (
    <main className={styles.main}>
      <Header />
      <BodyContentAreaWrapper>
        <SideContentsArea>
          <AccessHistory
            history = {history}
            bodyContentRef = {bodyContentRef}
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
  grid-auto-rows: minmax(0, auto);
  gap: 1em;
  width: 100%;
  max-width: 1250px;
`

const BodyContentArea = styled.div`
  text-align: center;
  grid-column: 4 / 13;
  @media (max-width: 900px) {
    grid-row: 1 / 2;
    grid-column: 1/13;
  }
`
const SideContentsArea = styled.div`
  grid-column: 1 / 4;
  min-width: 300px;
  @media (max-width: 900px) {
    grid-row: 2 / 3;
    grid-column: 1/13;
  }
`