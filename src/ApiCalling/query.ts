import { useQuery } from "@tanstack/react-query"
import { axiosInstance } from "../clients/axiosClient"
import { GetUserByIdResponseType } from "../../d.tyes";
import toast from "react-hot-toast";

export const GetUserById = (user: string) => {
    const query = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            try {
                const res = await axiosInstance.get('/getUserById', {
                    params: {
                        id: user
                    }
                });

                console.log(res.data);
                return res.data as GetUserByIdResponseType;
            } catch (error) {

                toast.error("Something went wrong");
            }
        },
        refetchOnWindowFocus: false,
        enabled: !!user,
    });

    return query;
}
