import { Link, NavLink } from "react-router-dom"



const SignedOutLinks = () => {
    return (
        <div className='flex float-right text-xl  mr-10 space-x-8'>
         <Link to='/signup'><div className='hover:text-green-100' >Sign Up</div> </Link>
         <Link to='/signin'><div className=''>Log In</div></Link>
         
            
        </div>
    )
}

export default SignedOutLinks
