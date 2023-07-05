export const tableContainerStyles = (theme: any) => ({
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    [theme.breakpoints.down('sm')]: {
        marginLeft: 1,
        marginRight: 1
    },
})

export const headerTableStyles = ({
    display: "flex",
})


export const menuButtonStyles = () => ({
    textTransform: "none",
    marginBottom: 1
})
export const titleTableStyles = (theme: any) => ({
    fontSize: "14px",
    fontWeight: 600,
    lineHeight: "14px",
    letterSpacing: "0.079px",
    marginTop: 1,
    [theme.breakpoints.down('sm')]: {
        display: "none"
    },
})

export const headerContainerStyles = ({
    display: "flex",
    flexGrow: 1,

})

export const stackStyles = (theme: any) => ({
    display: "grid",
    gridTemplateColumns: "auto auto auto auto",
    gridGap: "10px",
    border: 'none',
    [theme.breakpoints.down('sm')]: {
        display: "none"
    },
})

export const buttonStyles = ({
    textTransform: "none",
    lineHeight: "14px",
    letterSpacing: "0.079px",
    fontSize: "14px",
    borderRadius: "15px !important",
    mx: 1,
    border: "none !important",
    height: 30,
})

export const selectStyles = ({
    width: 130,
    marginBottom: 1,
    lineHeight: "14px",
    letterSpacing: "0.079px",
    fontSize: "15px",
    top: 5,
    "& .MuiSelect-icon": { top: 2 },
})

export const formControlStyles = (theme: any) => ({
    [theme.breakpoints.up('sm')]: {
        display: "none"
    },
})

export const menuItemStyles = ({
    paddingTop: 2,
    paddingBottom: 2
})

export const dividerStyles = ({
    marginBottom: 5
})