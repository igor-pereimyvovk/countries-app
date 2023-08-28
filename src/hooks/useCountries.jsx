import { useMemo } from "react";

export const useCountries = (countries, search) => {
    const filteredPosts = useMemo(() => {
        if (search) {
            return countries.filter((country) => {
                return country.name.common
                    .toLowerCase()
                    .includes(search.toLowerCase());
            });
        }

        return countries;
    }, [search, countries]);

    // TODO: SELECT
    return filteredPosts;
};
