import { BrowserRouter, Route, Routes } from "react-router"
import MainLayout from "../components/layout/MainLayout"
import Home from "../pages/Home"

function PageRoutes() {
  return (
   <BrowserRouter >
            <Routes>
               
                <Route element={<MainLayout />}>
                 
                     <Route path="/" element={<Home/>} />
                </Route>
            </Routes>
        </BrowserRouter>
  )
}

export default PageRoutes
