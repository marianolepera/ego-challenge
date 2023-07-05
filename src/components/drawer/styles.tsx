
export const boxContainer = ({
    display: "flex"
})

export const typoMenuStyles = (theme: any) => ({
    paddingTop: 1.7,
    color: theme.palette.primary.main
})

export const iconMenuStyles = ({
    fontSize: 35
})

export const drawerContainerStyles = ({
    width: 390
})

export const drawerHeaderContainerStyles = (theme: any) => ({
    display: "flex",
    justifyContent: "right",
    paddingTop: 2,
    [theme.breakpoints.down('sm')]: {
        paddingTop: 1.5

    },

})

export const typoHeaderStyles = ({
    paddingTop: 0.8,
    fontSiz: "14px",
    fontWeight: 400
})

export const drawerBackground = ({
    backgroundColor: "#EFEEEF",
})

export const listContainerStyles = ({
    marginRight: 3,
    display: "flex",
    justifyContent: "right",
})

export const drawerBodyContainerStyles = ({
    display: "flex",
    justifyContent: "right",
    marginRight: 3,

})

export const textListStyles = ({
    textAlign: "right",
    fontSize: "20px",
    fontWeight: 400,
    lineHeight: "normal",
    letterSpacing: "-0.1px"
})