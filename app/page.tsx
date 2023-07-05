"use client"

import styled from 'styled-components'
import styles from './page.module.css'
import Header from '@/components/Header';
import HowToUse from '@/components/HowToUse';
import Footer from '@/components/Footer';
import AccessHistory from '@/components/AccessHistory';
import ReadSection from '@/components/ReadSection';
import { useEffect, useState } from 'react';

export default function Home() {
  const [history, setHistory] = useState<urlHistory[]>([]);
  
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_LOCAL_STORAGE_KEY) {
      return
    }
    const localString = localStorage.getItem(process.env.NEXT_PUBLIC_LOCAL_STORAGE_KEY);
    if (!localString) {
      return;
    }
    const localData = JSON.parse(localString) as dataFromLocalStrage;
    setHistory(localData.history)
  }, [])
  
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_LOCAL_STORAGE_KEY) {
      return
    }
    const localString = JSON.stringify({
      history: history
    })
    localStorage.setItem(process.env.NEXT_PUBLIC_LOCAL_STORAGE_KEY, localString);
  }, [history])
  return (
    <main className={styles.main}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
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