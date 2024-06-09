import axios from "axios"

const axiosSecure = axios.create({
    baseURL:("https://inventory-assignment-server.vercel.app")
}) 
const UseAxiosSecure = () => {
  return axiosSecure ;
}

export default UseAxiosSecure