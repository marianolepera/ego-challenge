import { Box, CardMedia, Grid, Typography } from "@mui/material"
import { contentFooterDetailStyles, footerContainerStyles, imageFooterStyles, titleFooterDetailStyles } from "./styles"
import { DetailCar, ModelHighLights } from "../../interfaces/carInterface";
import { FC } from "react";


interface FooterDetailInterface {
  carDetail: DetailCar
}
const FooterDetail: FC<FooterDetailInterface> = ({ carDetail }: FooterDetailInterface) => {
  const pattern = /<.*?>/g;
  return (
    <>
      <Box sx={footerContainerStyles}>
        <Grid container spacing={2} >
          {carDetail?.model_highlights && carDetail?.model_highlights?.map((detail: ModelHighLights) => (
            <>
              <Grid item lg={5} xs={12} sx={{ marginTop: 0 }}>
                <Typography sx={titleFooterDetailStyles}>{detail?.title} </Typography>
                <Typography sx={contentFooterDetailStyles}>{detail?.content?.replace(pattern, "")} </Typography>
              </Grid>
              <Grid item lg={7} xs={12}>
                <CardMedia sx={imageFooterStyles} component="img" image={detail?.image}></CardMedia>
              </Grid>
            </>
          ))}

        </Grid>
      </Box>
    </>
  )
}

export default FooterDetail