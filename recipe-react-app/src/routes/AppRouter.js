import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from '../App';
import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import AdminPage from './AdminPage/AdminPage';

class AppRouter extends React.Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path="/" element={<App/>}/>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/signup" element={<Signup/>}/>
                        <Route path="/admin-page" element={<AdminPage/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        )
    }
}

export default AppRouter;