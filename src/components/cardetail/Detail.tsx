import { Box, CardMedia, Grid, Typography } from "@mui/material";
import { descriptionDetailStyles, detailContainerStyles, imageStyles, subTitleDetailStyles, titleDetailStyles } from "./styles";
import { DetailCar } from "../../interfaces/carInterface";
import { FC } from "react";

interface CarDetailInterface {
    carDetail: DetailCar
}
const CarDetail: FC<CarDetailInterface> = ({ carDetail }: CarDetailInterface) => {
    const text = carDetail?.description

    const removeHtmlTags = (text: any) => {
        const pattern = /<.*?>/g;
        return text?.replace(pattern, "");
    };

    const cleanDescription = removeHtmlTags(text);

    return (
        <>
            <Box sx={detailContainerStyles}>
                <Grid container spacing={1}>
                    <Grid item lg={7} xs={12}>
                        <CardMedia sx={imageStyles} component="img" image={carDetail?.photo} ></CardMedia>
                    </Grid>
                    <Grid item lg={5} xs={12}>
                        <Typography sx={titleDetailStyles}> {carDetail?.name}</Typography>
                        <Typography sx={subTitleDetailStyles}> {carDetail?.title}</Typography>
                        <Typography sx={descriptionDetailStyles}> {cleanDescription}</Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default CarDetail;