import { useEffect } from "react";

type TUsetInterval = (callback: () => void, delay?: number, end?: boolean) => void;
const useInterval: TUsetInterval = (callback, delay = 1000, end = false) => {
    useEffect(() => {
        const timer = window.setInterval(callback, delay);
        end && window.clearTimeout(timer)
        return () => { window.clearTimeout(timer) };
    }, [delay, end])
}

export default useInterval;