import React, { useState } from "react";

import Carousel from "../../../components/carousel/Carousel";
// import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
// import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
// import "../trending/style.scss"
import useFetch from "../../../hooks/useFetch";
import SwitchTabs from "../../../components/switchpage/SwitchPage";

const TopRated = () => {
    const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = useFetch(`/${endpoint}/top_rated`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    };

    return (
        <div className="carouselSection relative mb-[70px]   ">
            <div className="flex items-center justify-between mb-[20px]">

            {/* <ContentWrapper> */}
                <span className="carouselTitle text-[24px] text-white font-normal">What's TopRated</span>
                <SwitchTabs
                    data={["Movies", "TV Shows"]}
                    onTabChange={onTabChange}
                    />
                    </div>
            {/* </ContentWrapper> */}
            <Carousel
                data={data?.results}
                loading={loading}
                endpoint={endpoint}
            />
        </div>
    );
};

export default TopRated;