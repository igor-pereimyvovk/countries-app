import HomeWrapper from "../components/UI/HomeWrapper";
import { useState } from "react";
import SearchFilterPanel from "../components/SearchFilterPanel";

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
        </HomeWrapper>
    );
};

export default HomePage;
