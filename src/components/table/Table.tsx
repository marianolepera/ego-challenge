import * as React from 'react';
import { Box, Button, Divider, FormControl, Grid, Menu, MenuItem, Select, SelectChangeEvent, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material"
import { buttonStyles, dividerStyles, formControlStyles, headerContainerStyles, headerTableStyles, menuButtonStyles, menuItemStyles, selectStyles, stackStyles, tableContainerStyles, titleTableStyles } from './styles';
import CardCar from '../card/Card';
import { Car } from '../../interfaces/carInterface';
import Loader from "../../components/loader/Loader";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


interface TableInterface {
    cars: Car,
    loading: boolean,
    error: boolean
}
const Table: React.FC<TableInterface> = ({ cars, loading, error }: TableInterface) => {
    const [filterType, setFilterType] = React.useState('todos');
    const [filterCars, setFilterCars] = React.useState([]);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    React.useEffect(() => {
        getFilterCars()
    }, [filterType, cars])

    if (loading) return <Loader size={60}></Loader>

    if (error) return <> <Typography sx={{ textAlign: "center" }}>Hubo un error en el servidor</Typography></>

    const handleChangeFilter = (event: any) => {
        setFilterType(event.target.value)
    }

    const getFilterCars = () => {

        if (filterType === "todos") {
            setFilterCars(cars)
        }
        else if (filterType == "autos") {
            setFilterCars(cars?.filter((car: any) => car?.segment === 'Sedan' || car?.segment === 'Hatchback'))
        }
        else if (filterType == "pickups") {
            setFilterCars(cars?.filter((car: any) => car?.segment === 'Pickups y Comerciales'))
        }
        else if (filterType == "suvs") {
            setFilterCars(cars?.filter((car: any) => car?.segment === 'SUVs'))
        }
    }

    return (
        <>
            <Box sx={tableContainerStyles}>
                <Box sx={headerTableStyles}>
                    <Box sx={headerContainerStyles}>
                        <Typography sx={titleTableStyles}>Filtrar por </Typography>
                        <FormControl sx={formControlStyles}>
                            <Select
                                disableUnderline
                                sx={selectStyles}
                                variant='standard'
                                inputProps={{ label: "asdsa" }}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={filterType}
                                onChange={(e: SelectChangeEvent) => setFilterType(e.target.value)}
                            >
                                <MenuItem sx={menuItemStyles} value="todos" divider>Todos</MenuItem>
                                <MenuItem sx={menuItemStyles} value="autos" divider>Autos</MenuItem>
                                <MenuItem sx={menuItemStyles} value="pickups" divider>Pickups y Comerciales</MenuItem>
                                <MenuItem sx={menuItemStyles} value="suvs">SUVs y Crossovers</MenuItem>
                            </Select>
                        </FormControl>
                        <ToggleButtonGroup exclusive value={filterType} onChange={handleChangeFilter} sx={stackStyles}>
                            <ToggleButton sx={buttonStyles} value="todos" >Todos</ToggleButton>
                            <ToggleButton sx={buttonStyles} value="autos" >Autos</ToggleButton>
                            <ToggleButton sx={buttonStyles} value="pickups" >Pickups y Comerciales</ToggleButton>
                            <ToggleButton sx={buttonStyles} value="suvs">SUVs y Crossovers</ToggleButton>
                        </ToggleButtonGroup>
                    </Box>
                    <Button
                        sx={menuButtonStyles}
                        id="demo-customized-button"
                        aria-controls={open ? 'demo-customized-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        disableElevation
                        onClick={handleClick}
                        endIcon={<KeyboardArrowDownIcon />}
                    >
                        Ordenar por
                    </Button>
                    <Menu
                        id="demo-customized-menu"
                        MenuListProps={{
                            'aria-labelledby': 'demo-customized-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    >
                        <MenuItem onClick={() => { setFilterCars(prevState => prevState.sort((a, b) => a.id - b.id)); handleClose() }}>
                            Nada
                        </MenuItem>
                        <MenuItem onClick={() => { setFilterCars(prevState => prevState.sort((a, b) => b.price - a.price)); handleClose() }}>
                            De <b> mayor </b> a <b>menor</b> precio
                        </MenuItem>
                        <MenuItem onClick={() => { setFilterCars(prevState => prevState.sort((a, b) => a.price - b.price)); handleClose() }}>
                            De <b> menor </b> a <b>mayor</b> precio
                        </MenuItem>
                        <MenuItem onClick={() => { setFilterCars(prevState => prevState.sort((a, b) => b.year - a.year)); handleClose() }}>
                            Más <b>nuevos</b> primeros
                        </MenuItem>
                        <MenuItem onClick={() => { setFilterCars(prevState => prevState.sort((a, b) => a.year - b.year)); handleClose() }}>
                            Más <b>viejos</b> primeros
                        </MenuItem>
                    </Menu>
                </Box>
                <Divider sx={dividerStyles}></Divider>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {filterCars ? filterCars?.map((car: Car) => {
                        return (
                            <Grid item xs={12} md={3} lg={5} xl={5} key={car?.id}>
                                <CardCar id={car?.id} name={car?.name} photo={car?.photo} year={car?.year} price={car?.price} ></CardCar>
                            </Grid>
                        );
                    }) : <div />}
                </Grid>

            </Box>
        </>
    )
}

export default Table