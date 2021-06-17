
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { selectUser } from "../../features/userSlice"
import SignedInLinks from "./SignedInLinks"
import SignedOutLinks from "./SignedOutLinks"


const Navbar = () => {
    

    const user= useSelector(selectUser)
    
    
    return (
        <div className='w-full h-20 bg-gray-500 text-white shadow-md  ' style={{backgroundImage:'linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%)'}} >
            <div className='flex px-2 py-4 justify-between items-center'>
                <Link to='/'><div className='float-left ml-3 md:text-4xl text-2xl font-mono'>Task Hub</div></Link>
                {user?.displayName ?(<SignedInLinks/>):
                (<SignedOutLinks/>)}
            </div>
        </div>
    )
}

export default Navbar
