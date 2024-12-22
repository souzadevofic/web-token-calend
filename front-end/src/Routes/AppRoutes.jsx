import React from 'react';
import { Routes, Route } from "react-router-dom";
import { HomePage } from '../Pages/HomePage/HomePage';
import { Login } from "../Pages/Login/Login";
import { CadUser } from "../Components/CadUser/CadUser";
import { PrivateRoute } from '../Components/PrivateRoute/PrivateRoute'

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route 
                path="/home" 
                element={
                    <PrivateRoute>
                        <HomePage />
                    </PrivateRoute>
                } 
            />
            <Route path="/createAccount" element={<CadUser />} />
        </Routes>
    );
}


// ver depois