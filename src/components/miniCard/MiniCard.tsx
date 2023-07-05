import { CardMedia, Typography } from "@mui/material"
import { ModelFeatures } from "../../interfaces/carInterface"
import { FC } from "react"
import { descriptionMiniCardStyles, titleMiniCardStyles } from "./styles"


interface MiniCardInterface {
    detail: ModelFeatures
}
const MiniCard: FC<MiniCardInterface> = ({ detail }: MiniCardInterface) => {


    const miniCardImageSX = {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: "center center",
        backgroundSize: "100% 100%",
        alignItems: "center",
        justifyContent: "center",
        height: 200,
        maxHeight: "100%",
        backgroundImage: `url("${detail?.image}")`,
        margin: 3
    }

    return (
        <>
            <CardMedia sx={miniCardImageSX} >
            </CardMedia>
            <Typography sx={titleMiniCardStyles}> {detail?.name}</Typography>
            <Typography sx={descriptionMiniCardStyles}> {detail?.description}</Typography>
        </>
    )
}
export default MiniCard