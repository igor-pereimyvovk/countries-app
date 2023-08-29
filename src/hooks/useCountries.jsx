import { useMemo } from "react";

export const useCountries = (countries, search, region) => {
    let filteredCounties = useMemo(() => {
        if (search) {
            return countries.filter((country) =>
                country.name.common.toLowerCase().includes(search.toLowerCase())
            );
        }

        return countries;
    }, [search, countries]);

    filteredCounties = useMemo(() => {
        if (region) {
            return filteredCounties.filter(
                (country) => country.region === region
            );
        }

        return filteredCounties;
    }, [region, filteredCounties]);

    return filteredCounties;
};
