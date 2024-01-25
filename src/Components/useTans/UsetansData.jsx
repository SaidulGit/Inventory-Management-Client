import { useQuery } from "@tanstack/react-query"
import UseAxiosPublic from "../UseAxiosjs/UseAxiosPublic"




const Usetansdata = () => {
const axiosPublic = UseAxiosPublic();
const {data: userData=[],isPending,refetch} = useQuery({
    queryKey: ["user"],
    queryFn : async () => {
        const res = await axiosPublic.get("/userdata")
        return res.data
    }
})
return [userData,isPending,refetch]

}

export default Usetansdata;