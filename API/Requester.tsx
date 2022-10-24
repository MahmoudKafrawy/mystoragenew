import {useQuery} from "react-query";
import axios from "axios";

interface RequesterProps{
    URL : string
}
export const Requester:React.FC<RequesterProps> = ({URL}) => {
    const{isLoading,data}=useQuery("user",()=> {
        return axios.get(`${URL}`)
    })    
    if(isLoading){
        return (<>loading</>)
    }
    return(
        <>
        {data?.data.map((user:any,index:number)=>(
            <div key={index}>
                {user.name}
            </div>
        ))}
        </>
    )
}
