import '../cssfolder.css/header.css'
import { useNavigate } from 'react-router-dom';
export default function HeaderComponent()
{   var navigate =useNavigate()
    var User=JSON.parse(localStorage.getItem("USER"))
    const handleNavigationAndCheck=()=>{
        
            navigate('/addData')

        // console.log("eeeeeeeeeeeeeeeeeeeeeeee:",User)
    }


   const handleNavigationLogin=()=>{
    // if(User==null)
    //     {
    //         navigate('/login')
    //     }else
    //     {
    //         alert("You are already Login..")

    //     }
    
    navigate('/login')
    
   }
   


    return(<div className="main-container">
        <div className='man-container-for-home'>
            <div>Home</div>
        </div>
        
        <div className='main-container-for-login-and-adddata'>
        <div className='add-data' onClick={handleNavigationAndCheck}>Add Data</div>
        <div className='login' onClick={handleNavigationLogin} >Login</div>
        </div>

    </div>)
}