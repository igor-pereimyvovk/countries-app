export const getCountryInfo = (country) => {
    const nativeNames = country && Object.values(country?.name?.nativeName);
    const nativeName = nativeNames && nativeNames[nativeNames.length - 1];
    const currencies =
        country &&
        Object.values(country.currencies)
            .map((currency) => currency.name)
            .join(", ");
    const languages = country && Object.values(country.languages).join(", ");

    return [nativeName, currencies, languages];
};
