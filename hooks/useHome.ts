import { useEffect, useState } from "react";

const useHome = () => {
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

  return { history, setHistory };
}

export default useHome;