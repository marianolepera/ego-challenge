import axios from 'axios'

const API_URL = "https://challenge.egodesign.dev/api/models/"

const getCarModels = async () => {
    try {
        const {data} = await axios.get(API_URL)
        return data
    } catch (error:any) {
        return error.message
    }

  }

const getCarModelDetail = async (id:number) => {
    try {
        const {data} = await axios.get(API_URL + id)
        return data
    } catch (error:any) {
        return error.message
    }
}

const carServices ={
    getCarModels,
    getCarModelDetail
}

export default carServices