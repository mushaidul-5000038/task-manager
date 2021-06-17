import moment from "moment"
import { useState } from "react"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const ProjectDetails = () => {
    const location = useLocation()
    const { title,content,fullName,timestamp } = location.state
    const [date,setDate]= useState('')
    console.log(title)

    useEffect(()=>{
        
            if(timestamp){
            setDate(moment(timestamp.toDate()).calendar().toLocaleString())
            }
        
    })

    return (
        <div className='flex items-center justify-center mt-2'>
            <div className='divide-y divide-fuchsia-300 max-w-2xl'>
                <div className='space-y-2 mb-2'>
                    <span className='text-3xl'>{title}</span>
                    <p className='text-left'>{content}</p>
                </div>
                <div className='space-y-2 mt-4 text-gray-500 text-m'>
                    <div>Posted by {fullName}</div>
                    <div>{date}</div>
                </div>

            </div>
            
        </div>
    )
}

export default ProjectDetails
