import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Detail from "../components/cardetail/Detail";
import Carousel from "../components/carousel/Carousel";
import FooterDetail from "../components/footerDetail/FooterDetail";
import carServices from "../features/carService";
import Loader from "../components/loader/Loader";
import { Typography } from "@mui/material";

const CarDetail = () => {
    const { id }: any = useParams();
    const [carDetail, setCarDetail] = useState<any>()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    localStorage.setItem("id", id)
    const getCarDetail = async () => {
        setLoading(true)
        try {
            const data = await carServices.getCarModelDetail(id)
            setCarDetail(data)
            setLoading(false)
        } catch (error: any) {
            setLoading(false)
            setError(true)
            return error.message
        }

    }
    useEffect(() => {
        getCarDetail()
    }, [])

    if (loading) return <Loader size={60}></Loader>

    if (error) return <> <Typography sx={{ textAlign: "center" }}>Hubo un error en el servidor</Typography></>
    return (
        <>
            <Detail carDetail={carDetail}></Detail>
            <Carousel carDetail={carDetail}></Carousel>
            <FooterDetail carDetail={carDetail}></FooterDetail>
        </>
    )
}

export default CarDetail;