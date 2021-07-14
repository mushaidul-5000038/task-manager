import { useEffect, useState } from "react"
import { db } from "../../config/fbConfig"
import ProjectList from "../projects/ProjectList"
import Notifications from "./Notifications"

const Dashboard = () => {
    
    const [projects,setProjects]= useState([])
    
    useEffect(() => {
        db.collection("projects").orderBy("timestamp","desc").onSnapshot((snapshot) => 
            setProjects(
                snapshot.docs.map((doc)=>(
                {
                    id:doc.id,
                    data:doc.data(),
                }
            ))
            )
        
        ) 
        
        
    }, [])

    return (
        <div className='grid relative grid-cols-2 gap-4 px-10  mt-3 w-full mb-3'>
            <div className='space-y-2'>
                 {projects && projects.map(({id,data:{title,content,fullName,timestamp}}) =>
                    <ProjectList title={title} content={content} fullName={fullName} timestamp={timestamp} key={id} docId={id}/>
                    )} 
                
            </div>
            <div>
                <Notifications projects={projects}/>
            </div>
            
        </div>
    )
}

export default Dashboard

