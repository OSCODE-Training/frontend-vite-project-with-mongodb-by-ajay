import { useState } from 'react'
import '../cssfolder.css/AddDataComponent.css'
import InputComponent from './InputComponent'
import { postData } from '../Services/FetchNodeServices'
import { useNavigate } from 'react-router-dom'



export default function AddDataComponent()
{   var User=JSON.parse(localStorage.getItem("USER"))
    var navigate = useNavigate()
    const [boxshadowone,setBoxShadowone]=useState('')
    const [content,setContent]=useState('')
    const [emailid,setEmailId]=useState(User?.emailid)
    
    const submitData = async () => {
        
        var response = await postData('contentsubmit/data_submit',{emailid:emailid,content:content})
        if(response?.status)
        {
            alert(response?.message)
            navigate('/homescreen')
        }
    }
    
    return(<div className='main-container-adddata'>
        <div className='main-second-container-adddata'>
            <div><InputComponent width={"80%"} height={"50px"} borderRadius={"5px"} paddingLeft="10px" boxShadow={boxshadowone}  onFocus={()=>setBoxShadowone("0px 0px 14px 1px rgb(219 219 173)")} onBlur={()=>setBoxShadowone("")} placeholder="Add Something" onChange={(e)=>setContent(e.target.value)}/></div> 
            <div className='addbtn' onClick={submitData}>Add</div>
       </div>
    </div>)
}


