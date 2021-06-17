import moment from "moment"
import { useEffect, useState } from "react"

const Notifications = ({projects}) => {

    const [date,setDate]= useState('')
    // useEffect(() => {
    //     if(timestamp){
    //     setDate(moment(timestamp.toDate()).fromNow().toLocaleString())
    //     }
    // }, [])
    return (
        <div className='bg-gray-600 max-w-lg px-3 py-4 shadow-lg rounded-lg text-white' style={{backgroundImage:'linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%)'}}>
              <div className='text-2xl text-center mb-2'>Notifications</div>
              
                {projects && projects.map(({id,data:{title,content,fullName,timestamp}}) =>
                    
                      <div className='mb-2 '>
                          <h1 className='text-base font-extralight'><span className='text-red-200 text-lg font-normal'> {fullName}</span> added a project </h1>
                          <h2 className='font-thin text-sm text-gray-300'>{timestamp && moment(timestamp?.toDate()).fromNow().toLocaleString()}</h2>
                          <hr  className='w-3/4'/>
                      </div>
                    )}        
        </div>
    )
}

export default Notifications

// background-color: #0cbaba;
// background-image: ;
// background-color: #abe9cd;
// background-image: ;
