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
      <Header />
      <BodyContentArea>
        <ReadSection
          history = {history}
          setHistory = {setHistory}
        />
        <AccessHistory
          history = {history}
        />
        <HowToUse/>
      </BodyContentArea>
      <Footer/>
    </main>
  )
}

const BodyContentArea = styled.div`
  width: 90%;
  text-align: center;
`
