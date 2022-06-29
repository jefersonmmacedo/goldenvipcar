import {Route, Routes, Navigate} from 'react-router-dom';
import { Home } from '../pages/Home/Home';




function Router () {
//     const Local = localStorage.getItem("cpaedu");
//     const userLocal = JSON.parse(Local)

// function PrivateRoute({children} ) {
//     return userLocal !== null ? children : <Navigate to="/adm"/>
// }

    return (
        <Routes>
            <Route path="/" element={<Home />}/>      
   

            {/* Administração  */}
            {/* <Route path="/adm/dashboard"
                    element={ <PrivateRoute> <Dashboard /></PrivateRoute>} /> */}

    
        </Routes>      
    )
}

export {Router}