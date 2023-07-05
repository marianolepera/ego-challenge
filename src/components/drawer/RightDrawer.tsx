import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { boxContainer, drawerBackground, drawerBodyContainerStyles, drawerContainerStyles, drawerHeaderContainerStyles, iconMenuStyles, listContainerStyles, textListStyles, typoHeaderStyles, typoMenuStyles } from './styles';
import CloseIcon from '@mui/icons-material/Close';

type Anchor = 'right';

const RightDrawer = () => {
    const [state, setState] = React.useState({
        right: false,
    });


    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <Box
            sx={drawerContainerStyles}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Box sx={drawerHeaderContainerStyles}>
                <Typography sx={typoHeaderStyles}>
                    Cerrar
                </Typography>
                <IconButton onClick={toggleDrawer(anchor, false)}>
                    <CloseIcon />
                </IconButton>
            </Box>

            <Box sx={drawerBodyContainerStyles}>
                <List>
                    {['Modelos', 'Servicios y Accesorios', 'Financiación', 'Reviews y Comunidad'].map((text, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton>
                                <ListItemText sx={textListStyles} primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>

            <Divider variant="middle" />
            <Box sx={drawerBodyContainerStyles}>
                <List>
                    {['Toyota Mobility Service', 'Toyota Gazoo Racing', 'Toyota Híbridos'].map((text, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton>
                                <ListItemText sx={textListStyles} primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>

            <Divider variant="middle" />
            <Box sx={drawerBodyContainerStyles}>
                <List>
                    {['Concesionarios', 'Test Drive', 'Contacto'].map((text, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton >
                                <ListItemText sx={textListStyles} primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Box sx={drawerBackground} >
                <Box sx={listContainerStyles}>
                    <List >
                        {['Actividades', 'Servicios al Cliente', 'Ventas Especiales', 'Innovación', 'Prensa', 'Acerca de...'].map((text, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemButton>
                                    <ListItemText sx={textListStyles} primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>

            </Box>

        </Box>
    );

    return (
        <div>
            {(['right'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Box sx={boxContainer}>
                        <Typography sx={typoMenuStyles}> Menú</Typography>
                        <IconButton
                            onClick={toggleDrawer(anchor, true)}
                            color="primary"
                        >
                            <MenuIcon sx={iconMenuStyles} />
                        </IconButton>
                    </Box>
                    <Drawer
                        elevation={20}
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>


                </React.Fragment>
            ))}
        </div>
    );
}

export default RightDrawer;