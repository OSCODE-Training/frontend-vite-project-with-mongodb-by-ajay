import { useState } from 'react'
import '../cssfolder.css/LoginComponent.css'
import InputComponent from './InputComponent'
import { postData } from '../Services/FetchNodeServices'
import { useNavigate } from 'react-router-dom'


export default function LoginComponent()
{  var navigate = useNavigate()
    const [boxshadowone,setBoxShadowone]=useState('')
    const [boxshadowtwo,setBoxShadowtwo]=useState('')
    const [boxshadowthree,setBoxShadowthree]=useState('')
    const [username,setUserName]=useState('')
    const [emailid,setEmailId]=useState('')
    const [password,setPassword]=useState('')
    // console.log("wwwwwwwwwwwwwwwwwwwwwwwww:",username+""+emailid+""+password)


    const handleSubmit=async()=>{
        var response = await postData('users/login_submit',{username:username,emailid:emailid,password:password})
        
        if(response?.status)
        {
            console.log('yesssssssssssssssss')
            localStorage.setItem('USER',JSON.stringify(response.data));
            // console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv:",response.token)
            localStorage.setItem("TOKEN", response.token);
            navigate('/homescreen')
        }
        else
        {
            alert(response?.message)
        }
    }

    return(<div className="main-containera">
        <div className='second-container'>
            
            <div className='first-input-field-container'><InputComponent  width={"80%"} height={"50px"} borderRadius={"5px"} paddingLeft="10px" boxShadow={boxshadowone}  onFocus={()=>setBoxShadowone("0px 0px 14px 1px rgb(219 219 173)")} onBlur={()=>setBoxShadowone("")} placeholder="Enter Name" onChange={(e)=>setUserName(e.target.value)}/></div>
            <div className='first-input-field-container'><InputComponent width={"80%"} height={"50px"} borderRadius={"5px"} paddingLeft="10px" boxShadow={boxshadowtwo}  onFocus={()=>setBoxShadowtwo("0px 0px 14px 1px rgb(219 219 173)")} onBlur={()=>setBoxShadowtwo("")} placeholder="Email Id" onChange={(e)=>setEmailId(e.target.value)}/></div>
            <div className='first-input-field-container'><InputComponent width={"80%"} height={"50px"} borderRadius={"5px"} paddingLeft="10px" boxShadow={boxshadowthree}  onFocus={()=>setBoxShadowthree("0px 0px 14px 1px rgb(219 219 173)")} onBlur={()=>setBoxShadowthree("")} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/></div>
            <div className='submitbtn-container'>
            <div className='submitbtn' onClick={handleSubmit}>Submit</div>
            </div>
        </div>
    </div>)
}