import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { FruitDetailPage, FruitListPage } from "../pages";
import LandingPage from "../pages/LandingPage";

export const RouterComponent = () => {
    return ( 
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/home" element={<FruitListPage/>}/>
            <Route path="/detalhes" element={<FruitDetailPage/>}/>

            <Route path="*" element={<Navigate replace to="/"/>}/> 
        </Routes>
        </BrowserRouter>
    )
}