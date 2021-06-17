import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../../config/fbConfig'
import {login, selectUser} from '../../features/userSlice'

const SignUp =  () => {
    const history = useHistory()
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')
    const [fname,setFname]= useState('')
    
    const user =  useSelector(selectUser)
    const dispatch = useDispatch();

    const onSubmit= (e) => {
     e.preventDefault()
    console.log(user)
     if(!fname){
         return alert("Please enter your first name")
     }

     auth.createUserWithEmailAndPassword(email,password).then(
         (userAuth)=>{
         userAuth.user.updateProfile({
             displayName:fname,
         })
         .then(()=>{
             dispatch(login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName:fname,
             }))
         })
     }).catch((error)=> alert(error.message))

         console.log(user)
         history.push('/')
     
      
     console.log(fname,' just signed Up')
    }
    return (
        <div className='flex items-center justify-center h-full' >
            <form onSubmit={onSubmit} className='shadow-lg rounded-md border border-gray-400 
            w-3/5 md:w-2/5 max-w-xl h-auto space-y-4 p-4 mt-3' style={{backgroundImage:'linear-gradient(315deg, #03e5b7 0%, #037ade 74%)'}}>
                <h1 className='font-mono text-center text-2xl text-white'>Sign Up</h1>
                <div className='flex-col space-y-1'>
                    <h1 className='text-white'>Email</h1>
                    <input type="email" value={email} className='border h-8 md:w-3/5 rounded-md focus:outline-none' onChange={(e)=>setEmail(e.target.value)} placeholder=' Your Email ID'/>
                </div>
                <div className='flex-col space-y-1'>
                    <h1 className='text-white'>Password</h1>
                    <input type="password" value={password} className='border h-8 md:w-3/5 rounded-md focus:outline-none' placeholder=' Your Password' onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <div className='flex-col space-y-1'>
                    <h1 className='text-white'>Full name</h1>
                    <input type="text" value={fname} className='border h-8 md:w-3/5 rounded-md focus:outline-none' placeholder=' Your first name' onChange={(e)=>setFname(e.target.value)} />
                </div>
             
                <div className='flex justify-center'>
                    <button className='bg-green-500 p-1 
                    shadow-md focus:outline-none 
                    hover:bg-green-600 rounded-md text-white' type='submit'>Register</button>
                </div>
            </form>
            
        </div>
    )
}

export default SignUp
