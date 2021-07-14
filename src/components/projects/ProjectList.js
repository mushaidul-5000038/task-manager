import moment from "moment"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { db } from "../../config/fbConfig"

const ProjectList = ({title,content,fullName,timestamp,docId}) => {
    const [date,setDate]= useState('')
    useEffect(() => {
        if(timestamp){
        setDate(moment(timestamp.toDate()).calendar().toLocaleString())
        }
    }, [])

    const DeleteProject =()=>{
        db.collection("projects").doc(docId).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

    return (
      <div className='flex flex-col border shadow-lg mb-2 rounded-md px-4 py-5 bg-white max-w-lg font-medium ' style={{backgroundImage:'linear-gradient(315deg, #03e5b7 0%, #037ade 74%)'}}>
            <Link to={ { 
             pathname: "/project/" + title,
             state: {
                title: title,
                content:content,
                fullName:fullName,
                timestamp:timestamp,
             },
            }}> 
                <div className='text-xl text-white hover:text-yellow-200'>{title}</div>
            </Link>
            <hr  className='w-3/4 mb-2'/>
            <div className='text-gray-200 font-thin'>Posted by {fullName}</div>
            <div className='text-gray-200 font-thin'>{date} </div>
            <div className=' border rounded-full' onClick={DeleteProject}>Delete</div>    
        </div>
    
    )
}

export default ProjectList

// background-color: #eec0c6;
// background-image: ;
// background-color: #70b2d9;
// background-image: ;
// background-color: #89d8d3;
// background-image: ;
// background-color: #03e5b7;
// background-image: ;