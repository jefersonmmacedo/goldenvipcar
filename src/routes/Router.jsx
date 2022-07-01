import {Route, Routes, Navigate} from 'react-router-dom';
import { Driver } from '../pages/Driver/Driver';
import { Home } from '../pages/Home/Home';
import { Login } from '../pages/Login/Login';
import { Passenger } from '../pages/Passenger/Passenger';
import { Premier } from '../pages/Premier/Premier';




function Router () {
//     const Local = localStorage.getItem("cpaedu");
//     const userLocal = JSON.parse(Local)

// function PrivateRoute({children} ) {
//     return userLocal !== null ? children : <Navigate to="/adm"/>
// }

    return (
        <Routes>
            <Route path="/" element={<Home />}/>      
            <Route path="/motorista" element={<Driver />}/>      
            <Route path="/passageiro" element={<Passenger />}/>      
            <Route path="/corridapremiada" element={<Premier />}/>      
            <Route path="/login" element={<Login />}/>      
   

            {/* Administração  */}
            {/* <Route path="/adm/dashboard"
                    element={ <PrivateRoute> <Dashboard /></PrivateRoute>} /> */}

    
        </Routes>      
    )
}

export {Router}