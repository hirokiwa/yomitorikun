"use client"

import styled from 'styled-components'
import styles from './page.module.css'
import Header from '@/components/Header';
import HowToUse from '@/components/HowToUse';
import Footer from '@/components/Footer';
import AccessHistory from '@/components/AccessHistory';
import ReadSection from '@/components/ReadSection';

export default function Home() {
  
  return (
    <main className={styles.main}>
      <Header />
      <BodyContentArea>
        <ReadSection/>
        <AccessHistory/>
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
