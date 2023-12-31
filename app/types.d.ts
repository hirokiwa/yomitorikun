interface urlHistory {
    url: string
}

interface historyClient {
    url: string | undefined;
    title: string | undefined;
    favicon: string | undefined;
}

interface dataFromLocalStrage {
    history:urlHistory[]
}

interface paramsData {
    url: string
  }
  
interface paramsType {
    params: paramsData
}

interface copiedTimerType {
    copied: boolean;
    timerId: number | undefined;
}

interface iconSetting {
    height?: string;
    width?: string;
    fill?: string;
}

interface copiedMessageTokenType {
    timerId: number;
    topAtStart: number;
    firstMessagePositionTop: number;
}