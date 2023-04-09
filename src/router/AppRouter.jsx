import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Home } from '../components/index'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
        </Routes>
    )
}
