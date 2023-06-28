interface urlHistory {
    url: string
}

interface historyClient {
    url: string;
    title: string;
    favicon: string | undefined;
}

interface dataFromLocalStrage {
    history:urlHistory[]
}