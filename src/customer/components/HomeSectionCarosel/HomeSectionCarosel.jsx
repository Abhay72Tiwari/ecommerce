import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { alignProperty } from "@mui/material/styles/cssUtils";
import { useNavigate } from "react-router-dom";
const HomeSectionCarosel = ({ sectionName }) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const responsive = {
        0: { items: 1 },
        720: { items: 4 },
        1024: { items: 5.5 },
    };
    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);
    const syncActiveIndex = ({ item }) => setActiveIndex(item);
    const navigate = useNavigate();
    const handlegoCart = () => {
        navigate(`product/${5}`);
    };
    const items = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((i) => <HomeSectionCard />);
    return (
        <div className="relative px-4 lg:px-8">
            <div className="relative p-5 border" onClick={handlegoCart}>
                <h2 className="text-2xl font-extrabold text-gray-800 py-5" > {sectionName}</h2>
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    autoPlayInterval={1000}
                    disableDotsControls
                    responsive={responsive}
                    onSlideChange={syncActiveIndex}
                    activeIndex={activeIndex}

                />
                {activeIndex !== items.length - 5 && <Button
                    className="z-50"
                    variant="contained"
                    onClick={slideNext}
                    sx={{
                        position: "absolute",
                        top: "8rem",
                        right: "0rem",
                        transform: "translatex(50%) rotate(90deg)",
                        bgcolor: "white",
                    }}
                    aria-label="next"
                >
                    <KeyboardArrowLeftIcon
                        sx={{ transform: "rotate(90deg)", color: "black" }}
                    />
                </Button>}

                {activeIndex !== 0 && <Button
                    className="z-50"
                    variant="contained"
                    onClick={slidePrev}
                    sx={{
                        position: "absolute",
                        top: "8rem",
                        left: "0rem",
                        transform: "translatex(-50%) rotate(-90deg)",
                        bgcolor: "white",
                    }}
                    aria-label="next"
                >
                    <KeyboardArrowLeftIcon
                        sx={{ transform: "rotate(90deg)", color: "black" }}
                    />
                </Button>}
            </div>
        </div >
    );
};

export default HomeSectionCarosel;
