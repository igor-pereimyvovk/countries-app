import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    increaseDisplayedAmount,
    selectDisplayedAmount,
} from "../store/countries/countriesSlice";

export const usePaginate = (countiesLength) => {
    const [isPaginationLoading, setIsPaginationLoading] = useState(false);
    const displayedAmount = useSelector(selectDisplayedAmount);
    const dispatch = useDispatch();

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
                dispatch(increaseDisplayedAmount());
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
