import { Box, Button, CardMedia, Typography } from "@mui/material"
import { buttonCardStyles, cardContainerStyles, cardMediaStyles, containerButtonStyles, subTitleCardStyles, titleCardStyles } from "./styles"
import { FC } from "react"
import { Link } from "react-router-dom";

export interface CardCarInterface {
    photo: string;
    name: string;
    year: number;
    price: number;
    id: number;

}
const CardCar: FC<CardCarInterface> = ({ photo, name, year, price, id }: CardCarInterface) => {
    return (
        <>
            <Box sx={cardContainerStyles}>
                <Typography sx={titleCardStyles}>{name}</Typography>
                <Typography sx={subTitleCardStyles}> {year} | $ {price}</Typography>
                <CardMedia sx={cardMediaStyles} component="img" image={photo}></CardMedia>
                <Box sx={containerButtonStyles}>
                    <Link to={`/${id}`}>
                        <Button sx={buttonCardStyles} variant="contained"> Ver modelo</Button>
                    </Link>

                </Box>

            </Box>
        </>
    )
}

export default CardCar