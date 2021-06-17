import {useState,useEffect} from 'react'
import {connect, useSelector} from 'react-redux'
import { db } from '../../config/fbConfig'
import firebase from 'firebase'
import { useHistory } from 'react-router'
import { selectUser } from '../../features/userSlice'

const CreateProject = (props) => {
    const  history= useHistory() 
    const [title,setTitle]= useState('')
    const [content,setContent]= useState('')
   
    const user = useSelector(selectUser)

    const onSubmit= (e) => {
     e.preventDefault()

     db.collection('projects').add({
         title:title,
         content: content,
         fullName: user.displayName,
         timestamp: new Date(),
     })

     setContent('')
     setTitle('')
     
     history.push('/')
     console.log(user)
    
    }
    return (
        <div className='flex items-center justify-center h-full ' >
            <form onSubmit={onSubmit} className='shadow-lg rounded-md border border-gray-400 
            w-3/5 md:w-2/5 max-w-xl h-auto space-y-4 p-4 mt-3 bg-white' style={{backgroundImage:'linear-gradient(315deg, #03e5b7 0%, #037ade 74%)'}}>
                <h1 className='font-mono text-center text-white text-2xl'>Create Project</h1>

                <div className='flex-col space-y-2'>
                    <h1 className='text-white'>Title</h1>
                    <input type="title" value={title} className='border border-red-200 h-8 md:w-3/5 w-3/4 rounded-md focus:outline-none'  placeholder=' Title of your project' onChange={(e)=>setTitle(e.target.value)}/>
                </div>

                <div className='flex-col space-y-2'>
                    <h1 className='text-white'>Content</h1>
                    <textarea name="" value={content} className='border w-full rounded-md focus:outline-none' 
                    placeholder=' Your content' cols="30" rows="10" onChange={(e)=>setContent(e.target.value)}></textarea>
                </div>

                <div className='flex justify-center'>
                    <button className=' bg-green-500 p-1 
                    shadow-md focus:outline-none 
                    hover:bg-green-600 rounded-md text-white' type='submit'>Create</button>
                </div>
            </form>
            
        </div>
    )
}



export default CreateProject