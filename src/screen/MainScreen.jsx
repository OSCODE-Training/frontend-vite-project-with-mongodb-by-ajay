import { useEffect, useState } from "react"
import HeaderComponent from "../Components/HeaderComponent"
import ShowDataComponent from "../Components/ShowDataComponent"
import { getData, postData } from "../Services/FetchNodeServices"
export default function MainScreen()
{
    const [data,setData]=useState([])

    const fetchAllData = async () => {
        var response = await getData('users/fetch_all_data')
        setData(response.data)
        
        
    }
    // console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaa:",data)


    useEffect(function(){
    fetchAllData()
    },[])
    return(<div >
        <HeaderComponent/>
        <ShowDataComponent data={data}/>
        {/* <LoginComponent/> */}
    </div>)
}