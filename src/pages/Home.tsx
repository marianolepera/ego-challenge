import { Typography } from "@mui/material"
import Table from "../components/table/Table"
import * as React from 'react';
import carServices from "../features/carService";

const Home = () => {
    const [cars, setCars] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(false)
    const titleStyles = (theme: any) => ({
        fontSize: "50px",
        fontWeight: 700,
        lineHeight: "57px",
        letterSpacing: "-1px",
        marginTop: 10,
        marginLeft: 15,
        [theme.breakpoints.down('sm')]: {
            fontSize: "35px",
            marginTop: 6,
            marginLeft: 1,
            marginRight: 1,
            lineHeight: "44px",
            letterSpacing: "-0.7px"
        },
    })

    const getCars = async () => {
        setLoading(true)
        try {
            const data = await carServices.getCarModels()
            setCars(data)
            setLoading(false)
        } catch (error: any) {
            setLoading(false)
            setError(true)
            return error.message
        }

    }

    React.useEffect(() => {
        getCars()
    }, [])
    return (
        <>
            <Typography sx={titleStyles}>Descubrí todos los modelos </Typography>
            <Table cars={cars} loading={loading} setLoading={setLoading} error={error}></Table>
        </>
    )
}

export default Home