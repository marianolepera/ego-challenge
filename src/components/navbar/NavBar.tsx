import * as React from 'react';
import { AppBar, Avatar, Box, IconButton, Toolbar, Tabs, Tab } from "@mui/material"
import { appBarContainer, iconContainerStyles, logoStyles, tabsContainerStyles, tabsStyles } from "./styles"
import RightDrawer from '../drawer/RightDrawer';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [value, setValue] = React.useState('one');
    const navigate = useNavigate();
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    const localId = localStorage.getItem("id")
    const navigateToModel = () => {
        if (!localId) {
            setValue("two")
            navigate(`/${1}`)
        } else {
            setValue("two")
            navigate(`/${localId}`)
        }
    }
    return (
        <>
            <AppBar position="static" sx={appBarContainer}>
                <Toolbar disableGutters>
                    <Box sx={iconContainerStyles}>
                        <Link to="/">
                            <IconButton sx={logoStyles}>
                                <Avatar alt="Logo" src="/Logo.svg" />
                            </IconButton>
                        </Link>
                    </Box>
                    <Box sx={tabsContainerStyles}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            textColor="secondary"
                            indicatorColor="secondary"
                        >
                            <Tab sx={tabsStyles} value="one" label="Modelos" onClick={() => navigate('/')} />
                            <Tab sx={tabsStyles} value="two" label="Ficha de modelo" onClick={navigateToModel} />
                        </Tabs>
                    </Box>
                    <Box >
                        <RightDrawer></RightDrawer>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )

}

export default NavBar