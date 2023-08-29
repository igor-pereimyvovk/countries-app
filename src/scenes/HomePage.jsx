import { useState } from "react";
import HomeWrapper from "../components/UI/HomeWrapper";
import SearchFilterPanel from "../components/SearchFilterPanel";
import CountiesList from "../components/CountiesList";

const HomePage = () => {
    const [search, setSearch] = useState("");
    const [region, setRegion] = useState("");

    return (
        <HomeWrapper>
            <SearchFilterPanel
                search={search}
                setSearch={setSearch}
                region={region}
                setRegion={setRegion}
            />
            <CountiesList search={search} region={region} />
        </HomeWrapper>
    );
};

export default HomePage;
