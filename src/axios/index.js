import axios from "axios";

const instance = axios.create({
    baseURL: "https://630a41233249910032833e6d.mockapi.io"
})

export default instance