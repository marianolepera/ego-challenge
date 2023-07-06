export const logoStyles = ({
    marginLeft: 2
})

export const tabsStyles = () => ({
    color: "black",
    fontSize: "14px",
    textTransform: "none",
    fontWeight: 600,
    lineHeight: "normal",
})

export const tabsContainerStyles = (theme: any) => ({
    marginLeft: 5,
    flexGrow: 1,
    '.MuiTabs-indicator': {
        top: "47px",
        height: 10
    },
    [theme.breakpoints.down('sm')]: {
        display: "none",

    },
})

export const iconContainerStyles = (theme: any) => ({
    [theme.breakpoints.down('sm')]: {
        flexGrow: 1
    },
})

export const appBarContainer = (theme: any) => ({
    height: 55,
    backgroundColor: theme.palette.primary.contrastText,
    zIndex: theme.zIndex.drawer + 1
})
