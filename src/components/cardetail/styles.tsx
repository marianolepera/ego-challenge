

export const detailContainerStyles = (theme: any) => ({
    marginLeft: 15,
    marginRight: 15,
    [theme.breakpoints.down('sm')]: {
        marginLeft: 1,
        marginRight: 1
    },
})

export const titleDetailStyles = (theme: any) => ({
    marginTop: 15,
    color: theme.palette.primary.main,
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "27px",
    [theme.breakpoints.down('md')]: {
        marginTop: 1
    },
})

export const subTitleDetailStyles = (theme: any) => ({
    color: theme.palette.primary.main,
    fontSize: "50px",
    fontWeight: 600,
    lineHeight: "57px",
    letterSpacing: "-1px",
    [theme.breakpoints.down('md')]: {
        fontSize: "35px",
        fontWeight: 600,
        lineHeight: "44px",
        letterSpacing: "-0.7px",
    },
})

export const descriptionDetailStyles = (theme: any) => ({
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "27px",
    letterSpacing: "-0.1px"

})

export const imageStyles = (theme: any) => ({
    height: 450,
    witdh: "100%",
    [theme.breakpoints.down('md')]: {
        height: 250,
    },
    [theme.breakpoints.down('sm')]: {
        height: 150,
    },
})