export const footerContainerStyles = (theme: any) => ({
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    [theme.breakpoints.down('sm')]: {
        marginLeft: 1,
        marginRight: 1
    },
})

export const titleFooterDetailStyles = () => ({
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "27px",
    letterSpacing: "-0.4px"
})

export const contentFooterDetailStyles = () => ({
    marginTop: 1,
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "27px",
    letterSpacing: "-0.1px"
})


export const imageFooterStyles = (theme: any) => ({
    height: 250,
    witdh: "100%",
    [theme.breakpoints.down('md')]: {
        height: 250,
    },
    [theme.breakpoints.down('sm')]: {
        height: 150,
    },
})