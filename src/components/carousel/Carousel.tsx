import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { DetailCar, ModelFeatures, } from "../../interfaces/carInterface";
import { Box } from "@mui/material";
import MiniCard from "../miniCard/MiniCard";
import { FC } from "react";


interface CarouselDetailInterface {
    carDetail: DetailCar
}
const CarouselDetail: FC<CarouselDetailInterface> = ({ carDetail }: CarouselDetailInterface) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };
    return (
        <Box sx={{ marginRight: 1, marginLeft: 1, background: "#F7F7F7" }}>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {carDetail?.model_features ? carDetail?.model_features.map((detail: ModelFeatures) => {
                    return (
                        <MiniCard detail={detail}></MiniCard>
                    );
                }) : <div />}

            </Carousel>
        </Box>

    )


}

export default CarouselDetail
