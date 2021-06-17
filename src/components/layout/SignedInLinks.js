import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import { auth } from "../../config/fbConfig"
import { logout, selectUser } from "../../features/userSlice"



const SignedInLinks =  () => {
    const [initials,setInitials]= useState('...')
    const dispatch=useDispatch()
    const history = useHistory()
    const user=useSelector(selectUser)

    useEffect(()=>{
      if(user){
        setInitials(user.displayName.split('')[0]+user.displayName.split(' ')[1].split('')[0])
      }
      history.push('/')
       
        
    },[user])
    
   

  
      
    

    
    const logoutOfApp=()=>{
        
      dispatch(logout());
      auth.signOut();
    }
    return (
        <div className='flex  font-thin items-center justify-center float-right md:text-lg text-base  mr-10 space-x-8'>
        <Link to='/createproject'> <div className='font-mono hover:text-green-100' >New Project</div></Link>
         <Link to='/'> <div onClick={logoutOfApp} className='font-mono hover:text-green-100'>Log Out</div></Link>
         <Link to='/'><div className=' border border-green-70000 
          rounded-full flex justify-center transform hover:scale-105 ease-in-out items-center w-10 h-10' style={{backgroundColor:'#48dbd6'}}>{user? initials: ''}</div>
          </Link>  
        </div>
    )
}

export default SignedInLinks
