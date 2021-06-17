import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { auth } from '../../config/fbConfig'
import { login, selectUser } from '../../features/userSlice'

const SignIn =  () => {
    const history = useHistory()
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')
    const user= useSelector(selectUser)
    const dispatch=useDispatch()
    const onSubmit= (e) => {
     e.preventDefault()

     auth.signInWithEmailAndPassword(email,password).then(
         (userAuth)=> {
             dispatch(
                 login({
                    email: userAuth.email,
                    uid: userAuth.uid,
                    displayName:userAuth.displayName,
                    isloading:true,
                 })
             )
         }
     ).catch((error)=> alert(error))
    
   
      
     
    }
    return (
        <div className='flex items-center justify-center' >
            <form onSubmit={onSubmit} className='shadow-lg rounded-md border border-gray-400 
            w-3/5 md:w-2/5 max-w-xl h-64 space-y-4 p-4 mt-3 py-2' style={{backgroundImage:'linear-gradient(315deg, #03e5b7 0%, #037ade 74%)'}}>
                <h1 className='text-center font-mono text-2xl text-white'>Sign In</h1>
                <div className='flex-col space-y-1'>
                    <h1 className='text-white'>Email</h1>
                    <input type="email" value={email} className='border h-8 md:w-3/5 rounded-md focus:outline-none' onChange={(e)=>setEmail(e.target.value)} placeholder=' Your Email ID'/>
                </div>
                <div className='flex-col space-y-1'>
                    <h1 className='text-white'>Password</h1>
                    <input type="password" value={password} className='border h-8 md:w-3/5 rounded-md focus:outline-none' placeholder=' Your Password' onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <div className='flex justify-center space-y-1 mb-4'>
                    <button className='bg-green-500 p-1 
                    shadow-md focus:outline-none 
                    hover:bg-green-600 rounded-md text-white' type='submit'>Login</button>
                </div>
            </form>
            
        </div>
    )
}

export default SignIn
