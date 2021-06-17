
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Dashboard from './components/dashboard/Dashboard'
import Navbar from './components/layout/Navbar'
import CreateProject from './components/projects/CreateProject';
import ProjectDetails from './components/projects/ProjectDetails'
import { auth } from './config/fbConfig';
import { login, logout, selectUser } from './features/userSlice';

function App() {
  const user= useSelector(selectUser)
  const dispatch=useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName:userAuth.displayName,
        })
        )
      }
      else{
        dispatch(logout())

      }
    })
  }, [])
  return (
       <div className='absolute min-h-screen w-full' style={{backgroundImage: "linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%)"}}>
      <BrowserRouter>
         <Navbar/>
       <Switch>
         <div className='w-full '>
         <Route exact path='/'>
           {user&&<Dashboard/>}
         
         </Route>
         <Route path='/project/:id'>
         {user&& <ProjectDetails/>}
         </Route>
         <Route path='/signin'>
           {!user&& <SignIn/>}
         </Route>
         <Route path='/signup'>
            {!user&&<SignUp/>}
         </Route>
         <Route path='/createproject'>
           {user&& <CreateProject/>}
         </Route>
         </div>
       </Switch>
       </BrowserRouter>
       </div>
       
     
    
    
  );
}

export default App;

// background-color: #7ee8fa;
// background-image: linear-gradient(315deg, #7ee8fa 0%, #80ff72 74%);
//style={{backgroundImage: "linear-gradient(315deg, #7ee8fa 0%, #80ff72 74%)"}}
// background-color: #eec0c6;
// background-image: ;
