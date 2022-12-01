
import './App.css';
import Login from './components/account/Login';
import Home from './components/home/Home';
import { createContext, useEffect, useState } from "react";
import { Routes, Route, Navigate, Outlet} from 'react-router-dom';
import Header from './components/header/Header';
import CreatePost from './components/create/Createpost';


export const DataContext2 = createContext();

const PrivateRoute = (isAuthenticated)=>{
  return isAuthenticated ?
  <>
  
  <Outlet></Outlet>
  </>
  :
  <Navigate replace to={'/login'}/>
}
function App() {
  let [ accountValue , setAccountValue] = useState({name:'', username:''});
  let [isAuthenticated , setAuthentication] = useState(false);
  
  return (
     <DataContext2.Provider 
     value={{accountValue,setAccountValue,isAuthenticated , setAuthentication}}>
       <Header/>
       <div className="App"  style={{position:"static"}}>
       
      <Routes>
        <Route path='/' element= {<PrivateRoute isAuthenticated={isAuthenticated}/>}>
        <Route exact path='/' element={<Home/>}></Route>
        </Route>
        <Route path='/create' element= {<PrivateRoute isAuthenticated={isAuthenticated}/>}>
        <Route exact path='/create' element={<CreatePost/>}></Route>
        </Route>
        <Route  exact path='/login' element={<Login/>}></Route>
      </Routes>
      </div>
      </DataContext2.Provider>
  );
}

export default App;
