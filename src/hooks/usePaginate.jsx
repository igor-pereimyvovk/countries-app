import { useEffect, useState } from "react";

export const usePaginate = (countiesLength) => {
    const [isPaginationLoading, setIsPaginationLoading] = useState(false);
    const [displayedAmount, setDisplayedAmount] = useState(12);

    useEffect(() => {
        document.addEventListener("scroll", scrollHandler);

        return () => {
            document.removeEventListener("scroll", scrollHandler);
        };
    }, [displayedAmount, countiesLength]);

    useEffect(() => {
        if (isPaginationLoading) {
            setTimeout(() => {
                setIsPaginationLoading(false);
                setDisplayedAmount((prev) => prev + 8);
            }, 400);
        }
    }, [isPaginationLoading]);

    const scrollHandler = (e) => {
        if (displayedAmount < countiesLength) {
            if (
                e.target.documentElement.scrollHeight -
                    (e.target.documentElement.scrollTop + window.innerHeight) <
                10
            ) {
                setIsPaginationLoading(true);
            }
        }
    };

    return [displayedAmount, isPaginationLoading];
};
