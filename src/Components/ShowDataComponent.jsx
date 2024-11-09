import { useState } from "react"
import { showdatafunction } from "../functions/showdatafunction"

export default function ShowDataComponent({data})
{
    // const [data,setData]=useState([{id:100,content:'this content is relevent books'},{id:200,content:'this content is relevent books'},{id:300,content:'this content is relevent books'},{id:400,content:'this content is relevent books'},{id:500,content:'this content is relevent books'},{id:600,content:'this content is relevent books'},{id:700,content:'this content is relevent books'},{id:800,content:'this content is relevent books'}])
   
    return(<div className="showdata-div-container">
        {showdatafunction(data)}
    </div>)
}